import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import { useDetectClickOutside } from "react-detect-click-outside";

function Navbar() {
    const selector = useSelector((state) => state.user);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [profile, setProfile] = useState(false);

    const closeDropDownProfileSelected = () => {
        setProfile(false);
    };

    const refProfileSelected = useDetectClickOutside({
        onTriggered: closeDropDownProfileSelected,
    });

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
            <nav className="index-navbar-container">
                <div className="index-navbar-desktop">
                    <div className="index-navbar-logo">
                        <Link to="/">PetCare</Link>
                    </div>
                    <div
                        className="index-navbar-menu-icon"
                        onClick={handleClick}
                    >
                        <Icon icon={click ? "fa:close" : "fa:bars"} />
                    </div>
                    <div className="index-navbar-menu-main"></div>
                    <div className="index-navbar-items">
                        <ul
                            className={
                                click
                                    ? "index-navbar-list active"
                                    : "index-navbar-list"
                            }
                        >
                            <li className="index-navbar-list-detail">
                                <Link to="/" onClick={closeMobileMenu}>
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="index-navbar-list-detail">
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
                            <li className="index-navbar-list-detail">
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
                            <li className="index-navbar-list-detail">
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
                            <li className="index-navbar-list-detail">
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
                    {selector.isAuthenticated ? (
                        <div
                            className="index-navbar-authenticated"
                            ref={refProfileSelected}
                            onClick={() => {
                                setProfile(!profile);
                            }}
                        >
                            <img
                                src={selector.avatar}
                                alt={selector.fullName}
                            />
                            {profile && (
                                <Profile
                                    image={selector.avatar}
                                    fullName={selector.fullName}
                                />
                            )}
                        </div>
                    ) : (
                        <div className="index-navbar-auth">
                            <Link to="/login">Đăng nhập</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
