import React from "react";

import NavLink from "./NavLink";

import { Nav } from "react-bootstrap";

const NavMenu = (props) => {
  const { menu } = props;

  return (
    // Placeholder just the string "/home" for now
    <Nav activeKey="/home">
      {menu?.items
        ? menu.items.map((item) => <NavLink navItem={item}></NavLink>)
        : null}
    </Nav>
  );
};

export default NavMenu;
