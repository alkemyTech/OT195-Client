import React from 'react';

import { Container } from 'react-bootstrap'

import imgManos from '../../images/img_manos.png'


const Image = () => {
    return (
        <Container className='img-title d-flex justify-content-center'>
            <img src={imgManos} alt="Hands image" className='img-title'/>
        </Container>
    )
}

export default Image;