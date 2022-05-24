import React from 'react';

import { Container } from 'react-bootstrap'

import Button from '../Button/'

const Title = (props) => {

    const { welcomeTitle } = props;

    return (
        <Container className='text-title justify-content-center flex-column d-flex'>
            <h1 className='mb-4'>{welcomeTitle}</h1>
            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim, velit hac turpis interdum arcu. Suspendisse at vel ultrices amet orci enim lectus porttitor ut.</p>
            <div>
                <Button style='primary btn-title' text='Contactanos'/>
            </div>
        </Container>
    )
}



export default Title;