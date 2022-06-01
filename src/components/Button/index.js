import React from "react";
import { Button } from "react-bootstrap";

import "./Buttons.css";

// This component recieves text, the style class ('primary' or 'secondary' for now) and a callback for onClick event
const ButtonComponent = (props) => {
  const { styles, callbackClick, children, ...args } = props;

  return (
    <Button
      className={`navbar-button ${styles}`}
      {...args}
      onClick={callbackClick}
    >
      {children}
    </Button>
  );
};
export default ButtonComponent;
