import React, { useState } from 'react';
import CardBalance from './components/shared/CardBalance/CardBalance';
import TransactionCard from './components/shared/TransactionCard/TransactionCard';
import TransactionList from './components/shared/TransactionList/TransactionList';
import PaymentStatus from './components/shared/PaymentStatus/PaymentStatus';
import DailyPoints from './components/shared/DailyPoints/DailyPoints';
import TransactionDetails from './components/screens/TransactionDetails/TransactionDetails';
import { Transaction } from './types/Transaction';
import mockData from './data/mockData.json';
import './App.css';

function App() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  
  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseDetails = () => {
    setSelectedTransaction(null);
  };

  const transactions = mockData.transactions as Transaction[];

  return (
    <div className="App">
      {selectedTransaction ? (
        <TransactionDetails 
          transaction={selectedTransaction} 
          onClose={handleCloseDetails}
        />
      ) : (
        <>
          <div className="balance-grid">
            <div className="balance-column">
              <CardBalance balance={mockData.balance} />
              <DailyPoints 
                current={mockData.dailyPoints.current}
                total={mockData.dailyPoints.total}
                nextReward={mockData.dailyPoints.nextReward}
              />
            </div>
            <div className="balance-column">
              <PaymentStatus 
                dueDate={new Date(mockData.paymentStatus.dueDate)}
                amount={mockData.paymentStatus.amount}
                isPaid={mockData.paymentStatus.isPaid}
              />
            </div>
          </div>

          <div className="transactions-section">
            <h2>Latest Transactions</h2>
            <div className="transactions-list">
              {transactions.map(transaction => (
                <div 
                  key={transaction.id} 
                  className="transaction-card-wrapper"
                  onClick={() => handleTransactionClick(transaction)}
                >
                  <TransactionCard transaction={transaction} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
