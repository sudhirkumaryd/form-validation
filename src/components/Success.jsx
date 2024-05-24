import React from 'react';
import { useLocation } from 'react-router-dom';
import './Form.css'; // Add your CSS styles here

const Success = () => {
  const location = useLocation();
  const { formValues } = location.state;

  return (
    <div className="success-container">
      <h1 className="success-title">Form Submitted Successfully!</h1>
      <h2 className="success-subtitle">Details:</h2>
      <div className="success-details">
        <p className="success-detail"><strong>First Name:</strong> {formValues.firstName}</p>
        <p className="success-detail"><strong>Last Name:</strong> {formValues.lastName}</p>
        <p className="success-detail"><strong>Username:</strong> {formValues.username}</p>
        <p className="success-detail"><strong>Email:</strong> {formValues.email}</p>
        <p className="success-detail"><strong>Phone:</strong> {formValues.phone}</p>
        <p className="success-detail"><strong>Country:</strong> {formValues.country}</p>
        <p className="success-detail"><strong>City:</strong> {formValues.city}</p>
        <p className="success-detail"><strong>PAN No:</strong> {formValues.panNo}</p>
        <p className="success-detail"><strong>Aadhar No:</strong> {formValues.aadharNo}</p>
      </div>
    </div>
  );
};

export default Success;
