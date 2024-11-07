import React from 'react';
import './Navbar.css'; // Add styles for Navbar if necessary

function Navbar() {
  return (
    <nav className="navbar">
      <a className="nav-logo" href="/">Learnzilla</a>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
