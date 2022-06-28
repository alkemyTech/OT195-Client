import React from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";

import ButtonComponent from "../Button/";

const Info = (props) => {
  const { name, content } = props;

  const navigate = useNavigate();

  const callbackClick = () => {
    navigate("/news");
  };

  return (
    <Container className="text-title justify-content-center flex-column d-flex">
      <h1 className="mb-4">{name}</h1>
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: content }}></div>

      <div>
        <ButtonComponent
          styles="btn-news mx-auto"
          callbackClick={callbackClick}
        >
          Ver todo
        </ButtonComponent>
      </div>
    </Container>
  );
};

export default Info;
