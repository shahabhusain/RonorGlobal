import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PreNav from "./PreNav";
const Layout1 = () => {
  return (
    <div>
      <PreNav />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout1;
