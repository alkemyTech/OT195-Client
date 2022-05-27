import React from 'react';

import { Container } from 'react-bootstrap'

import Button from '../Button/'

const Title = (props) => {

    const { title, text } = props;

    return (
        <Container className='text-title justify-content-center flex-column d-flex'>
            <h1 className='mb-4'>{title}</h1>
            <p className='mb-4'>{text}</p>
            <div>
                <Button style='primary btn-title' text='Contactanos'/>
            </div>
        </Container>
    )
}



export default Title;