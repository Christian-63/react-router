import React from "react";
import "./Navbar.css";
import profilePic from "../assets/doctor.jpg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-greeting">
        <h2>Good morning, Dr. Eriksson</h2>
        <p>Monday, April 7, 2026 · Stockholm health center</p>
      </div>

      <div className="navbar-actions">
        <button className="icon-btn">☀️</button>
        <button className="icon-btn">🌙</button>
        <button className="icon-btn">🔔</button>
    <img src={profilePic} alt="Doctor profile" className="navbar-avatar" />
      </div>
    </header>
  );
}

export default Navbar;