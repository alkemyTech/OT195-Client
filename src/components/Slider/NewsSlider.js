import React from "react";
import "./newsSlide.css";
import { Navigate, useNavigate } from "react-router-dom";
import ButtonComponent from '../../components/Button'

//Librería
import Carousel from "react-bootstrap/Carousel";

const NewsSlider = ({ newsData }) => {

  const navigate = useNavigate();

  let slides;
  if (Array.isArray(newsData) && newsData.length >= 1) {
    slides = newsData.map((item, i) => {
      return (
        <Carousel.Item key={i} interval={15000} className="carouselItemNew">
          <img
            src={'http://localhost:3005/images/' + item.image}
            alt={item.name}
          />
          <Carousel.Caption>
            <div className='content-container'>
              <h2 className="newTitle mb-2">{item.name}</h2>
              <p className="newContent mb-5">{item.content}</p>
              <ButtonComponent className='btn-news' callbackClick={() => navigate('/news/' + item.id)}>Ver más</ButtonComponent>
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
      style={{ display: "block", width: "100%" }}
      className="carouselNew"
    >
      {slides}
    </Carousel>
    :<Navigate to='/home'/>
    }
    </>
  );
};
export default NewsSlider;
