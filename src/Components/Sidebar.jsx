import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

  function handleLogout() {
  
    navigate("/Login");
  }
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>🐦</span> Hummingbird
      </div>

      <p className="sidebar-label">Main menu</p>
      <nav className="sidebar-nav">
        <button className="sidebar-link active">Overview</button>
        <button className="sidebar-link">Patients</button>
        <button className="sidebar-link">Appointments</button>
        <button className="sidebar-link">Messages</button>
      </nav>

      <p className="sidebar-label">Clinical</p>
      <nav className="sidebar-nav">
        <button className="sidebar-link">Prescriptions</button>
        <button className="sidebar-link">Records</button>
      </nav>

      <div className="sidebar-bottom">
        <p className="sidebar-label">Other</p>
        <nav className="sidebar-nav">
          <button className="sidebar-link">Settings</button>
          <button className="sidebar-link">Help center</button>
          <button className="sidebar-link logout" onClick={handleLogout}>Logout</button>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;