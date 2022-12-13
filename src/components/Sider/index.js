import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import "./Sider.css";
function Sider({ toggleSider, setToggleSider }) {
    const location = useLocation();
    return (
        <>
            <div
                className={`sider-overlayer ${toggleSider ? "" : "hidden"}`}
                onClick={setToggleSider}
            ></div>
            <div className={`sider-container ${toggleSider ? "" : "hidden"}`}>
                <div className="sider-header">
                    <div className="sider-logo">
                        <Link to="/">
                            <img
                                src="/assets/images/logo_new.png"
                                alt="logo"
                                className="navbar-logo-main"
                            />
                        </Link>
                    </div>
                    <Icon
                        icon="akar-icons:circle-chevron-left-fill"
                        className="toggle-hidden-sider"
                        onClick={setToggleSider}
                    />
                </div>
                <ul className="sider-body">
                    <li
                        className={
                            location.pathname === "/admin/user"
                                ? "active"
                                : undefined
                        }
                    >
                        <Link to="/admin/user">
                            <Icon icon="carbon:user-avatar-filled-alt" />
                            <span>Người dùng</span>
                        </Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/admin/product"
                                ? "active"
                                : undefined
                        }
                    >
                        <Link to="/admin/product">
                            <Icon icon="bx:cart-alt" />
                            <span>Sản phẩm</span>
                        </Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/admin/order"
                                ? "active"
                                : undefined
                        }
                    >
                        <Link to="/admin/order">
                            <Icon icon="material-symbols:pending-actions" />
                            <span>Đơn hàng</span>
                        </Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/admin/service"
                                ? "active"
                                : undefined
                        }
                    >
                        <Link to="/admin/service">
                            <Icon icon="ep:service" />
                            <span>Dịch vụ</span>
                        </Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/admin/blog"
                                ? "active"
                                : undefined
                        }
                    >
                        <Link to="/admin/blog">
                            <Icon icon="clarity:note-edit-solid" />
                            <span>Blog</span>
                        </Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/admin/statistical"
                                ? "active"
                                : undefined
                        }
                    >
                        <Link to="/admin/statistical">
                            <Icon icon="bxs:pie-chart-alt-2" />
                            <span>Thống kê</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Sider;
