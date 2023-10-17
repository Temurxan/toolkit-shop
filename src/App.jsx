import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./page/admin/Admin";
import Order from "./page/admin/order/Order";
import Product from "./page/admin/product/Product";
import Basket from "./page/basket/Basket";
import Navbar from "./page/component/Navbar";
import Home from "./page/home/Home";

const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<Admin />}>
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/order" element={<Order />} />
        </Route> */}
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
};

export default App;
