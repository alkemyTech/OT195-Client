import React from "react";
import "./newsSlide.css";
import { Navigate } from "react-router-dom";
import imagePlaceholder from "../../images/backoffice/user.png";

//Librería
import Carousel from "react-bootstrap/Carousel";


export default function TestimoniesSlider({testimoniesData}){


  let slides;
  if (Array.isArray(testimoniesData) && testimoniesData.length >= 1) {
    slides = testimoniesData.map((el) => {
      return (
        <Carousel.Item key={el.id} interval={15000} className="carouselItemNew">
          <img
            src={el.image ? el.image : imagePlaceholder } // si no hay nada en imagen va a mostrar una imagen por defecto
            alt={el.name}
            style={{width:"50%" , height:"50%", marginLeft:"25%" }} // cambio el tamaño de la imagen y lo centro
          />
          <Carousel.Caption key={el.id}>
            <div className='content-container'>
              <h2 className="newTitle mb-2">{el.name}</h2>
              <div dangerouslySetInnerHTML={{ __html: el.content }}/> {/* como content tien texto en html lo toma y lo muestra como se debe en el front */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  } else {
    // slides = [];
    return(
        <div>
            <h1>No hay testimomios</h1>
        </div>
    )
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
// export default NewsSlider;