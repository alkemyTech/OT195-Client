import React, { useState } from "react";
import { Navbar, Offcanvas } from "react-bootstrap";

const NavbarOffcanvas = ({ children, ...props }) => {
  const {
    title,
    toggleStyle = "",
    expand,
    setExpand,
    placement = "end",
  } = props;

  return (
    <>
      <Navbar.Toggle
        aria-controls={`offcanvasNavbar-expand-${expand}`}
        className={toggleStyle}
        onClick={() => setExpand(true)}
      ></Navbar.Toggle>
      <Navbar.Offcanvas
        show={expand}
        onHide={() => setExpand(false)}
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement={placement}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            {title}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{children}</Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
};

export default NavbarOffcanvas;
