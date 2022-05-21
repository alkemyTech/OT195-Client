import React from "react";
import { Button } from "react-bootstrap";

import "./Buttons.css";

// This component recieves text, the style class ('primary' or 'secondary' for now) and a callback for onClick event
const ButtonComponent = (props) => {
  const { text, style, callbackClick } = props;

  return (
    <Button className={`navbar-button ${style}`} onClick={callbackClick}>
      {text}
    </Button>
  );
};
export default ButtonComponent;
