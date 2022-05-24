import React, {useContext} from 'react';

import { Container } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch';
import { HomeContext } from '../../contexts/homeContext';


const Image = () => {
    const { data: publicInfo, loading } = useFetch('http://127.0.0.1:3001/organizations/1/public');
    const {welcomeImage} = useContext(HomeContext)
    return (
        <Container className='img-title d-flex justify-content-center'>
            <img src={welcomeImage} alt="Hands image" className='img-title'/>
        </Container>
    )
}

export default Image;