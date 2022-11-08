import React, { useEffect } from "react";
import "./AuthLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin, postGoogleLogin } from "../../apis/authApi";
import { toast } from "react-toastify";
import { login } from "../../redux/user.slice.js";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

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

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: "email",
            });
        }

        gapi.load("client:auth2", start);
    }, []);

    const handleGoogleLogin = async (googleLogin) => {
        const res = await postGoogleLogin(googleLogin);
        if (res.success) {
            toast.success("Đăng nhập thành công !");
            dispatch(login(res.token));
        } else {
            toast.error("Đăng nhập thất bại !");
        }
    };

    return (
        <>
            {select ? (
                navigate("/")
            ) : (
                <div className="auth-container-login">
                    <div className="auth-container-detail-login">
                        <div className="auth-login-container">
                            <div className="auth-login-up">
                                <div className="auth-login-another">
                                    <div className="auth-login-another-text">
                                        <h6>Đăng nhập bằng</h6>
                                    </div>
                                    <div className="auth-login-another-button">
                                        <GoogleLogin
                                            clientId={
                                                process.env
                                                    .REACT_APP_GOOGLE_CLIENT_ID
                                            }
                                            buttonText="Đăng nhập với Google"
                                            onSuccess={handleGoogleLogin}
                                            onFailure={handleGoogleLogin}
                                            cookiePolicy={"single_host_origin"}
                                        />
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
                    <div className="auth-container-detail-second">
                        <div className="auth-login-container">
                            <div className="auth-login-title">
                                <p>Đăng nhập</p>
                            </div>
                            <hr />
                            <div className="auth-login-content">
                                <div className="auth-login-content-left">
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
                                    <div className="auth-login-down">
                                        <div className="auth-login-forgot-password">
                                            <a
                                                href="/"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
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
                                <div className="auth-login-content-right">
                                    <GoogleLogin
                                        clientId={
                                            process.env
                                                .REACT_APP_GOOGLE_CLIENT_ID
                                        }
                                        buttonText="Đăng nhập với Google"
                                        onSuccess={handleGoogleLogin}
                                        onFailure={handleGoogleLogin}
                                        cookiePolicy={"single_host_origin"}
                                    />
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
