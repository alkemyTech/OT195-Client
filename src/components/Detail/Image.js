import React, { useContext } from "react";

import { Container } from "react-bootstrap";
import { AdminContext } from "../../contexts/adminContext";

const Image = () => {
  const { welcomeData } = useContext(AdminContext);
  return (
    <Container className="img-title d-flex justify-content-center">
      <img
        src={welcomeData.image}
        alt="somos-mas-welcome"
        className="img-title"
      />
    </Container>
  );
};

export default Image;
