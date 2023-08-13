import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import abc from '../images/img2.jpg'
import xyz from '../images/power automate.png';
import './CarouselComponent.css'; // You can create a CSS file for styling

const CarouselComponent = () => {
  return (
    <div style={{ marginLeft: '50px' , marginRight:'50px'}} className="carousel-container">
      <Carousel showThumbs={false}>
        <div>
          <img src={xyz} alt="Carousel Image 1" />
        </div>
        <div>
          <img src={xyz} alt="Carousel Image 2" />
        </div>
        {/* Add more carousel items */}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
