import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sider.css";
function Sider() {
  const location = useLocation();
  const [toggleSider, setToggleSider] = useState(true);
  return (
    <>
      <div
        className={
          toggleSider
            ? "sider-container mobile-hidden"
            : "sider-container mobile-visible"
        }
      >
        <div className="sider-header">
          <img
            className="sider-logo"
            src="https://play-lh.googleusercontent.com/i5TNQBpmzRzHDJcQnEJBROlbJ8BMeilPx06FXMwO7Z2QXHNQiyHv061FRqxFtF4GEn8"
            alt=""
          />
          <h2>Petcare</h2>
          <Icon
            icon="akar-icons:circle-chevron-left-fill"
            className="toggle-hidden-sider-mobile"
            onClick={() => setToggleSider(true)}
          />
        </div>
        <ul className="sider-body">
          <li
            className={
              location.pathname === "/admin/user" ? "active" : undefined
            }
          >
            <Link to="/admin/user">
              <Icon icon="carbon:user-avatar-filled-alt" />
              <span>Người dùng</span>
            </Link>
          </li>
          <li
            className={
              location.pathname === "/admin/product" ? "active" : undefined
            }
          >
            <Link to="/admin/product">
              <Icon icon="bx:cart-alt" />
              <span>Sản phẩm</span>
            </Link>
          </li>
          <li
            className={
              location.pathname === "/admin/service" ? "active" : undefined
            }
          >
            <Link to="/admin/service">
              <Icon icon="ep:service" />
              <span>Dịch vụ</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/blog">
              <Icon icon="clarity:note-edit-solid" />
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/statistical">
              <Icon icon="bxs:pie-chart-alt-2" />
              <span>Thống kê</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={
          !toggleSider
            ? "sider-overlayer-mobile"
            : "sider-overlayer-mobile hidden"
        }
      ></div>
      <Icon
        icon="ant-design:menu-outlined"
        className="toggle-sider-mobile-v2"
        onClick={() => setToggleSider(false)}
      />
    </>
  );
}
export default Sider;
