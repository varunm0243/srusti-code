import React from "react";
import styled from "styled-components";

const InfoBoxContainer = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 0;
`;

const Date = styled.h3`
font-size: 16px;
color: grey;
justify-content: center;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
`;

const InfoBox = ({ title, description, date }) => {
  return (
    <InfoBoxContainer>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </InfoBoxContainer>
    // <h3>Discover Robotic Process Automation (RPA) with zero infrastructure</h3>//
  );
};

export default InfoBox;
