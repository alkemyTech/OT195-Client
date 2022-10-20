import React from "react";
import { Navbar, Container } from "react-bootstrap";

import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import NavbarOffcanvas from "../Offcanvas/Offcanvas";

import useFetch from "../../hooks/useFetch";

import "./Header.css";
import { useState } from "react";

const Header = () => {
  const { data: publicInfo, loading } = useFetch( // trae el menu para el header lo que esta la ruta del back organitations
    process.env.REACT_APP_PUBLIC_ENDPOINT
  );

  const [expandOcanvas, setExpandOcanvas] = useState(false);

  if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <Container fluid className="navbar-container d-flex flex-column">
        <Navbar className="my-auto">
          <Container fluid>
            <NavBrand
              image={publicInfo?.results.image}
              name={publicInfo?.results.name}
            ></NavBrand>
            <Navbar className="justify-content-end">
              <NavMenu
                menu={publicInfo?.results.nav}
                menuStyle="justify-content-end"
                itemStyles="d-none d-lg-block"
                buttonStyles="mx-1 py-2 px-3 d-lg-block d-none"
              ></NavMenu>
              <NavbarOffcanvas
                title="Menu de navegación"
                toggleStyle="d-block d-lg-none"
                expand={expandOcanvas}
                setExpand={setExpandOcanvas}
              >
                <NavMenu
                  menu={publicInfo?.results.nav}
                  buttonStyles="my-2"
                ></NavMenu>
              </NavbarOffcanvas>
            </Navbar>
          </Container>
        </Navbar>
      </Container>
    );
  }
};

export default Header;
