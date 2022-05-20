import React from "react";

const Logo = (props) => {
  const { name, image } = props;

  return (
    <div>
      <img alt={name} src={image}></img>
    </div>
  );
};

export default Logo;
