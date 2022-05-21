import React from "react";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  const { navItem } = props;
  const { text, route } = navItem;

  return (
    <Nav.Item className="navbar-items">
      <Nav.Link as={NavLink} to={route}>
        {text}
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavItem;
