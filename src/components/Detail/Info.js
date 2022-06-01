import React from 'react'
import { Row } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom'

import Button from '../Button'

const Info = (props) => {

    const { name, content } = props;

    const navigate = useNavigate();

    const callbackClick = () => {
        navigate('/news');
    }

    return (
        <Row className='info-container mt-3 mx-auto'>
            <h2 className='text-center'>{name}</h2>
            <p>{content}</p>
            <Button style='btn-news mr-auto' callbackClick={callbackClick} text='Ir al inicio'></Button>
        </Row>
    )
}

export default Info;