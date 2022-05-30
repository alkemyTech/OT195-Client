import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Backoffice/Header";
import { AdminProvider } from "../../contexts/adminContext";

const Backofficelayout = () => {
  return (
    <AdminProvider>
      <Header></Header>
      <Outlet></Outlet>
    </AdminProvider>
  );
};

export default Backofficelayout;
