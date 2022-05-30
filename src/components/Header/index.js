import React from "react";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import useFetch from "../../hooks/useFetch";
import { Navbar, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import "./Header.css";

const Header = () => {
  // Endpoint link
  //const endpoint = "localhost";

  // Fetching header data
  // const { data, loading } = useFetch(endpoint);
  const location = useLocation();
  const { data: publicInfo, loading } = useFetch(
    "http://localhost:3005/organizations/1/public"
  );

  // Placeholder
  const data = {
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
        {
          text: "Cerrar Sesión",
          style: "primary",
          route: "/signup",
        },
        {
          text: "Backoffice",
          style: "primary",
          route: "/backoffice",
        },
      ],
    },
  };

  if (!loading && !location.pathname.includes("backoffice")) {
    return (
      <Container fluid className="navbar-container d-flex flex-column">
        <Navbar className="my-auto">
          <Container fluid>
            <NavBrand
              image={publicInfo.results.image}
              name={data.name}
            ></NavBrand>
            <NavMenu menu={data.nav}></NavMenu>
          </Container>
        </Navbar>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default Header;
