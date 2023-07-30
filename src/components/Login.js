import React, { useState } from "react";
import "./Login.css";

const Login = ({ userData, onLogout }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData &&
      userData.name === formData.name &&
      userData.password === formData.password
    ) {
      // Move to the next screen or perform any action on successful login
      alert("Login successful! Moving to the next screen...");
      setLoginError(false); // Reset login error on successful login
    } else {
      // Show "Invalid Credentials" message
      setLoginError(true);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {loginError && <p className="error-message">Invalid Credentials</p>}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
