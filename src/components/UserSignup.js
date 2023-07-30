import React, { useState } from "react";
import "./UserSignup.css"; // Import CSS file for styling

const UserSignup = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phoneNumber: "",
    profession: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSignup callback to notify the App component of successful signup
    onSignup(formData);
  };

  return (
    <div className="user-signup-container">
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Profession:</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Profession</option>
            <option value="engineer">Engineer</option>
            <option value="doctor">Doctor</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default UserSignup;
