import React from "react";

import { Navbar } from "react-bootstrap";

const NavBrand = (props) => {
  const { name, image } = props;

  return (
    <Navbar.Brand>
      <img alt={name} src={image} width="100" height="53"></img>
    </Navbar.Brand>
  );
};

export default NavBrand;
