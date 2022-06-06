import React from "react";

import { Nav } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

const Icon = (props) => {

    const { data } = props;
    const { url, name } = data;

    return (
        <Nav.Item as='li' className='footer-icon mx-3'>
            <SocialIcon url={url} network={name.toLowerCase()}/>
        </Nav.Item>
    );
};

export default Icon;