import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from '../Button'

import { Link } from 'react-router-dom'

import { useNavigate, useLocation } from 'react-router-dom'

const Item = (props) => {

    const { image, text, link } = props;

    const navigate = useNavigate();
    const location = useLocation();

    const callbackClick = () => {
        return navigate(location.pathname + '/' + link);
    }

    console.log(location);

    return (
        <Card>
            <Card.Img src={'http://localhost:3005/images/' + image}/>
            <Card.Text className='p-3'>
                {text}
            </Card.Text>
            <Button style='btn-card' callbackClick={callbackClick} text='Ver novedad'></Button>
        </Card>
    )
    
}


export default Item;