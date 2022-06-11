import React from "react";

import Card from "react-bootstrap/Card";
import ButtonComponent from "../Button";

import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const { image, text, link } = props;

  const navigate = useNavigate();

  const callbackClick = () => {
    return navigate("/news/" + link);
  };

  return (
    <Card>
      <Card.Img src={"http://localhost:3005/images/" + image} />
      <Card.Text className="p-3">{text}</Card.Text>
      <ButtonComponent styles="btn-card" callbackClick={callbackClick}>
        Ver novedad
      </ButtonComponent>
    </Card>
  );
};

export default Item;
