import React, {useContext} from 'react';
import { AdminContext } from '../../contexts/adminContext';
//Librería
import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
  const {activitiesData} = useContext(AdminContext);

    const slides= activitiesData.map((item, i) => {
      return (
        <Carousel.Item key={i}>
          <img
            className='d-block w-100'
            src={item.imageUrl}
            alt={item.text}
            style={{
            objectFit: 'cover',
            height:'600px',
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

  return <Carousel style={{display:'block', width:'100vw'}} className='my-5'>{slides}</Carousel>;
};

export default Slider;

