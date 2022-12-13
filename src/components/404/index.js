import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

function NotFound() {
    return (
        <div className="not-found-container">
            <img
                src="/assets/images/404/404.png"
                alt="404"
                className="image-not-found"
            />
            <div className="not-found-button">
                <Link to="/">Về trang chủ</Link>
            </div>
        </div>
    );
}

export default NotFound;
