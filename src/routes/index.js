import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProductDetail } from "../pages";
import { Service } from "../pages";
import { About } from "../pages";
import { Login } from "../pages";
import { Register } from "../pages";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/service" element={<Service />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/register" element={<Register />}></Route>
            </Routes>
        </Router>
    );
        <Route
          exact
          path={`/product/:productId`}
          element={<ProductDetail />}
        ></Route>
}
