import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="d-flex gap-2">
        <Link to={"/admin/product"} className="btn btn-dark ">Product</Link>
        <Link to={"/admin/order"} className="btn btn-secondary ">Order</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
