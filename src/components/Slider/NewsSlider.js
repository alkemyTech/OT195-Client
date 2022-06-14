import React from "react";
import "./newsSlide.css";
import { Navigate } from "react-router-dom";

//Librería
import Carousel from "react-bootstrap/Carousel";

const NewsSlider = ({ newsData }) => {

  let slides;
  if (Array.isArray(newsData) && newsData.length >= 1) {
    slides = newsData.map((item, i) => {
      return (
        <Carousel.Item key={i} interval={15000} className="carouselItemNew">
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.name}
            style={{
              objectFit: "cover",
              height: "500px",
              borderRadius: "5px",
            }}
          />
          <Carousel.Caption className="contentContainer">
            <div>
              <h3 className="newTitle">{item.name}</h3>
              <p className="newContent">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  } else {
    slides = [];
  }

  return (
    <>
    {slides.length > 0 ? 
    <Carousel
      style={{ display: "block", width: "100vw" }}
      className="my-5 carouselNew"
    >
      {slides}
    </Carousel>
    :<Navigate to='/home'/>
    }
    </>
  );
};
export default NewsSlider;
