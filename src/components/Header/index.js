import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import useFetch from "../../hooks/useFetch";

const Header = () => {
  const endpoint = "http://localhost:3001/users";
  const { data, loading } = useFetch(endpoint);

  // const data = {
  //   image: "",
  //   name: "",
  //   menu: {
  //     items: [
  //       {
  //         text: "Inicio",
  //         route: "/",
  //       },
  //       {
  //         text: "Nosotros",
  //         route: "/",
  //       },
  //       {
  //         text: "Novedades",
  //         route: "/",
  //       },
  //       {
  //         text: "Testimonios",
  //         route: "/",
  //       },
  //       {
  //         text: "Contacto",
  //         route: "/",
  //       },
  //       {
  //         text: "Distribuye",
  //         route: "/",
  //       },
  //     ],
  //   },
  // };

  return (
    <header>
      <Logo logo={data.image} name={data.name}></Logo>
      <Nav menu={data.menu}></Nav>
    </header>
  );
};

export default Header;
