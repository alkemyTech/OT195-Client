import React from "react";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
  const { item, styles } = props;
  const { text, route } = item;

  return (
    <Nav.Item className={`navbar-items ${styles}`}>
      <Nav.Link
        as={NavLink}
        to={route}
        eventKey={text === "Inicio" ? "/" : route}
      >
        {text}
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavbarItem;
