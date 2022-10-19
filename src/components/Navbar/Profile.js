import React from "react";
import "./Profile.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user.slice";

function Profile() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <div className="profile-container">
            <div className="profile-container-detail">
                <div className="profile-options">
                    <span onClick={handleLogout}>
                        <p> Đăng xuất </p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
