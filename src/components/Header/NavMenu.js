import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/actions/loginActions";

import NavLink from "./NavLink";

import { Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import NavButton from "../Button";
import { useState } from "react";

const NavMenu = (props) => {
  const { menu } = props;

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
    // Placeholder just the string "/home" for now
    <Navbar className="justify-content-end">
      <Nav activeKey={location.pathname} className="align-items-center">
        {menu.items.map((item, index) => (
          <NavLink navItem={item} key={index}></NavLink>
        ))}

        {user.entity.roleId === ""
          ? unloggedButtons.map((button) => (
              <NavButton
                key={button.text}
                styles={`d-none d-lg-block px-3 py-2 mx-1 ${button.style}`}
                callbackClick={() => buttonHandleClick(button.route)}
              >
                {button.text}
              </NavButton>
            ))
          : null}

        {user.entity.roleId === 1
          ? adminUserButtons.map((button) => (
              <NavButton
                key={button.text}
                styles={`d-none d-lg-block px-3 py-2 mx-1 ${button.style}`}
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

        {user.entity.roleId === 2
          ? defaultUserButtons.map((button) => (
              <NavButton
                key={button.text}
                styles={`d-none d-lg-block px-3 py-2 mx-1 ${button.style}`}
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

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="d-block d-lg-none"
        ></Navbar.Toggle>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;
