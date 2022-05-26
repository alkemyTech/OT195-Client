import React, {useContext} from 'react';

import { Container } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch';
import { HomeContext } from '../../contexts/homeContext';


const Image = (src) => {
    const {welcomeData} = useContext(HomeContext)
    return (
        <Container className='img-title d-flex justify-content-center'>
            <img src={welcomeData.image} alt="Hands image" className='img-title'/>
        </Container>
    )
}

export default Image;