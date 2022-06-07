import React from "react";

import Card from "react-bootstrap/Card";
import Button from "../Button";

import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const { data } = props;
  const { image, content, id, name } = data;

  const navigate = useNavigate();

  const callbackClick = () => {
    return navigate("/novedades/" + id);
  };

  return (
    <Card>
      <Card.Text className="p-3">
        <strong>{name}</strong>
      </Card.Text>
      <Card.Img src={"http://localhost:3005/images/" + image} />
      <Card.Text
        className="p-3"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Button styles="btn-card" callbackClick={callbackClick}>
        Ver novedad
      </Button>
    </Card>
  );
};

export default Item;
