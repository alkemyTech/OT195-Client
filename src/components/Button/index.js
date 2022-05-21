import React from "react";
import { Button } from "react-bootstrap";

import "./Buttons.css";

const ButtonComponent = (props) => {
  const { text, style, handleClick } = props;

  return (
    <Button className={`navbar-button ${style}`} onClick={handleClick}>
      {text}
    </Button>
  );
};
export default ButtonComponent;
