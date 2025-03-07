import React, { useState } from 'react';
import './Hires.css';
import { FaPlus } from 'react-icons/fa';

const Hires = () => {
  // Sample hires data - in a real app, you'd fetch this from an API
  const [hires, setHires] = useState([
    {
      id: 1,
      customer: {
        name: 'John Doe',
        phone: '+1 234-567-8900',
        avatar: 'https://i.pravatar.cc/100?img=1'
      },
      driver: {
        name: 'Michael Smith',
        vehicle: 'Toyota Camry',
        avatar: 'https://i.pravatar.cc/100?img=2'
      },
      pickupLocation: '123 Main St, City',
      dropOffLocation: '456 Park Ave, City',
      status: 'Completed',
      amount: '$25.00'
    }
    // Add more hire records here for a real application
  ]);

  // Function to handle creating a new hire
  const handleNewHire = () => {
    console.log('Creating new hire');
    // In a real app, this would open a form or modal
  };

  // Function to view details of a hire
  const viewDetails = (id) => {
    console.log(`Viewing details for hire ${id}`);
    // In a real app, this would navigate to a details page or open a modal
  };

  return (
    <div className="hires-container">
      <div className="hires-header">
        <h1>Recent Hires</h1>
        <button className="new-hire-btn" onClick={handleNewHire}>
          <FaPlus />
          <span>New Hire</span>
        </button>
      </div>

      <div className="hires-table-container">
        <table className="hires-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Driver</th>
              <th>Pickup Location</th>
              <th>Drop-off Location</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {hires.map((hire) => (
              <tr key={hire.id}>
                <td className="customer-cell">
                  <img 
                    src={hire.customer.avatar} 
                    alt={hire.customer.name} 
                    className="avatar" 
                  />
                  <div className="customer-info">
                    <div className="name">{hire.customer.name}</div>
                    <div className="phone">{hire.customer.phone}</div>
                  </div>
                </td>
                <td className="driver-cell">
                  <img 
                    src={hire.driver.avatar} 
                    alt={hire.driver.name} 
                    className="avatar" 
                  />
                  <div className="driver-info">
                    <div className="name">{hire.driver.name}</div>
                    <div className="vehicle">{hire.driver.vehicle}</div>
                  </div>
                </td>
                <td>{hire.pickupLocation}</td>
                <td>{hire.dropOffLocation}</td>
                <td>
                  <span className={`status-badge ${hire.status.toLowerCase()}`}>
                    {hire.status}
                  </span>
                </td>
                <td className="amount">{hire.amount}</td>
                <td>
                  <button 
                    className="view-details-btn" 
                    onClick={() => viewDetails(hire.id)}
                  >
                    View Details
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

export default Hires;