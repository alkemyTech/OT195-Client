import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/actions/loginActions";

import NavLink from "./NavLink";

import { Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import NavButton from "../Button";

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

  return (
    // Placeholder just the string "/home" for now
    <Navbar.Collapse className="justify-content-end">
      <Nav activeKey={location.pathname} className="align-items-center">
        {menu?.items
          ? menu.items.map((item, index) => (
              <NavLink navItem={item} key={index}></NavLink>
            ))
          : null}
        {menu?.items
          ? menu.buttons.map((item, index) =>
              user.loading === "succeded"
                ? item.text !== "Log In" &&
                  item.text !== "Registrate" && (
                    <NavButton
                      styles={item.style}
                      callbackClick={() =>
                        item.text === "Cerrar Sesión"
                          ? dispatch(logOut())
                          : buttonHandleClick(item.route)
                      }
                      key={index}
                    >
                      {item.text}
                    </NavButton>
                  )
                : item.text !== "Backoffice" &&
                  item.text !== "Cerrar Sesión" && (
                    <NavButton
                      text={item.text}
                      style={item.style}
                      callbackClick={() => buttonHandleClick(item.route)}
                      key={index}
                    ></NavButton>
                  )
            )
          : null}
      </Nav>
    </Navbar.Collapse>
  );
};

export default NavMenu;
