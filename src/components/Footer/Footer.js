import React from 'react';

import "./Footer.css";

import { Container, Row } from "react-bootstrap";
import Brand from './Brand'
import Menu from './Menu'

const Footer = () => {

    const data = { // this object must be filled by fetching information from the server
        name: '',
        src: '',
        links: [
            {
              name: "Inicio",
              route: "/home",
            },
            {
              name: "Nosotros",
              route: "/staff",
            },
            {
              name: "Novedades",
              route: "/news",
            },
            {
              name: "Testimonios",
              route: "/testimonials",
            },
            {
              name: "Contacto",
              route: "/contact",
            },
            {
              name: "Contribuye",
              route: "/contribute",
            },
          ],
    }

    return (
        <Container fluid className='footer-box'>
            <Row>
                <Brand name={data.name} src={data.src} />
            </Row>
            <Row>
                <Menu links={data.links}/>
            </Row>
            <Row>
                <hr className='separator my-4'/>
            </Row>
        </Container>
    )
}


export default Footer;