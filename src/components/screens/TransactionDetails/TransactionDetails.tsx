import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt, faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../../../types/Transaction';
import './TransactionDetails.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TransactionDetailsProps {
  transaction: Transaction;
  onClose: () => void;
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({ transaction, onClose }) => {
  const formatCurrency = (amount: number) => {
    const absAmount = Math.abs(amount);
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(absAmount);

    if (transaction.type === 'payment') {
      return `+${formattedAmount}`;
    }
    return formattedAmount;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="transaction-details-screen">
      <div className="transaction-details-header">
        <button className="back-button" onClick={onClose}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>Transaction Details</h2>
      </div>

      <div className="transaction-details-content">
        <div 
          className="transaction-icon-large"
          style={{ backgroundColor: transaction.iconBackground }}
        >
          <FontAwesomeIcon icon={transaction.icon as IconProp} />
        </div>

        <div className="transaction-amount-large">
          {formatCurrency(transaction.amount)}
        </div>

        <div className="transaction-name-large">
          {transaction.name}
        </div>

        <div className="transaction-status-badge">
          {transaction.status === 'pending' ? 'Pending' : 'Completed'}
        </div>

        <div className="transaction-info-grid">
          <div className="info-item">
            <FontAwesomeIcon icon={faCalendarAlt} className="info-icon" />
            <div className="info-content">
              <div className="info-label">Date</div>
              <div className="info-value">{formatDate(new Date(transaction.date))}</div>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faClock} className="info-icon" />
            <div className="info-content">
              <div className="info-label">Time</div>
              <div className="info-value">{formatTime(new Date(transaction.date))}</div>
            </div>
          </div>

          {transaction.authorizedUser && (
            <div className="info-item">
              <FontAwesomeIcon icon={faUser} className="info-icon" />
              <div className="info-content">
                <div className="info-label">Authorized By</div>
                <div className="info-value">{transaction.authorizedUser}</div>
              </div>
            </div>
          )}
        </div>

        <div className="transaction-description-section">
          <h3>Description</h3>
          <p>{transaction.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails; 