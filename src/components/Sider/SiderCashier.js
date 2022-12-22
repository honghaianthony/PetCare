import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import "./Sider.css";
function SiderCashier({ toggleSider, setToggleSider }) {
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
                            location.pathname === "/cashier/product"
                                ? "active"
                                : undefined
                        }
                    >
                        <Link to="/cashier/product">
                            <Icon icon="bx:cart-alt" />
                            <span>Sản phẩm</span>
                        </Link>
                    </li>
                    <li
                        className={
                            location.pathname === "/cashier/order"
                                ? "active"
                                : undefined
                        }
                    >
                        <Link to="/cashier/order">
                            <Icon icon="material-symbols:pending-actions" />
                            <span>Đơn hàng</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default SiderCashier;
