import React from "react";
import { FaRegBell } from "react-icons/fa"; 
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="navbar-left">
        <div className="logo-container">
          <img
            src="/briefcase (1).png" 
            alt="Logo"
            className="logo"
          />
        </div>
        <span className="logo-text">Explorin Solutions</span>
      </div>

     
      <div className="navbar-right">
        
        <label className="checkbox-container">
          <input type="checkbox" className="checkbox" />
          <span className="checkbox-label">My Saved Jobs only</span>
        </label>

        
        <div className="notification-container">
          <FaRegBell className="notification-icon" />
          <span className="notification-badge"></span>
        </div>

        
        <img
          src="/WhatsApp Image 2024-07-17 at 11.35.56 PM.jpeg" 
          alt="Profile"
          className="profile-picture"
        />
      </div>
    </nav>
  );
};

export default Navbar;
