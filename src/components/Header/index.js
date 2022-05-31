import React, { useContext, useEffect } from "react";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import useFetch from "../../hooks/useFetch";
import { Navbar, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AdminContext } from "../../contexts/adminContext";
import "./Header.css";

const Header = () => {
  // Endpoint link
  //const endpoint = "localhost";

  // Fetching header data
  // const { data, loading } = useFetch(endpoint);

  const {organizationData, setOrganizationData} = useContext(AdminContext)
  const location = useLocation();
  const { data: publicInfo, loading } = useFetch(
    process.env.REACT_APP_PUBLIC_ENDPOINT
  );

<<<<<<< HEAD
  useEffect(()=>{
    setOrganizationData(publicInfo)
  },[publicInfo, loading, setOrganizationData])
=======
  // context for data
  const { organizationData, setOrganizationData } = useContext(AdminContext);

  useEffect(() => {
    setOrganizationData(publicInfo);
  }, [publicInfo, setOrganizationData]);
>>>>>>> 88fb81a820c04ac7924e501b99722bcc6575e31a

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
          text: "Backoffice",
          style: "primary",
          route: "/backoffice",
        },
        {
          text: "Cerrar Sesión",
          style: "primary",
          route: "/signup",
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
              image={organizationData.results.image}
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
