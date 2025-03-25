import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transaction } from '../../../types/Transaction';
import './TransactionCard.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  const formatCurrency = (amount: number) => {
    const absAmount = Math.abs(amount);
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(absAmount);

    // For payments (positive amounts), add "+" prefix
    if (transaction.type === 'payment') {
      return `+${formattedAmount}`;
    }
    // For card expenses (negative amounts), show without sign
    return formattedAmount;
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 7) {
      return date.toLocaleDateString('en-US', { weekday: 'long' });
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short',
        day: 'numeric'
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#4CAF50';
      case 'pending':
        return '#FFC107';
      default:
        return '#757575';
    }
  };

  return (
    <div className="transaction-card">
      <div 
        className="transaction-icon"
        style={{ backgroundColor: transaction.iconBackground }}
      >
        <FontAwesomeIcon icon={transaction.icon as IconProp} />
      </div>
      <div className="transaction-content">
        <div className="transaction-header">
          <div className="transaction-title-group">
            <h3 className="transaction-title">{transaction.name}</h3>
            <div className="transaction-meta">
              {transaction.status === 'pending' && (
                <span className="transaction-status pending">Pending</span>
              )}
              {transaction.authorizedUser && (
                <span className="transaction-user">by {transaction.authorizedUser}</span>
              )}
            </div>
          </div>
          <div className="transaction-amount">
            {formatCurrency(transaction.amount)}
          </div>
        </div>
        <div className="transaction-footer">
          <p className="transaction-description">{transaction.description}</p>
          <span className="transaction-date">{formatDate(new Date(transaction.date))}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard; 