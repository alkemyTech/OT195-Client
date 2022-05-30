import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Backoffice/Header";
import { HomeProvider } from "../../contexts/homeContext";

const Backofficelayout = () => {
  return (
    <HomeProvider>
      <Header></Header>
      <Outlet></Outlet>
    </HomeProvider>
  );
};

export default Backofficelayout;
