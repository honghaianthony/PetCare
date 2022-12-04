import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const selector = useSelector((state) => state.user.isAuthenticated);

    return selector ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
