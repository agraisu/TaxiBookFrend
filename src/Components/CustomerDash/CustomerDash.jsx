import React from 'react';
import './CustomerDash.css';
import { FaUser, FaCar, FaUserTie, FaDollarSign } from 'react-icons/fa';

const CustomerDash = () => {
  // Sample data - replace with your actual data fetching logic
  const dashboardData = {
    totalCustomers: 2453,
    activeDrivers: 185,
    ongoingHires: 42,
    dailyRevenue: 3642,
    pendingApprovals: [
      {
        id: 1,
        name: 'Michael Brown',
        type: 'Driver Application',
        avatar: '../../assets/avatar1.png'
      },
      {
        id: 2,
        name: 'Sarah Wilson',
        type: 'Customer Verification',
        avatar: '../../assets/avatar2.jpg'
      }
    ]
  };

  return (
    <div className="dashboard-container">
      {/* Metrics Cards */}
      <div className="metrics-container">
        <div className="metric-card customer-card">
          <div className="metric-icon">
            <FaUser />
          </div>
          <div className="metric-content">
            <p className="metric-title">Total Customers</p>
            <h2 className="metric-value">{dashboardData.totalCustomers.toLocaleString()}</h2>
          </div>
        </div>

        <div className="metric-card driver-card">
          <div className="metric-icon">
            <FaCar />
          </div>
          <div className="metric-content">
            <p className="metric-title">Active Drivers</p>
            <h2 className="metric-value">{dashboardData.activeDrivers}</h2>
          </div>
        </div>

        <div className="metric-card hire-card">
          <div className="metric-icon">
            <FaUserTie />
          </div>
          <div className="metric-content">
            <p className="metric-title">Ongoing Hires</p>
            <h2 className="metric-value">{dashboardData.ongoingHires}</h2>
          </div>
        </div>

        <div className="metric-card revenue-card">
          <div className="metric-icon">
            <FaDollarSign />
          </div>
          <div className="metric-content">
            <p className="metric-title">Daily Revenue</p>
            <h2 className="metric-value">${dashboardData.dailyRevenue.toLocaleString()}</h2>
          </div>
        </div>
      </div>

      {/* Pending Approvals Section */}
      <div className="approvals-section">
        <div className="section-header">
          <h3>Pending Approvals</h3>
          <button className="view-all-btn">View all</button>
        </div>
        
        <div className="approvals-list">
          {dashboardData.pendingApprovals.map(approval => (
            <div key={approval.id} className="approval-item">
              <div className="approval-info">
                <div className="avatar">
                  <img src={approval.avatar} alt={approval.name} />
                </div>
                <div className="approval-details">
                  <h4>{approval.name}</h4>
                  <p>{approval.type}</p>
                </div>
              </div>
              <div className="action-buttons">
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDash;