import React from "react";

import { Nav } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

const Icon = (props) => {

    const { data } = props;
    const { url, network } = data;

    return (
        <Nav.Item as='li' className='footer-icon mx-3'>
            <SocialIcon url={url} network={network}/>
        </Nav.Item>
    );
};

export default Icon;