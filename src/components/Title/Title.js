import React from 'react';

import { Row, Col } from 'react-bootstrap'
import Text from './Text'
import Image from './Image'

import useFetch from '../../hooks/useFetch'

import './Title.css'

const Title = (props) => {
    
    const {welcomeText, loading} = props;
    
    return (
        <Row className='title-box'>
            <Col className='px-1 py-5 d-flex'>
                <Text welcomeText={welcomeText} />
            </Col>
            <Col className='px-1 py-5 d-flex'>
                <Image />
            </Col>
        </Row>
    )
}

export default Title;