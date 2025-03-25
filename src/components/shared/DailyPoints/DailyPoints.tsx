import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './DailyPoints.css';

interface DailyPointsProps {
  current: number;
  total: number;
  nextReward: number;
}

const DailyPoints: React.FC<DailyPointsProps> = ({ current, total, nextReward }) => {
  const progress = (current / nextReward) * 100;

  return (
    <div className="daily-points">
      <div className="points-header">
        <div className="points-title">
          <FontAwesomeIcon icon={faStar} className="points-icon" />
          <span>Daily Points</span>
        </div>
        <div className="points-value">{current} / {nextReward}</div>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="points-footer">
        <span>Total Points: {total}</span>
      </div>
    </div>
  );
};

export default DailyPoints; 