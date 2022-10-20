import React, { useContext } from "react";

import { Container } from "react-bootstrap";
import { AdminContext } from "../../contexts/adminContext";

const Image = ({newInfo}) => { // traigo lo que viene de Detail.js
  const { welcomeData } = useContext(AdminContext); // esto no sirve , buscar info useContext
  // console.log(newInfo)
  return (
    <Container className="img-title d-flex justify-content-center">
      <img
        src = {newInfo.image}
        alt={newInfo.name}
        className="img-title"
      />
    </Container>
  );
};

export default Image;
