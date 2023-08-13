import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import abc from "../images/power automate.png";
import nokia from "../images/Nokia.jpg";
import power from "../images/P logo.jpg";
import ribbon from "../images/blue badge.jpg";
import business from "../images/data cloud.jpg";
import performance from "../images/per bar.jpg";
import cloud from "../images/windows.jpg";

const MultiItemCarouselContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  width: 95%;
`;

const CarouselItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-color: black;
`;

const TextContainer = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: #grey;
  color: black;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
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

const MultiItemCarousel = () => {
  const carouselData = [
    {
      image: abc, // Replace with your image path
      title: "Project 1",
      description: "Description of Project 1.",
    },
    {
      image: nokia, // Replace with your image path
      title: "Project 2",
      description: "Description of Project 2.",
    },
    {
      image: power, // Replace with your image path
      title: "Project 3",
      description: "Description of Project 3.",
    },
    {
      image: ribbon, // Replace with your image path
      title: "Project 4",
      description: "Description of Project 4.",
    },
    {
      image: business, // Replace with your image path
      title: "Project 5",
      description: "Description of Project 5.",
    },
    {
      image: performance, // Replace with your image path
      title: "Project 6",
      description: "Description of Project 6.",
    },
    {
      image: cloud, // Replace with your image path
      title: "Project 7",
      description: "Description of Project 7.",
    },
    {
      image: power, // Replace with your image path
      title: "Project 2",
      description: "Description of Project 2.",
    },
    {
      image: business, // Replace with your image path
      title: "Project 1",
      description: "Description of Project 1.",
    },
    {
      image: performance, // Replace with your image path
      title: "Project 2",
      description: "Description of Project 2.",
    },
    {
      image: cloud, // Replace with your image path
      title: "Project 1",
      description: "Description of Project 1.",
    },
    {
      image: ribbon, // Replace with your image path
      title: "Project 2",
      description: "Description of Project 2.",
    },
    // Add more data as needed
  ];
  

  return (
    <MultiItemCarouselContainer>
      <h5>Learning for every level</h5>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {carouselData.map((item, index) => (
          <CarouselItem key={index}>
            <img style={{ width: '50%', height: '100px' }} src={item.image} alt={`Carousel Image ${index}`} />
            <TextContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>Beginner</Button>
            </TextContainer>
          </CarouselItem>
        ))}
      </Carousel>
    </MultiItemCarouselContainer>
  );
};

export default MultiItemCarousel;
