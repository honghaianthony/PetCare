import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavbar.css";

function HomeNavbar() {
    return (
        <header>
            <nav className="navbar-container">
                <div className="navbar-desktop">
                    <div className="navbar-logo">
                        <Link to="/">PetCare</Link>
                    </div>
                    <div className="navbar-items">
                        <ul className="navbar-list">
                            <li className="navbar-list-detail">
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li className="navbar-list-detail">
                                <Link to="/product">Sản phẩm</Link>
                            </li>
                            <li className="navbar-list-detail">
                                <Link to="/service">Dịch vụ</Link>
                            </li>
                            <li className="navbar-list-detail">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="navbar-list-detail">
                                <Link to="/">Về chúng tôi</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-auth">
                        <Link to="/login">Đăng nhập</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HomeNavbar;
