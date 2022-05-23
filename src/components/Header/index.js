import React from "react";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import useFetch from "../../hooks/useFetch";
import { Navbar, Container } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  // Endpoint link
  //const endpoint = "localhost";

  // Fetching header data
  // const { data, loading } = useFetch(endpoint);

  // Placeholder
  const data = {
    image: "",
    name: "",
    nav: {
      items: [
        {
          text: "Inicio",
          route: "/home",
        },
        {
          text: "Nosotros",
          route: "/staff",
        },
        {
          text: "Novedades",
          route: "/news",
        },
        {
          text: "Testimonios",
          route: "/testimonials",
        },
        {
          text: "Contacto",
          route: "/contact",
        },
        {
          text: "Contribuye",
          route: "/contribute",
        },
      ],
      buttons: [
        {
          text: "Log In",
          style: "secondary",
          route: "/login",
        },
        {
          text: "Registrate",
          style: "primary",
          route: "/signup",
        },
      ],
    },
  };

  return (
    <Container fluid className="navbar-container d-flex flex-column">
      <Navbar className="my-auto">
        <Container fluid>
          <NavBrand logo={data.image} name={data.name}></NavBrand>
          <NavMenu menu={data.nav}></NavMenu>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
