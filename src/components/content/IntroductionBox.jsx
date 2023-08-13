import React from 'react';
import styled from 'styled-components';
import bg from '../images/image1.jpg';


const IntroductionContainer = styled.div`
background-image: url(${bg});
  // background-color: red;
  background-image: {background}
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-left: 50px;
  width: 90%;
  margin-top: 10px;
`;



const TextContainer = styled.div`
  margin-left: 20px;
  align-text: center;
`;

const Name = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const ContactNumber = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

const IntroductionBox = () => {
  return (
    <IntroductionContainer>
      {/* <ProfileImage src={profileImage} alt="Profile" /> */}
      <TextContainer>
        {/* <Name>Hello, Srusti S</Name> */}
        <p>Hello, Srusti
          <br/>
    Create a flow to automate a repetitive business task end to end.</p>
    <button type="button">Create +</button>

        {/* <ContactNumber>Contact: 9886083584</ContactNumber> */}
      </TextContainer>
    </IntroductionContainer>
   
  );
};

export default IntroductionBox;
