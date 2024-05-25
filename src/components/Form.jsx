import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css"; // Add your CSS styles here

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};

    if (!formValues.firstName) tempErrors.firstName = "First Name is required";
    if (!formValues.lastName) tempErrors.lastName = "Last Name is required";
    if (!formValues.username) tempErrors.username = "Username is required";
    if (!formValues.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      tempErrors.email = "Email is not valid";
    if (!formValues.password) tempErrors.password = "Password is required";
    else if (formValues.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";
    if (!formValues.phone) tempErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formValues.phone))
      tempErrors.phone = "Phone number must be 10 digits";
    if (!formValues.country) tempErrors.country = "Country is required";
    if (!formValues.city) tempErrors.city = "City is required";
    if (!formValues.panNo) tempErrors.panNo = "PAN number is required";
    if (!formValues.aadharNo) tempErrors.aadharNo = "Aadhar number is required";
    else if (!/^\d{12}$/.test(formValues.aadharNo))
      tempErrors.aadharNo = "Aadhar number must be 12 digits";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/success", { state: { formValues } });
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-heading">Fill Your Details</h1>
      <div className="form-combine">
        <div className="form-section">
          <div className="form-group half-width">
            <label className="form-label">First Name:</label>
            <input
              className="form-input"
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error-text">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group half-width">
            <label className="form-label">Last Name:</label>
            <input
              className="form-input"
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error-text">{errors.lastName}</span>
            )}
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label className="form-label">Username:</label>
            <input
              className="form-input"
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
            {errors.username && (
              <span className="error-text">{errors.username}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Password:</label>
            <input
              className="form-input"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <button
              className="toggle-password"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show/Hide
            </button>
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number:</label>
            <input
              className="form-input"
              type="text"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label className="form-label">Country:</label>
            <select
              className="form-select"
              name="country"
              value={formValues.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            {errors.country && (
              <span className="error-text">{errors.country}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">PAN Number:</label>
            <input
              className="form-input"
              type="text"
              name="panNo"
              value={formValues.panNo}
              onChange={handleChange}
            />
            {errors.panNo && <span className="error-text">{errors.panNo}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">City:</label>
            <select
              className="form-select"
              name="city"
              value={formValues.city}
              onChange={handleChange}
            >
              <option value="">Select City</option>
              {formValues.country === "India" && (
                <>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                </>
              )}
              {formValues.country === "USA" && (
                <>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                </>
              )}
              {formValues.country === "UK" && (
                <>
                  <option value="London">London</option>
                  <option value="Manchester">Manchester</option>
                </>
              )}
            </select>
            {errors.city && <span className="error-text">{errors.city}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Aadhar Number:</label>
            <input
              className="form-input"
              type="text"
              name="aadharNo"
              value={formValues.aadharNo}
              onChange={handleChange}
            />
            {errors.aadharNo && (
              <span className="error-text">{errors.aadharNo}</span>
            )}
          </div>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
