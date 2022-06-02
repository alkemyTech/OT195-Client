import React from "react";

import Card from "react-bootstrap/Card";
import Button from "../Button";

import { useNavigate, useLocation } from "react-router-dom";

const Item = (props) => {
  const { image, text, link } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const callbackClick = () => {
    return navigate(location.pathname + "/" + link);
  };

  return (
    <Card>
      <Card.Img src={"http://localhost:3005/images/" + image} />
      <Card.Text className="p-3">{text}</Card.Text>
      <Button styles="btn-card" callbackClick={callbackClick}>
        Ver novedad
      </Button>
    </Card>
  );
};

export default Item;
