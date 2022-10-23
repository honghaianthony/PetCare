import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    Home,
    ProductDetail,
    ShoppingCart,
    ManagerProduct,
    ManagerService,
    ManagerUser,
} from "../pages";
import { Service } from "../pages";
import { About } from "../pages";
import { Login } from "../pages";
import { Register } from "../pages";
import { Products } from "../pages";
import { BlogDetail } from "../pages";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/service" element={<Service />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/register" element={<Register />}></Route>
                <Route
                    exact
                    path="/product"
                    element={<Products />}
                ></Route>{" "}
                <Route
                    exact
                    path={`/product/:productId`}
                    element={<ProductDetail />}
                ></Route>
                <Route
                    exact
                    path={`/shopping-cart`}
                    element={<ShoppingCart />}
                ></Route>
                <Route
                    exact
                    path="/admin/service"
                    element={<ManagerService />}
                ></Route>
                <Route
                    exact
                    path="/admin/user"
                    element={<ManagerUser />}
                ></Route>
                <Route
                    exact
                    path="/admin/product"
                    element={<ManagerProduct />}
                ></Route>
                <Route
                    exact
                    path={`/blog/:blog`}
                    element={<BlogDetail />}
                ></Route>
            </Routes>
        </Router>
    );
}
