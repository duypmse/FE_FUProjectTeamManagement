import React from "react";
import { Route, Routes } from "react-router-dom";
import Inventory from "../../pages/Inventory";
import Orders from "../../pages/Orders";
import Customers from "../../pages/Customers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
};

export default AppRoutes;
