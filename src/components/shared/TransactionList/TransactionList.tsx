import React from 'react';
import TransactionCard from '../TransactionCard/TransactionCard';
import { Transaction } from '../../../types/Transaction';
import './TransactionList.css';

interface TransactionListProps {
  transactions: Transaction[];
  onTransactionClick: (transaction: Transaction) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onTransactionClick }) => {
  return (
    <div className="transactions-section">
      <h2>Latest Transactions</h2>
      <div className="transactions-list">
        {transactions.map(transaction => (
          <div 
            key={transaction.id} 
            className="transaction-card-wrapper"
            onClick={() => onTransactionClick(transaction)}
          >
            <TransactionCard transaction={transaction} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList; 