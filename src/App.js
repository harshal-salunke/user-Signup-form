import React, { useState } from "react";
import UserSignup from "./components/UserSignup";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
import CompanyInfo from "./components/CompanyInfo";
import "./App.css"; // Import CSS file for styling

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  const handleSignup = (formData) => {
    // Store the data in local storage
    localStorage.setItem("userData", JSON.stringify(formData));
    setUserData(formData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform any cleanup if needed
    localStorage.removeItem("userData");
    setUserData(null);
    setIsLoggedIn(false);
    setShowCompanyInfo(false); // Reset CompanyInfo visibility upon logout
  };

  const handleCompanyInfoClick = () => {
    setShowCompanyInfo(true);
  };

  return (
    <div className="app-container">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <a href="#" onClick={handleCompanyInfoClick}>
                  Company Info
                </a>
              </li>
              <li onClick={handleLogout}>
                <a href="/">Logout</a>
              </li>
            </>
          ) : null}
        </ul>
      </nav>
      <div className="content">
        {isLoggedIn ? (
          showCompanyInfo ? (
            <CompanyInfo />
          ) : (
            <MovieList />
          )
        ) : (
          <UserSignup onSignup={handleSignup} />
        )}
        {isLoggedIn && <Login userData={userData} onLogout={handleLogout} />}
      </div>
    </div>
  );
}

export default App;
