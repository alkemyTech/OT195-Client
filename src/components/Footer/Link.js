import React from "react";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Link = (props) => {
  const { navItem } = props;
  const { name, route } = navItem;

  return (
    <Nav.Item as='li'>
      <Nav.Link as={NavLink} to={route}>{name}</Nav.Link>
    </Nav.Item>
  );
};

export default Link;