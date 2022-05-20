import React from "react";

import NavOption from "./NavOption";

const Nav = (props) => {
  const { menu } = props;

  return (
    <nav>
      <ul>
        {menu?.items
          ? menu.items.map((item) => <NavOption navItem={item}></NavOption>)
          : null}
      </ul>
    </nav>
  );
};

export default Nav;
