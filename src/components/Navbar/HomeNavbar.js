import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./HomeNavbar.css";

function HomeNavbar() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    });

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
            <nav
                className={
                    navbar
                        ? "navbar-container navbar-container-active"
                        : "navbar-container"
                }
            >
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
                                <NavLink
                                    to="/"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        isActive ? "tab-active" : "tab-inactive"
                                    }
                                >
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className="navbar-list-detail">
                                <NavLink
                                    to="/product"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        isActive ? "tab-active" : "tab-inactive"
                                    }
                                >
                                    Sản phẩm
                                </NavLink>
                            </li>
                            <li className="navbar-list-detail">
                                <NavLink
                                    to="/service"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        isActive ? "tab-active" : "tab-inactive"
                                    }
                                >
                                    Dịch vụ
                                </NavLink>
                            </li>
                            <li className="navbar-list-detail">
                                <NavLink
                                    to="/blog"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        isActive ? "tab-active" : "tab-inactive"
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li className="navbar-list-detail">
                                <NavLink
                                    to="/about"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        isActive ? "tab-active" : "tab-inactive"
                                    }
                                >
                                    Về chúng tôi
                                </NavLink>
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
