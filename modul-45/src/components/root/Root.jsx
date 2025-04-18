import React from "react";
import Header from "../header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        {isNavigation && <span>Loading...</span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
