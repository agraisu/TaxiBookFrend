import React, { useState } from 'react';
import './CustomerView.css';
import { FaEllipsisV, FaSearch } from 'react-icons/fa';

const CustomerView = () => {
  // Sample customer data - in a real app, you'd fetch this from an API
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Sarah Wilson',
      email: 'sarah.w@example.com',
      phone: '+1 234-567-8901',
      totalRides: 24,
      status: 'Active',
      avatar: 'SW',
      avatarColor: '#4ecdc4'
    },
    {
      id: 2,
      name: 'John Davis',
      email: 'john.d@example.com',
      phone: '+1 234-567-8902',
      totalRides: 18,
      status: 'Active',
      avatar: 'JD',
      avatarColor: '#333333'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter customers based on search term
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  return (
    <div className="customer-view-container">
      <div className="customer-overview-header">
        <h1>Customer Overview</h1>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search customers..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="customer-table-container">
        <table className="customer-table">
          <thead>
            <tr>
              <th className="name-column">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Total Rides</th>
              <th>Status</th>
              <th className="actions-column">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr key={customer.id}>
                <td className="name-cell">
                  <div className="customer-avatar" style={{ backgroundColor: customer.avatarColor }}>
                    {customer.avatar}
                  </div>
                  <span>{customer.name}</span>
                </td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.totalRides}</td>
                <td>
                  <span className={`status-badge ${customer.status.toLowerCase()}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <button className="action-button">
                    <FaEllipsisV />
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

export default CustomerView;