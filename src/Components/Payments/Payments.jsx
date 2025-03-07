import React, { useState } from 'react';
import './Payments.css';
import { FaPlus } from 'react-icons/fa';

const Payments = () => {
  // Sample payments data - in a real app, you'd fetch this from an API
  const [payments, setPayments] = useState([
    {
      id: '#PAY001',
      customer: 'John Smith',
      amount: '$150.00',
      date: '2024-02-20',
      paymentMethod: 'Credit Card',
      status: 'Completed'
    },
    {
      id: '#PAY002',
      customer: 'Sarah Johnson',
      amount: '$85.50',
      date: '2024-02-19',
      paymentMethod: 'PayPal',
      status: 'Pending'
    }
  ]);

  // Handle adding a new payment
  const handleAddPayment = () => {
    console.log('Adding new payment');
    // In a real app, this would open a form or modal
  };

  // Handle viewing payment details
  const handleView = (id) => {
    console.log(`Viewing payment details for ${id}`);
    // In a real app, this would navigate to details page or open a modal
  };

  return (
    <div className="payments-container">
      <div className="payments-header">
        <h1>Payments</h1>
        <button className="add-payment-btn" onClick={handleAddPayment}>
          <FaPlus />
          <span>Add Payment</span>
        </button>
      </div>

      <div className="payments-table-container">
        <table className="payments-table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="payment-id">{payment.id}</td>
                <td>{payment.customer}</td>
                <td className="amount">{payment.amount}</td>
                <td>{payment.date}</td>
                <td>{payment.paymentMethod}</td>
                <td>
                  <span className={`status-badge ${payment.status.toLowerCase()}`}>
                    {payment.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="view-btn" 
                    onClick={() => handleView(payment.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;