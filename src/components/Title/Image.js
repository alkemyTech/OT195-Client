import React, {useContext} from 'react';

import { Container } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch';
import { AdminContext } from '../../contexts/adminContext';


const Image = (src) => {
    const {welcomeData} = useContext(AdminContext)
    return (
        <Container className='img-title d-flex justify-content-center'>
            <img src={welcomeData.image} alt="Hands image" className='img-title'/>
        </Container>
    )
}

export default Image;