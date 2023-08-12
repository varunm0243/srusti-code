import React from "react";
import styled from "styled-components";

const InfoBoxContainer = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 0;
`;

const Date = styled.h3`
font-size: 16px;
color: grey;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const InfoBox = ({ title, description, date }) => {
  return (
    <InfoBoxContainer>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </InfoBoxContainer>
  );
};

export default InfoBox;
