import React, { useState, useEffect } from "react";
import "./LoanForm.css";
import SuccessPopup from "../successPopup/SuccessPopup";

const LoanForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // Validate phone number (basic US format)
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return (
      phoneRegex.test(phone.replace(/\D/g, "")) &&
      phone.replace(/\D/g, "").length >= 10
    );
  };

  // Validate age
  const isValidAge = (age) => {
    const numAge = parseInt(age);
    return numAge >= 20 && numAge <= 65;
  };

  // Check if all fields are filled and valid
  useEffect(() => {
    const { name, phoneNumber, age, salary } = formData;
    const allFieldsFilled =
      name.trim() && phoneNumber.trim() && age.trim() && salary.trim();
    const ageValid = isValidAge(age);
    const phoneValid = isValidPhoneNumber(phoneNumber);

    setIsFormValid(allFieldsFilled && ageValid && phoneValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate age
    if (!isValidAge(formData.age)) {
      newErrors.age = "Age must be between 20 and 65";
    }

    // Validate phone number
    if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, process submission
    console.log("Form submitted:", formData);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Reset form after successful submission
    setFormData({
      name: "",
      phoneNumber: "",
      age: "",
      isEmployee: false,
      salary: "",
    });
    setErrors({});
  };

  return (
    <div className="loan-form-container">
      <form className="loan-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Requesting a Loan</h2>
        <div className="form-divider"></div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={`form-input ${errors.phoneNumber ? "error" : ""}`}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && (
            <span className="error-message">{errors.phoneNumber}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className={`form-input ${errors.age ? "error" : ""}`}
            placeholder="Enter your age"
            min="18"
            max="100"
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            Are you an employee?
            <input
              type="checkbox"
              name="isEmployee"
              checked={formData.isEmployee}
              onChange={handleInputChange}
              className="checkbox-input"
            />
            <span className="checkmark"></span>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <select
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Select salary range</option>
            <option value="less than 500$">less than 500$</option>
            <option value="500$ - 2000$">500$ - 2000$</option>
            <option value="2000$ - 5000$">2000$ - 5000$</option>
            <option value="above 5000$">above 5000$</option>
          </select>
        </div>

        <button
          type="submit"
          className={`submit-button ${isFormValid ? "enabled" : "disabled"}`}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>

      <SuccessPopup
        isVisible={showPopup}
        onClose={handleClosePopup}
        formData={formData}
      />
    </div>
  );
};

export default LoanForm;
