import React from 'react';

import "./Footer.css";

import { Container, Row } from "react-bootstrap";
import Brand from './Brand'

const Footer = () => {

    const data = { // this object must be filled by fetching information from the server
        name: '',
        src: ''
    }

    return (
        <Container fluid className='footer-box'>
            <Row>
                <Brand name={data.name} src={data.src} />
            </Row>
            <Row>

            </Row>
        </Container>
    )
}


export default Footer;