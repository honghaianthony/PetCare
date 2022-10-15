import React from "react";
import { Link } from "react-router-dom";
import "./AuthNavbar.css";

function AuthNavbar() {
    return (
        <header>
            <nav className="auth-navbar-container">
                <div className="auth-navbar-desktop">
                    <div className="auth-navbar-logo">
                        <Link to="/">PetCare</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default AuthNavbar;
