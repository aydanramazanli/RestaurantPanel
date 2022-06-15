import React from "react";
import Navbar from "../companents/Navbar";
import Home from "../companents/Home";
import Orders from "../companents/Orders";
import { useLocation } from "react-router-dom";
import OrderDetail from "../companents/OrderDetail";

const Main = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />

      <div>
        {(() => {
          if (location.pathname === "/orders") {
            return <Orders />;
          } else if (location.pathname === "/orderdetail") {
            return <OrderDetail />;
          } else {
            return <Home />;
          }
        })()}
      </div>
    </>
  );
};

export default Main;
