import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from '../Button'


import { useNavigate } from 'react-router-dom'

const Item = (props) => {

    const { image, text, link } = props;

    const navigate = useNavigate();


    const callbackClick = () => {
        return navigate(link);
    }

    return (
        <Card>
            <Card.Img src={image}/>
            <Card.Text className='p-3'>
                {text}
            </Card.Text>
            <Button style='btn-card' callbackClick={callbackClick} text='Ver novedad'></Button>
        </Card>
    )
    
}


export default Item;