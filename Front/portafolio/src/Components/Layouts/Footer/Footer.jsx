import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default Footer;
