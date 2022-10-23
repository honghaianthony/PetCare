import React from "react";
import "./AuthLogin.css";
import { Link } from "react-router-dom";

function AuthLogin() {
    return (
        <div className="auth-container">
            <div className="auth-container-detail">
                <div className="auth-login-container">
                    <div className="auth-login-up">
                        <div className="auth-login-another">
                            <div className="auth-login-another-text">
                                <h6>Đăng nhập bằng</h6>
                            </div>
                            <div className="auth-login-another-button">
                                <button type="button">
                                    <img
                                        alt="Google login"
                                        src="/assets/images/google.svg"
                                        width={50}
                                        height={20}
                                    />
                                    Google
                                </button>
                            </div>
                            <hr />
                        </div>
                        <div className="auth-login-input-container">
                            <div className="auth-login-input-title">
                                <span>Hoặc</span>
                            </div>
                            <form>
                                <div className="auth-login-input">
                                    <label htmlFor="grid-password">
                                        Tên người dùng
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Tên người dùng"
                                        id="grid-password"
                                    />
                                </div>
                                <div className="auth-login-input">
                                    <label htmlFor="grid-password">
                                        Mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        id="grid-password"
                                    />
                                </div>
                                <div className="auth-login-form-button">
                                    <button type="submit">Đăng nhập</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="auth-login-down">
                        <div className="auth-login-forgot-password">
                            <a href="/" onClick={(e) => e.preventDefault()}>
                                <small>Quên mật khẩu?</small>
                            </a>
                        </div>
                        <div className="auth-login-create-account">
                            <Link to="/register">
                                <small>Tạo tài khoản mới</small>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthLogin;
