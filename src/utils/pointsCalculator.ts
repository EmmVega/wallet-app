interface Season {
  name: string;
  startMonth: number;
  startDay: number;
}

const SEASONS: Season[] = [
  { name: 'Spring', startMonth: 3, startDay: 1 },
  { name: 'Summer', startMonth: 6, startDay: 1 },
  { name: 'Autumn', startMonth: 9, startDay: 1 },
  { name: 'Winter', startMonth: 12, startDay: 1 }
];

export const getCurrentSeason = (date: Date): Season => {
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();

  // Find the current season
  let currentSeason = SEASONS[0];
  for (let i = 0; i < SEASONS.length; i++) {
    const season = SEASONS[i];
    if (month > season.startMonth || (month === season.startMonth && day >= season.startDay)) {
      currentSeason = season;
    } else {
      break;
    }
  }

  return currentSeason;
};

export const getDayOfSeason = (date: Date, season: Season): number => {
  const seasonStart = new Date(date.getFullYear(), season.startMonth - 1, season.startDay);
  const diffTime = Math.abs(date.getTime() - seasonStart.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
};

export const calculatePoints = (dayOfSeason: number): number => {
  if (dayOfSeason === 1) return 2;
  if (dayOfSeason === 2) return 3;

  // For day 3 and beyond, use the formula:
  // 100% of day-2 points + 60% of day-1 points
  const points = calculatePoints(dayOfSeason - 2) + (calculatePoints(dayOfSeason - 1) * 0.6);
  return Math.round(points);
};

export const formatPoints = (points: number): string => {
  if (points >= 1000) {
    return `${Math.round(points / 1000)}k`;
  }
  return points.toString();
}; 