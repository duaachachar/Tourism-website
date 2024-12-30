import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
    <div className="border-b shadow-lg">
      <Header />
       </div>
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainLayout;
