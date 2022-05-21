import React from "react";

import NavLink from "./NavLink";

import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavButton from "../Button";

const NavMenu = (props) => {
  const { menu } = props;

  // Use the 'useLocation' hook from react router to get the exact location
  const location = useLocation();

  //TODO: Handle click on buttons

  return (
    // Placeholder just the string "/home" for now
    <Navbar.Collapse className="justify-content-end">
      <Nav activeKey={location.pathname} className="align-items-center">
        {menu?.items
          ? menu.items.map((item, index) => (
              <NavLink navItem={item} key={index}></NavLink>
            ))
          : null}
        {menu?.items
          ? menu.buttons.map((item, index) => (
              <NavButton
                text={item.text}
                style={item.style}
                key={index}
              ></NavButton>
            ))
          : null}
      </Nav>
    </Navbar.Collapse>
  );
};

export default NavMenu;
