import React from 'react';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './CardBalance.css';

interface CardBalanceProps {
  balance: number;
}

const CardBalance: React.FC<CardBalanceProps> = ({ balance }) => {
  const available = 1500 - balance; // Calculate available as limit minus current balance

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="balance-card">
      <div className="card-header">
        <div className="card-title">Card Balance</div>
      </div>
      <div className="card-value">{formatCurrency(balance)}</div>
      <div className="card-available">
        <span className="detail-label">Available:</span>
        <span className="detail-value">{formatCurrency(available)}</span>
      </div>
    </div>
  );
};

export default CardBalance; 