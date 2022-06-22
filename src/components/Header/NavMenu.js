import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/actions/loginActions";

import NavButton from "../Button";
import NavbarItem from "./NavMenuItem";

import { useLocation, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavMenu = (props) => {
  const { menu, menuStyle = "", itemStyles = "", buttonStyles = "" } = props;

  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  // Use the 'useLocation' hook from react router to get the exact location
  const location = useLocation();

  // Use the 'useNavigate' hook from react router to create custom methods for the buttons
  const navigate = useNavigate();

  // Custom method for the buttons
  const buttonHandleClick = (route) => {
    return navigate(route);
  };

  const [unloggedButtons, setUnloggedButtons] = useState([]);
  const [defaultUserButtons, setDefaultUserButtons] = useState([]);
  const [adminUserButtons, setAdminUserButtons] = useState([]);

  useEffect(() => {
    setUnloggedButtons(
      menu.buttons.filter(
        (button) => button.role === "none" && button.text !== "Cerrar Sesión"
      )
    );

    setDefaultUserButtons(
      menu.buttons.filter(
        (button) => button.role === "2" || button.text === "Cerrar Sesión"
      )
    );

    setAdminUserButtons(
      menu.buttons.filter(
        (button) =>
          button.role === "1" ||
          button.text === "Mi Perfil" ||
          button.text === "Cerrar Sesión"
      )
    );
  }, [menu.buttons]);

  return (
    <Nav activeKey={location.pathname} className={menuStyle}>
      {/* Render items from the navbar*/}
      {menu.items.map((item, index) => (
        <NavbarItem item={item} key={index} styles={itemStyles}></NavbarItem>
      ))}

      {/* Render buttons for the unlogged user*/}
      {user.entity.roleId === ""
        ? unloggedButtons.map((button) => (
            <NavButton
              key={button.text}
              styles={`${button.style} ${buttonStyles}`}
              callbackClick={() => buttonHandleClick(button.route)}
            >
              {button.text}
            </NavButton>
          ))
        : null}

      {/* Render buttons for the admin user*/}
      {user.entity.roleId === 1
        ? adminUserButtons.map((button) => (
            <NavButton
              key={button.text}
              styles={`${buttonStyles} ${button.style}`}
              callbackClick={() =>
                button.text === "Cerrar Sesión"
                  ? dispatch(logOut())
                  : buttonHandleClick(button.route)
              }
            >
              {button.text}
            </NavButton>
          ))
        : null}

      {/* Render buttons for the default user*/}
      {user.entity.roleId === 2
        ? defaultUserButtons.map((button) => (
            <NavButton
              key={button.text}
              styles={`${buttonStyles} ${button.style}`}
              callbackClick={() =>
                button.text === "Cerrar Sesión"
                  ? dispatch(logOut())
                  : buttonHandleClick(button.route)
              }
            >
              {button.text}
            </NavButton>
          ))
        : null}
    </Nav>
  );
};

export default NavMenu;
