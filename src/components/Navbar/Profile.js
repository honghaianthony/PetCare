import React from "react";
import "./Profile.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user.slice";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Profile(props) {
    const dispatch = useDispatch();

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
                    <div className="profile-option-detail">
                        <Icon
                            icon="fe:logout"
                            className="profile-option-detail-icon"
                        />
                        <Link to="/admin/product"> Sản phẩm </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
