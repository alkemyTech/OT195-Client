import React from "react";
import { Navbar, Container } from "react-bootstrap";

import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import NavbarOffcanvas from "../Offcanvas/Offcanvas";

import useFetch from "../../hooks/useFetch";

import "./Header.css";

const Header = () => {
  const { data: publicInfo, loading } = useFetch(
    process.env.REACT_APP_PUBLIC_ENDPOINT
  );

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
                navMenu={
                  <NavMenu
                    menu={publicInfo?.results.nav}
                    buttonStyles="my-2"
                  ></NavMenu>
                }
              />
            </Navbar>
          </Container>
        </Navbar>
      </Container>
    );
  }
};

export default Header;
