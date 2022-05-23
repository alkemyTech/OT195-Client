import React from 'react';

import "./Footer.css";

import { Container, Row } from "react-bootstrap";
import Brand from './Brand'
import LinksMenu from './LinksMenu'
import MediaMenu from './MediaMenu'

const Footer = () => {

    const data = { // this object must be filled by fetching information from the server
        name: '',
        src: '/images/logo.png',
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
          media: [
              {
                network: "twitter",
                url: "https://campus.alkemy.org/"
              },
              {
                network: "facebook",
                url: "https://campus.alkemy.org/"
              },
              {
                network: "instagram",
                url: "https://campus.alkemy.org/"
              }
          ]
    }

    return (
        <Container fluid className='footer-box'>
            <Row>
                <Brand name={data.name} src={data.src} />
            </Row>
            <Row>
                <LinksMenu links={data.links}/>
            </Row>
            <Row>
                <hr className='separator my-4'/>
            </Row>
            <Row>
                <MediaMenu media={data.media}/>
            </Row>
            <Row>
                <span className=' my-2 rights text-center'>2022 by Alkemy. All Rights Reserved.</span>
            </Row>
        </Container>
    )
}


export default Footer;