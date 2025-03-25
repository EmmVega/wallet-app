import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  type: 'card_expense' | 'payment';
  status: 'completed' | 'pending';
  icon: string;
  iconBackground: string;
  description: string;
  authorizedUser: string | null;
} 