import React from "react";
import "./SuccessPopup.css";

const SuccessPopup = ({ isVisible, onClose, formData }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-content">
          <div className="success-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="#4CAF50" />
              <path
                d="M9 12l2 2 4-4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="success-title">Submission Successful!</h2>

          <p className="success-message">
            Your loan request has been submitted successfully. We will review
            your application and get back to you soon.
          </p>

          <div className="submitted-details">
            <h3>Submitted Details:</h3>
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{formData.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{formData.phoneNumber}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Age:</span>
              <span className="detail-value">{formData.age}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Employee Status:</span>
              <span className="detail-value">
                {formData.isEmployee ? "Yes" : "No"}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Salary Range:</span>
              <span className="detail-value">{formData.salary}</span>
            </div>
          </div>

          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
