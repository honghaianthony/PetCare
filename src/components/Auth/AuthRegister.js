import React, { useState } from "react";
import "./AuthRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../apis/authApi";
import { toast } from "react-toastify";

function AuthRegister() {
    const navigate = useNavigate();

    const [error, setError] = useState({
        userName: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
    });
    const [input, setInput] = useState({
        userName: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChangeUserName = (e) => {
        if (!e.target.validity.valid) {
            e.target.className = "form-control invalid";
            if (e.currentTarget.value === "") {
                setError({
                    ...error,
                    userName: "Tên tài khoản không được để trống",
                });
            } else {
                setError({
                    ...error,
                    userName: "Tên tài khoản không hợp lệ hoặc đã tồn tại",
                });
            }
        } else {
            e.target.className = "form-control valid";
            setError({ ...error, userName: "" });
        }
        setInput({ ...input, userName: e.target.value });
    };
    const handleChangePassword = (e) => {
        const temp = { ...error };
        if (!e.target.validity.valid) {
            e.target.className = "form-control invalid";
            if (e.currentTarget.value === "") {
                temp.password = "Mật khẩu không được để trống";
            } else {
                temp.password =
                    "Mật khẩu quá yếu. Hãy thử lại với mật khẩu khác";
            }
        } else {
            e.target.className = "form-control valid";
            temp.password = "";
        }
        if (input.confirmPassword !== "") {
            if (e.target.value !== input.confirmPassword) {
                document.getElementById("confirmPassword").className =
                    "form-control invalid";
                temp.confirmPassword = "Mật khẩu không khớp";
            } else {
                document.getElementById("confirmPassword").className =
                    "form-control valid";
                temp.confirmPassword = "";
            }
        } else {
            document.getElementById("confirmPassword").className =
                "form-control";
            temp.confirmPassword = "";
        }
        setError({ ...temp });
        setInput({ ...input, password: e.target.value });
    };
    const handleChangeConfirmPassword = (e) => {
        const temp = { ...error };
        if (e.target.value !== "") {
            if (e.target.value !== input.password) {
                e.target.className = "form-control invalid";
                temp.confirmPassword = "Mật khẩu không khớp";
            } else {
                e.target.className = "form-control valid";
                temp.confirmPassword = "";
            }
        } else {
            e.target.className = "form-control";
            temp.confirmPassword = "";
        }

        setError({ ...temp });
        setInput({ ...input, confirmPassword: e.target.value });
    };
    const handleChangeEmail = (e) => {
        if (!e.target.validity.valid) {
            e.target.className = "form-control invalid";
            if (e.currentTarget.value === "") {
                setError({ ...error, email: "Email không được để trống" });
            } else {
                setError({ ...error, email: "Email không hợp lệ" });
            }
        } else {
            e.target.className = "form-control valid";
            setError({ ...error, email: "" });
        }
        setInput({ ...input, email: e.target.value });
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        if (
            error.userName === "" &&
            error.password === "" &&
            error.confirmPassword === "" &&
            error.email === ""
        ) {
            if (
                input.userName === "" ||
                input.password === "" ||
                input.confirmPassword === "" ||
                input.email === ""
            ) {
                toast.error("Vui lòng điền đầy đủ thông tin");
            }
            const body = {
                userName: input.userName,
                password: input.password,
                firstName: input.firstName,
                lastName: input.lastName,
                email: input.email,
                phone: input.phone,
                address: input.address,
            };
            const res = await register(body);
            if (res) {
                toast.success("Đăng ký thành công");
                navigate("/login");
            } else {
                toast.error("Đăng ký thất bại");
            }
        }
    };
    return (
        <>
            <div className="auth-container-register">
                <div className="auth-container-detail-register">
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
                                            Tên tài khoản
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Tên tài khoản"
                                            id="userName"
                                            value={input.userName}
                                            onChange={(e) =>
                                                handleChangeUserName(e)
                                            }
                                            required
                                        />{" "}
                                        <span>{error.userName}</span>
                                    </div>
                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Mật khẩu
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Mật khẩu"
                                            id="password"
                                            required
                                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                            value={input.password}
                                            onChange={(e) =>
                                                handleChangePassword(e)
                                            }
                                        />{" "}
                                        <span>{error.password}</span>
                                    </div>
                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Xác nhận mật khẩu
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Xác nhận mật khẩu"
                                            id="confirmPassword"
                                            required
                                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                            value={input.confirmPassword}
                                            onChange={(e) =>
                                                handleChangeConfirmPassword(e)
                                            }
                                        />{" "}
                                        <span>{error.confirmPassword}</span>
                                    </div>
                                    <div className="auth-register-input-name">
                                        <div className="auth-register-input">
                                            <label htmlFor="grid-password">
                                                Tên của bạn
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Tên"
                                                id="firstName"
                                                onChange={(e) =>
                                                    setInput({
                                                        ...input,
                                                        firstName:
                                                            e.target.value,
                                                    })
                                                }
                                            />{" "}
                                        </div>
                                        <div className="auth-register-input">
                                            <label htmlFor="grid-password">
                                                Họ
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Họ"
                                                id="lastName"
                                                onChange={(e) =>
                                                    setInput({
                                                        ...input,
                                                        lastName:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            required
                                            value={input.email}
                                            onChange={(e) =>
                                                handleChangeEmail(e)
                                            }
                                        />
                                        <span>{error.email}</span>
                                    </div>
                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Địa chỉ
                                        </label>
                                        <input
                                            type="address"
                                            placeholder="Địa chỉ"
                                            id="address"
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    address: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Số điện thoại
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Số điện thoại"
                                            id="phone"
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    phone: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="auth-register-form-button">
                                        <button
                                            type="submit"
                                            onClick={handleRegister}
                                        >
                                            Tạo tài khoản
                                        </button>
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
                <div className="auth-container-detail-register-second">
                    <div className="auth-register-container">
                        <div className="auth-register-title">
                            <p>Đăng ký</p>
                        </div>
                        <hr />

                        <form>
                            <div className="auth-register-content">
                                <div className="auth-register-content-left">
                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Tên tài khoản
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Tên tài khoản"
                                            id="userName"
                                            value={input.userName}
                                            onChange={(e) =>
                                                handleChangeUserName(e)
                                            }
                                            required
                                        />{" "}
                                        <span>{error.userName}</span>
                                    </div>
                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Mật khẩu
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Mật khẩu"
                                            id="password"
                                            required
                                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                            value={input.password}
                                            onChange={(e) =>
                                                handleChangePassword(e)
                                            }
                                        />{" "}
                                        <span>{error.password}</span>
                                    </div>
                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Xác nhận mật khẩu
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Xác nhận mật khẩu"
                                            id="confirmPassword"
                                            required
                                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                            value={input.confirmPassword}
                                            onChange={(e) =>
                                                handleChangeConfirmPassword(e)
                                            }
                                        />{" "}
                                        <span>{error.confirmPassword}</span>
                                    </div>
                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            required
                                            value={input.email}
                                            onChange={(e) =>
                                                handleChangeEmail(e)
                                            }
                                        />
                                        <span>{error.email}</span>
                                    </div>
                                </div>
                                <div className="auth-register-content-right">
                                    <div className="auth-register-input-name">
                                        <div className="auth-register-input">
                                            <label htmlFor="grid-password">
                                                Tên của bạn
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Tên"
                                                id="firstName"
                                                onChange={(e) =>
                                                    setInput({
                                                        ...input,
                                                        firstName:
                                                            e.target.value,
                                                    })
                                                }
                                            />{" "}
                                        </div>

                                        <div className="auth-register-input">
                                            <label htmlFor="grid-password">
                                                Họ
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Họ"
                                                id="lastName"
                                                onChange={(e) =>
                                                    setInput({
                                                        ...input,
                                                        lastName:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Địa chỉ
                                        </label>
                                        <input
                                            type="address"
                                            placeholder="Địa chỉ"
                                            id="address"
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    address: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="auth-register-input">
                                        <label htmlFor="grid-password">
                                            Số điện thoại
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Số điện thoại"
                                            id="phone"
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    phone: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="auth-register-form-button">
                                <button type="submit" onClick={handleRegister}>
                                    Tạo tài khoản
                                </button>
                            </div>
                        </form>

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
        </>
    );
}

export default AuthRegister;
