import { Transaction } from '../types/Transaction';
import { 
  faShoppingCart, 
  faUtensils, 
  faGasPump, 
  faPlane, 
  faHotel,
  faGamepad,
  faGift,
  faCar,
  faHome,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';

const iconList = [
  { icon: faShoppingCart, background: '#4CAF50' },
  { icon: faUtensils, background: '#FF5722' },
  { icon: faGasPump, background: '#2196F3' },
  { icon: faPlane, background: '#9C27B0' },
  { icon: faHotel, background: '#FF9800' },
  { icon: faGamepad, background: '#E91E63' },
  { icon: faGift, background: '#00BCD4' },
  { icon: faCar, background: '#795548' },
  { icon: faHome, background: '#607D8B' },
  { icon: faCreditCard, background: '#3F51B5' },
];

const transactionNames = [
  'IKEA',
  'Target',
  'Walmart',
  'Amazon',
  'Netflix',
  'Starbucks',
  'McDonald\'s',
  'Shell Gas',
  'Uber',
  'Spotify'
];

const descriptions = [
  'Home furniture purchase',
  'Groceries and household items',
  'Online shopping',
  'Monthly subscription',
  'Coffee and snacks',
  'Fuel purchase',
  'Ride service',
  'Entertainment subscription',
  'Home improvement',
  'Card top-up'
];

const authorizedUsers = [
  'John Smith',
  'Sarah Johnson',
  'Mike Wilson',
  'Emma Davis',
  'David Brown'
];

export const generateMockTransactions = (): Transaction[] => {
  const transactions: Transaction[] = [];
  const today = new Date();

  for (let i = 0; i < 10; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i); // Each transaction is one day apart

    const isPayment = Math.random() > 0.7; // 30% chance of being a payment
    const isPending = Math.random() > 0.8; // 20% chance of being pending
    const hasAuthorizedUser = Math.random() > 0.7; // 30% chance of having an authorized user

    const iconIndex = Math.floor(Math.random() * iconList.length);
    const nameIndex = Math.floor(Math.random() * transactionNames.length);
    const descIndex = Math.floor(Math.random() * descriptions.length);
    const userIndex = Math.floor(Math.random() * authorizedUsers.length);

    const amount = isPayment 
      ? Math.floor(Math.random() * 500) + 100 // $100-$600 for payments
      : Math.floor(Math.random() * 200) + 10; // $10-$210 for expenses
    transactions.push({
      id: String(i + 1),
      type: isPayment ? 'payment' : 'card_expense',
      amount: isPayment ? amount : -amount,
      name: transactionNames[nameIndex],
      description: descriptions[descIndex],
      date: date.toISOString(),
      status: isPending ? 'pending' : 'completed',
      authorizedUser: hasAuthorizedUser ? authorizedUsers[userIndex] : null,
      icon: iconList[iconIndex].icon.toString(),
      iconBackground: iconList[iconIndex].background
    });
  }

  return transactions;
}; 