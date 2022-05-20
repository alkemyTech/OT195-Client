import React from "react";

const NavOption = (props) => {
  const { navItem } = props;
  const { text, route } = navItem;
  return (
    <li>
      <a href={route}>{text}</a>
    </li>
  );
};

export default NavOption;
