import React from 'react';

import "./Footer.css";

import { Container, Row } from "react-bootstrap";
import Brand from './Brand'
import LinksMenu from './LinksMenu'
import MediaMenu from './MediaMenu'

const Footer = (props) => {

  const {image:src} = props


    const data = { // this object must be filled by fetching information from the server
        name: '',
        links: [
            {
              name: "Inicio",
              route: "/",
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
          media: [ // Example
            //   {
            //     network: "twitter",
            //     url: "https://campus.alkemy.org/"
            //   },
            //   {
            //     network: "facebook",
            //     url: "https://campus.alkemy.org/"
            //   },
            //   {
            //     network: "instagram",
            //     url: "https://campus.alkemy.org/"
            //   }
          ]
    }

    return (
        <Container fluid className='footer-box'>
            <Row>
                <Brand name={data.name} src={src} />
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