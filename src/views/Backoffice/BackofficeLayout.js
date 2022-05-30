import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Backoffice/Header";

const Backofficelayout = () => {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  );
};

export default Backofficelayout;
