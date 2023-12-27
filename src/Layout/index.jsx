import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function index() {
  return (
    <>
      {/* Header */}
    <Header/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default index;
