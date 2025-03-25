import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './PaymentStatus.css';

interface PaymentStatusProps {
  dueDate?: Date;
  amount?: number;
  isPaid?: boolean;
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({
  dueDate = new Date(),
  amount = 0,
  isPaid = true
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric'
    });
  };

  const getCurrentMonth = () => {
    return new Date().toLocaleDateString('en-US', { month: 'long' });
  };

  const getStatusMessage = () => {
    if (isPaid) {
      return {
        title: 'No payment due',
        message: `You've paid your ${getCurrentMonth()} balance`,
        icon: faCheckCircle,
        color: '#4CAF50'
      };
    }
    return {
      title: 'Payment due',
      message: `Your payment of ${formatCurrency(amount)} is due on ${formatDate(dueDate)}`,
      icon: faCalendarAlt,
      color: '#FF5722'
    };
  };

  const status = getStatusMessage();

  return (
    <div className="monthly-balance-card">
      <div className="monthly-balance">
        <div className="payment-header">
          <FontAwesomeIcon 
            icon={status.icon} 
            className="payment-icon"
            style={{ color: status.color }}
          />
          <div className="card-title">{status.title}</div>
        </div>
        <div className="payment-content">
          <div className="payment-message">{status.message}</div>
          {!isPaid && (
            <div className="payment-amount">
              {formatCurrency(amount)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus; 