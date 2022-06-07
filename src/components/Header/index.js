import React from "react";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import useFetch from "../../hooks/useFetch";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const { data: publicInfo, loading } = useFetch(
    process.env.REACT_APP_PUBLIC_ENDPOINT
  );

  if (loading){ return <p>Loading</p>}else{
    console.log(publicInfo)
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
  
  
};

export default Header;
