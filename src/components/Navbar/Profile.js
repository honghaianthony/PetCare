import React from "react";
import "./Profile.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user.slice";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile(props) {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <div className="profile-container">
            <div className="profile-container-detail">
                <div className="profile-options">
                    <div className="profile-info">
                        <img src={props.image} alt={props.fullName} />
                        <span>{props.fullName}</span>
                    </div>
                    {(selector.role === 1 ||
                        selector.role === 2 ||
                        selector.role === 3 ||
                        selector.role === 4 ||
                        selector.role === 5) && (
                        <>
                            <div className="profile-option-detail">
                                <Icon
                                    icon="material-symbols:add-shopping-cart"
                                    className="profile-option-detail-icon"
                                />
                                <Link to="/shopping-cart"> Giỏ hàng </Link>
                            </div>
                        </>
                    )}
                    {(selector.role === 1 ||
                        selector.role === 2 ||
                        selector.role === 3 ||
                        selector.role === 4 ||
                        selector.role === 5) && (
                        <>
                            <div className="profile-option-detail">
                                <Icon
                                    icon="material-symbols:history-rounded"
                                    className="profile-option-detail-icon"
                                />
                                <Link to="/history">Lịch sử mua hàng</Link>
                            </div>
                        </>
                    )}
                    {selector.role === 3 && (
                        <>
                            <div className="profile-option-detail">
                                <Icon
                                    icon="material-symbols:admin-panel-settings"
                                    className="profile-option-detail-icon"
                                />
                                <Link to="/sellemployee/product">
                                    Trang quản trị
                                </Link>
                            </div>
                        </>
                    )}
                    {selector.role === 2 && (
                        <>
                            <div className="profile-option-detail">
                                <Icon
                                    icon="material-symbols:admin-panel-settings"
                                    className="profile-option-detail-icon"
                                />
                                <Link to="/admin/statistical">
                                    Trang quản trị
                                </Link>
                            </div>
                        </>
                    )}
                    {selector.role === 5 && (
                        <>
                            <div className="profile-option-detail">
                                <Icon
                                    icon="material-symbols:admin-panel-settings"
                                    className="profile-option-detail-icon"
                                />
                                <Link to="/cashier/order">Trang quản trị</Link>
                            </div>
                        </>
                    )}
                    {selector.role === 4 && (
                        <>
                            <div className="profile-option-detail">
                                <Icon
                                    icon="material-symbols:admin-panel-settings"
                                    className="profile-option-detail-icon"
                                />
                                <Link to="/shipper/order">
                                    Quản lý đơn hàng
                                </Link>
                            </div>
                        </>
                    )}
                    <div
                        className="profile-option-detail"
                        onClick={handleLogout}
                    >
                        <Icon
                            icon="fe:logout"
                            className="profile-option-detail-icon"
                        />
                        <p> Đăng xuất </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
