import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    Home,
    ProductDetail,
    ShoppingCart,
    ManagerProduct,
    ManagerService,
    ManagerUser,
    Payment,
    Blog,
    Statistical,
    Hiring,
    PhotoAndVideo,
    Policy,
    ManagerBlog,
    ManagerHistoryOrder,
    History,
    Page404,
    ManagerHistoryOrder3,
    ManagerProduct3,
    ManagerUser3,
    ManagerHistoryOrder4,
    ManagerHistoryOrder5,
    ManagerProduct5,
    Customer,
} from "../pages";
import { Service } from "../pages";
import { About } from "../pages";
import { Login } from "../pages";
import { Register } from "../pages";
import { Products } from "../pages";
import { BlogDetail } from "../pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { reload } from "../redux/user.slice";
import PrivateRoute from "./PrivateRoute";
import Modal from "../components/Modal";

export default function App() {
    const dispatch = useDispatch();
    //dispatch action reload
    useEffect(() => {
        dispatch(reload());
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route exact path="/test-modal" element={<Modal />}></Route>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/customer" element={<Customer />}></Route>
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
                    path="/product/:slug.:productId.html"
                    element={<ProductDetail />}
                ></Route>
                <Route
                    exact
                    path={`/shopping-cart`}
                    element={<ShoppingCart />}
                ></Route>
                {/* <Route
                    exact
                    path="/admin/product"
                    element={<ManagerProduct />}
                ></Route> */}
                <Route
                    exact
                    path="/blog/:slug.:blogId.html"
                    element={<BlogDetail />}
                ></Route>
                <Route exact path={`/payment`} element={<Payment />}></Route>
                <Route exact path="blog" element={<Blog />}></Route>
                <Route
                    exact
                    path="/admin/statistical"
                    element={<Statistical />}
                ></Route>
                <Route exact path="/hiring" element={<Hiring />}></Route>
                <Route
                    exact
                    path="/gallery"
                    element={<PhotoAndVideo />}
                ></Route>
                <Route exact path="/policy" element={<Policy />}></Route>
                <Route exact path="/history" element={<History />}></Route>
                <Route exact path="/admin/product" element={<PrivateRoute />}>
                    <Route
                        exact
                        path="/admin/product"
                        element={<ManagerProduct />}
                    />
                </Route>
                <Route exact path="/admin/service" element={<PrivateRoute />}>
                    <Route
                        exact
                        path="/admin/service"
                        element={<ManagerService />}
                    ></Route>
                </Route>
                <Route exact path="/admin/user" element={<PrivateRoute />}>
                    <Route
                        exact
                        path="/admin/user"
                        element={<ManagerUser />}
                    ></Route>
                </Route>
                <Route exact path="/admin/blog" element={<PrivateRoute />}>
                    <Route
                        exact
                        path="/admin/blog"
                        element={<ManagerBlog />}
                    ></Route>
                </Route>
                <Route exact path="/admin/order" element={<PrivateRoute />}>
                    <Route
                        exact
                        path="/admin/order"
                        element={<ManagerHistoryOrder />}
                    ></Route>
                </Route>
                <Route
                    exact
                    path="/sellemployee/order"
                    element={<PrivateRoute />}
                >
                    <Route
                        exact
                        path="/sellemployee/order"
                        element={<ManagerHistoryOrder3 />}
                    ></Route>
                </Route>
                <Route
                    exact
                    path="/sellemployee/user"
                    element={<PrivateRoute />}
                >
                    <Route
                        exact
                        path="/sellemployee/user"
                        element={<ManagerUser3 />}
                    ></Route>
                </Route>
                <Route
                    exact
                    path="/sellemployee/product"
                    element={<PrivateRoute />}
                >
                    <Route
                        exact
                        path="/sellemployee/product"
                        element={<ManagerProduct3 />}
                    />
                </Route>
                <Route exact path="/shipper/order" element={<PrivateRoute />}>
                    <Route
                        exact
                        path="/shipper/order"
                        element={<ManagerHistoryOrder4 />}
                    ></Route>
                </Route>
                <Route exact path="/cashier/order" element={<PrivateRoute />}>
                    <Route
                        exact
                        path="/cashier/order"
                        element={<ManagerHistoryOrder5 />}
                    ></Route>
                </Route>
                <Route exact path="/cashier/product" element={<PrivateRoute />}>
                    <Route
                        exact
                        path="/cashier/product"
                        element={<ManagerProduct5 />}
                    />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Router>
    );
}
