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

  const { organizationData, setOrganizationData } = useContext(AdminContext);
  const location = useLocation();

  const { data: publicInfo, loading } = useFetch(
    process.env.REACT_APP_PUBLIC_ENDPOINT
  );

  if (loading) return <p>Loading</p>;

  return (
    <Container fluid className="navbar-container d-flex flex-column">
      <Navbar className="my-auto">
        <Container fluid>
          <NavBrand
            image={publicInfo?.results.image}
            name={publicInfo?.results.name}
          ></NavBrand>
          <NavMenu menu={publicInfo?.results.nav}></NavMenu>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
