//
import React from "react";
import "./Navbar.css"; // Import the CSS file for styling
import { DiAptana } from "react-icons/di";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import profile from ".././images/peakpx.jpg";
import styled from "styled-components";

const Description = styled.p`
  font-size: 14px;
  margin: 5px;
`;

const Profile = styled.p`
  font-size: 14px;
  margin: 5px;
`;

const StylesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  return (
    <div className="navbar">
      <BsFillGrid3X3GapFill />
      <h6>NOKIA</h6>
      <h6>POWER AUTOMATE</h6>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <StylesDiv>
        <Description>Nokia Environment(default)</Description>
        {/* <p>&emsp;</p> */}
        <DiAptana />
      </StylesDiv>
      {/* <BsQuestionLg /> */}
      <StylesDiv className="profile-icon">
        <Profile>Damon Salvatore</Profile>

        <img src={profile} alt="profile" />
      </StylesDiv>
    </div>
  );
};

export default Navbar;
