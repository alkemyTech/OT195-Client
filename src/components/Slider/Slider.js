import React from 'react';

//Librería
import Carousel from 'react-bootstrap/Carousel';

import foto3 from '../../images/Foto3.jpg';
import foto6 from '../../images/Foto6.jpg';
import foto10 from '../../images/Foto10.jpg';


const Slider = () => {
  
  //Ejemplo de imágenes en array de objetos

 const items= [ 

       {id: 1,
        imageUrl: foto3,
        text:'Actividad de natación'},
        {id: 2,
        imageUrl: foto6,
        text:'Familias colaboran en las actividades'},
        {id:3,
        imageUrl: foto10,
        text:'Actividades recreativas'},
        
 ]


    const slides= items.map((item, i) => {
      return (
        <Carousel.Item key={i}>
          <img
            className='d-block w-100'
            src={item.imageUrl}
            alt={item.text}
             style={{
              objectFit: 'cover',
              width:'450px',
              height:'450px',
              borderRadius:'5px'
              }}
          />
          <Carousel.Caption>
            <div style={{backgroundColor: 'lightgrey', opacity:'0.9'}}>
            
                <h3 className='text-dark'>{item.text}</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

  return <Carousel style={{display:'block', width:'700px', }}>{slides}</Carousel>;
};

export default Slider;

