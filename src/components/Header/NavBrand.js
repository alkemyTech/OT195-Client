import React from "react";

import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBrand = (props) => {
  const { name, image } = props;

  return (
    <Navbar.Brand as={Link} to="/">
      <img alt={name} src={image} width="100" height="53"></img>
    </Navbar.Brand>
  );
};

export default NavBrand;
