import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 import InfoBox from '../content/InfoBoxContainer';

const CustomCarousel = styled(Carousel)`
  .carousel .slider-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel .slider {
    display: flex;
    flex-wrap: nowrap;
  }

  .carousel .slide {
    flex: 0 0 auto;
    width: calc(100% / 6); /* 6 cards visible at a time */
    padding: 10px;
  }
`;

const InfoCarouselContainer = styled.div`
  margin-left: 50px;
  width: 90%;
`;

 const InfoCarousel = () => {
  const infoData = [
    {
       title: 'Project 1',
    description: 'Discover Robotic Process Automation (RPA) with zero infrastructure.',
      
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
  
    },
    // Add more data as needed
  ];

  return (
    <InfoCarouselContainer>
      <CustomCarousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        emulateTouch={true}
        dynamicHeight={false}
        swipeable={true}
        showArrows={false}
      >
        {infoData.map((info, index) => (
          <div key={index}>
            <InfoBox
              title={info.title}
              description={info.description}
            />
          </div>
        ))}
        
       
      </CustomCarousel>
    </InfoCarouselContainer>
  );
};

export default InfoCarousel;
