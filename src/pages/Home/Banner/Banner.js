import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel className="careousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://github.com/phassignments/A11/blob/main/Carousel4.jpg?raw=true"
            alt="First slide"
          />
          <Carousel.Caption className="text-start  fw-bold">
            <h1>Welcome To Explore The World</h1>
            <h2>Book Your Favorite Destination</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://github.com/phassignments/A11/blob/main/Carousel2.jpg?raw=true"
            alt="Second slide"
          />
          <Carousel.Caption className="text-start  fw-bold">
            <h1>Welcome To Explore The World</h1>
            <h2>Book Your Favorite Destination</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://github.com/phassignments/A11/blob/main/Carousel5.jpg?raw=true"
            alt="Third slide"
          />
          <Carousel.Caption className="text-start  fw-bold">
            <h1>Welcome To Explore The World</h1>
            <h2>Book Your Favorite Destination</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
