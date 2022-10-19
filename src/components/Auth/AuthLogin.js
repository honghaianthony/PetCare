import React from "react";
import "./AuthLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../apis/authApi";
import { toast } from "react-toastify";
import { login } from "../../redux/user.slice.js";

function AuthLogin() {
    const select = useSelector((x) => x.user.isAuthenticated);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const body = {
            userName: e.target.userName.value,
            password: e.target.password.value,
        };
        const res = await postLogin(body);
        console.log(res);
        if (res.success) {
            toast.success("Đăng nhập thành công !");
            const token = res.token;
            dispatch(login(token));
        } else {
            toast.error("Đăng nhập thất bại !");
        }
    };

    return (
        <>
            {select ? (
                navigate("/")
            ) : (
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
                                    <form
                                        method="POST"
                                        className="login-form"
                                        onSubmit={async (e) => {
                                            await handleLogin(e);
                                        }}
                                    >
                                        <div className="auth-login-input">
                                            <label htmlFor="grid-password">
                                                Tên người dùng
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Tên người dùng"
                                                id="grid-username"
                                                name="userName"
                                                required
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
                                                name="password"
                                                required
                                            />
                                        </div>
                                        <div className="auth-login-form-button">
                                            <button type="submit">
                                                Đăng nhập
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="auth-login-down">
                                <div className="auth-login-forgot-password">
                                    <a
                                        href="/"
                                        onClick={(e) => e.preventDefault()}
                                    >
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
            )}
        </>
    );
}

export default AuthLogin;
