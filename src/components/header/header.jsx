import React from "react";
import "./Navbar.css"; // You can create a CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="profile-icon">
        <img src="path-to-your-profile-icon.png" alt="Profile Icon" />
      </div>
    </div>
  );
};

export default Navbar;
