import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  ManagerProduct,
  ManagerService,
  ManagerUser,
  ProductDetail,
} from "../pages";
import { Service } from "../pages";
import { About } from "../pages";
import { Login } from "../pages";
import { Register } from "../pages";
import { Products } from "../pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/service" element={<Service />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/product" element={<Products />}></Route>{" "}
        <Route
          exact
          path={`/product/:productId`}
          element={<ProductDetail />}
        ></Route>
        <Route exact path="/admin/service" element={<ManagerService />}></Route>
        <Route exact path="/admin/user" element={<ManagerUser />}></Route>
        <Route exact path="/admin/product" element={<ManagerProduct />}></Route>
      </Routes>
    </Router>
  );
}
