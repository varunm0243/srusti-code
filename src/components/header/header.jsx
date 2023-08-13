// 
import React from "react";
import "./Navbar.css"; // Import the CSS file for styling
import { DiAptana } from "react-icons/di";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsQuestionLg } from "react-icons/bs";
import profile from ".././images/peakpx.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <BsFillGrid3X3GapFill />
      <h6>NOKIA</h6>
      <h6>POWER AUTOMATE</h6>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
        <p>Nokia Environment(default)</p>
        <p>&emsp;</p>
        <DiAptana />
        <BsQuestionLg />
        <p>Damon Salvatore</p>
      </div>
      <div className="profile-icon">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Navbar;
