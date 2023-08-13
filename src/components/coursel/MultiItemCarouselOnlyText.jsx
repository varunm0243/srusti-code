import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import InfoBox from "../content/InfoBoxContainer";

const MultiItemCarouselContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  width: 95%;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiItemCarouselText = () => {
  const infoData = [
    {
        date: "10 August",
      title: "The #1 Thing People Get Wrong About Tech Learning",
      description: "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled de Finibus Bonorum et Malorum which means The Extremes of Good and Evil. The most common form of Lorem ipsum is the following",
    },
    {
        date: "28 December",
        title: "AI and Machine Learning Program",
        description: "Since entering the 21st century, my country’s education is facing the transition from traditional exam-oriented education to quality education and personality education, and the problem of mental health has gradually attracted the attention of all sectors of society.",
    },
    {
        date: "20 March",
        title: "OpenAI could go bankrupt by 2024 as ChatGPT costs over Rs 5 crore ",
        description: "As per a report, OpenAI could go bankrupt by the end of 2024 as ChatGPT is costing the company over Rs 5 crore to operate every day. Microsoft's USD 10 billion investment might have been the reason that the company is still afloat.",
    },
    {
        date: "10 August",
        title: "New Study Reveals How Hackers Can Use Keyboard Sounds to Steal Your Passwords",
        description: "New research has unveiled a surprising threat to password security, as hackers can now use specialized technology to decipher passwords by listening to the quiet sounds keyboards make when typing",
    },
    {
        date: "28 December",
        title: "The #1 Thing People Get Wrong About Tech Learning",
        description: "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled de Finibus Bonorum et Malorum which means The Extremes of Good and Evil. The most common form of Lorem ipsum is the following",
    },
    {
        date: "20 March",
        title: "The #1 Thing People Get Wrong About Tech Learning",
        description: "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled de Finibus Bonorum et Malorum which means The Extremes of Good and Evil. The most common form of Lorem ipsum is the following",
    },
    {
        date: "10 August",
      title: "The #1 Thing People Get Wrong About Tech Learning",
      description: "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled de Finibus Bonorum et Malorum which means The Extremes of Good and Evil. The most common form of Lorem ipsum is the following",
    },
    {
        date: "28 December",
        title: "The #1 Thing People Get Wrong About Tech Learning",
        description: "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled de Finibus Bonorum et Malorum which means The Extremes of Good and Evil. The most common form of Lorem ipsum is the following",
    },
    {
        date: "20 March",
        title: "The #1 Thing People Get Wrong About Tech Learning",
        description: "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled de Finibus Bonorum et Malorum which means The Extremes of Good and Evil. The most common form of Lorem ipsum is the following",
    },
    // Add more data as needed
  ];

  return (
    <MultiItemCarouselContainer>
    <h5 style={{ marginBottom: '-35px' }}>What's New</h5>
    <a href="#" style={{ marginLeft: '130px'}}>See more posts</a>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {infoData.map((info, index) => (
          <InfoBox
            key={index}
            title={info.title}
            date={info.date}
            description={info.description}
          />
        ))}
      </Carousel>
    </MultiItemCarouselContainer>
  );
};

export default MultiItemCarouselText;
