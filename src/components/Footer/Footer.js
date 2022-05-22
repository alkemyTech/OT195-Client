import React from 'react';

import "./Footer.css";

import { Container, Row } from "react-bootstrap";
import Brand from './Brand'

const Footer = () => {
    return (
        <Container fluid className='footer-box'>
            <Row>
                <Brand />
            </Row>
        </Container>
    )
}


export default Footer;