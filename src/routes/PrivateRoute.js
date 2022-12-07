import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const selector = useSelector((state) => state.user);
    console.log(selector);

    return selector.isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
