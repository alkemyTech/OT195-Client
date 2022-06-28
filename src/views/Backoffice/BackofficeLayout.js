import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Backoffice/Header";
import { motion } from "framer-motion";

const Backofficelayout = () => {
  return (
    <>
      <Header></Header>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        style={{ minHeight: "85vh" }}
      >
        <Outlet></Outlet>
      </motion.main>
    </>
  );
};

export default Backofficelayout;
