import React from "react";

import NavLink from "./NavLink";

import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const NavMenu = (props) => {
  const { menu } = props;

  // Use the 'useLocation' hook from react router to get the exact location
  const location = useLocation();

  return (
    // Placeholder just the string "/home" for now
    <Navbar.Collapse className="justify-content-end">
      <Nav activeKey={location.pathname}>
        {menu?.items
          ? menu.items.map((item, index) => (
              <NavLink navItem={item} key={index}></NavLink>
            ))
          : null}
      </Nav>
    </Navbar.Collapse>
  );
};

export default NavMenu;
