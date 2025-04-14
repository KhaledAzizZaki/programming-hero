import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
