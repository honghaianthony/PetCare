import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setButton(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [button]);

    return (
        <header>
            <nav className="navbar-container">
                <div className="navbar-desktop">
                    <div className="navbar-logo">
                        <Link to="/">PetCare</Link>
                    </div>
                    <div className="navbar-menu-icon" onClick={handleClick}>
                        <Icon icon={click ? "fa:close" : "fa:bars"} />
                    </div>
                    <div className="navbar-menu-main"></div>
                    <div className="navbar-items">
                        <ul
                            className={
                                click ? "navbar-list active" : "navbar-list"
                            }
                        >
                            <li className="navbar-list-detail">
                                <Link to="/" onClick={closeMobileMenu}>
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="navbar-list-detail">
                                <Link to="/product" onClick={closeMobileMenu}>
                                    Sản phẩm
                                </Link>
                            </li>
                            <li className="navbar-list-detail">
                                <Link to="/service" onClick={closeMobileMenu}>
                                    Dịch vụ
                                </Link>
                            </li>
                            <li className="navbar-list-detail">
                                <Link to="/blog" onClick={closeMobileMenu}>
                                    Blog
                                </Link>
                            </li>
                            <li className="navbar-list-detail">
                                <Link to="/" onClick={closeMobileMenu}>
                                    Về chúng tôi
                                </Link>
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

export default Navbar;
