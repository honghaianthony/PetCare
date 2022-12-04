import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { useDetectClickOutside } from "react-detect-click-outside";
import Profile from "../../Navbar/Profile";

const NavbarAdmin = ({ openSider }) => {
    const location = useLocation();
    const selector = useSelector((state) => state.user);
    const [profile, setProfile] = useState(false);

    const closeDropDownProfileSelected = () => {
        setProfile(false);
    };

    const refProfileSelected = useDetectClickOutside({
        onTriggered: closeDropDownProfileSelected,
    });
    return (
        <div className="navbar-admin">
            <div className="navbar-admin-container">
                <Icon
                    icon="ant-design:menu-outlined"
                    className="toggle-sider-mobile"
                    onClick={openSider}
                />
                <h1>
                    {location.pathname === "/admin/user" &&
                        "Quản lý người dùng"}
                    {location.pathname === "/admin/product" &&
                        "Quản lý sản phẩm"}
                    {location.pathname === "/admin/service" &&
                        "Quản lý dịch vụ"}
                    {location.pathname === "/admin/blog" && "Quản lý Blog"}
                    {location.pathname === "/admin/statistical" && "Thống kê"}
                    {location.pathname === "/admin/order" && "Quản lý đơn hàng"}
                </h1>
                <div className="user-admin-dropdown">
                    {selector.isAuthenticated ? (
                        <div
                            className="navbar-authenticated"
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
                        <div className="navbar-auth">
                            <Link to="/login">Đăng nhập</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default NavbarAdmin;
