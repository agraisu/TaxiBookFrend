import React, { useState } from 'react';
import './Vehicles.css';
import { FaPlus } from 'react-icons/fa';

const Vehicles = () => {
  // Sample vehicles data - in a real app, you'd fetch this from an API
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      model: 'Toyota Camry',
      licensePlate: 'ABC 123',
      year: '2021',
      type: 'Sedan',
      category: 'Premium',
      status: 'Active'
    },
    {
      id: 2,
      model: 'Honda Civic',
      licensePlate: 'XYZ 789',
      year: '2022',
      type: 'Sedan',
      category: 'Standard',
      status: 'Active'
    }
  ]);

  // Handle adding a new vehicle
  const handleAddVehicle = () => {
    console.log('Adding new vehicle');
    // In a real app, this would open a form or modal
  };

  // Handle editing a vehicle
  const handleEdit = (id) => {
    console.log(`Editing vehicle ${id}`);
    // In a real app, this would open a form or modal with the vehicle data
  };

  return (
    <div className="vehicles-container">
      <div className="vehicles-header">
        <h1>Vehicles</h1>
        <button className="add-vehicle-btn" onClick={handleAddVehicle}>
          <FaPlus />
          <span>Add Vehicle</span>
        </button>
      </div>

      <div className="vehicles-table-container">
        <table className="vehicles-table">
          <thead>
            <tr>
              <th>Vehicle Model</th>
              <th>License Plate</th>
              <th>Year</th>
              <th>Type</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.model}</td>
                <td>{vehicle.licensePlate}</td>
                <td>{vehicle.year}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.category}</td>
                <td>
                  <span className={`status-badge ${vehicle.status.toLowerCase()}`}>
                    {vehicle.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="edit-btn" 
                    onClick={() => handleEdit(vehicle.id)}
                  >
                    Edit
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

export default Vehicles;