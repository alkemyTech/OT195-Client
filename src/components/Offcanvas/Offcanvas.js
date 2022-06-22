import React, { useState } from "react";
import { Navbar, Offcanvas } from "react-bootstrap";

const NavbarOffcanvas = (props) => {
  const { title, navMenu } = props;
  const [expand] = useState(false);

  return (
    <>
      <Navbar.Toggle
        aria-controls={`offcanvasNavbar-expand-${expand}`}
        className="d-block d-lg-none"
      ></Navbar.Toggle>
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            {title}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{navMenu}</Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
};

export default NavbarOffcanvas;
