import React from "react";
import "./AuthRegister.css";
import { Link } from "react-router-dom";

function AuthRegister() {
    return (
        <div className="auth-container">
            <div className="auth-container-detail">
                <div className="auth-register-container">
                    <div className="auth-register-up">
                        <div className="auth-register-another">
                            <div className="auth-register-another-text">
                                <h3>Đăng ký</h3>
                            </div>
                            <hr />
                        </div>
                        <div className="auth-register-input-container">
                            <form>
                                <div className="auth-register-input">
                                    <label htmlFor="grid-password">
                                        Tên người dùng
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Tên người dùng"
                                        id="grid-password"
                                    />
                                </div>
                                <div className="auth-register-input">
                                    <label htmlFor="grid-password">
                                        Mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        id="grid-password"
                                    />
                                </div>
                                <div className="auth-register-input">
                                    <label htmlFor="grid-password">
                                        Xác nhận mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Xác nhận mật khẩu"
                                        id="grid-password"
                                    />
                                </div>
                                <div className="auth-register-input">
                                    <label htmlFor="grid-password">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        id="grid-password"
                                    />
                                </div>
                                <div className="auth-register-input">
                                    <label htmlFor="grid-password">
                                        Địa chỉ
                                    </label>
                                    <input
                                        type="address"
                                        placeholder="Địa chỉ"
                                        id="grid-password"
                                    />
                                </div>
                                <div className="auth-register-input">
                                    <label htmlFor="grid-password">
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Số điện thoại"
                                        id="grid-password"
                                    />
                                </div>
                                <div className="auth-register-form-button">
                                    <button type="submit">Tạo tài khoản</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="auth-register-down">
                        <div className="auth-register-create-account">
                            <Link to="/login">
                                <small>Đã có tài khoản? Đăng nhập</small>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthRegister;
