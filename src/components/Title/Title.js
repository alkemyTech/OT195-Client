import React from 'react';

import { Row, Col } from 'react-bootstrap'
import Text from './Text'
import Image from './Image'


import './Title.css'

const Title = (props) => {
    
    const {title,text} = props;
    
    return (
        <Row className='title-box'>
            <Col className='px-1 py-5 d-flex'>
                <Text title={title} text={text} />
            </Col>
            <Col className='px-1 py-5 d-flex'>
                <Image/>
            </Col>
        </Row>
    )
}

export default Title;