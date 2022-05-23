import React from "react";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Link = (props) => {
    const { data } = props;
    const { name, route } = data;

    return (
        <Nav.Item as='li' className='footer-link mx-2'>
            <Nav.Link as={NavLink} to={route}>{name}</Nav.Link>
        </Nav.Item>
    );
};

export default Link;