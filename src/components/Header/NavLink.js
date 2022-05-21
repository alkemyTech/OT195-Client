import React from "react";

import { Nav } from "react-bootstrap";

const NavLink = (props) => {
  const { navItem } = props;
  const { text, route } = navItem;
  return (
    <Nav.Item className="navbar-items">
      <Nav.Link href={route}>{text}</Nav.Link>
    </Nav.Item>
  );
};

export default NavLink;
