import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const NavbarAdmin = ({ openSider }) => {
  const location = useLocation();

  return (
    <div className="navbar-admin">
      <div className="navbar-admin-container">
        <Icon
          icon="ant-design:menu-outlined"
          className="toggle-sider-mobile"
          onClick={openSider}
        />
        <h1>
          {location.pathname === "/admin/user" && "Quản lý người dùng"}
          {location.pathname === "/admin/product" && "Quản lý sản phẩm"}
          {location.pathname === "/admin/service" && "Quản lý dịch vụ"}
          {location.pathname === "/admin/blog" && "Quản lý Blog"}
          {location.pathname === "/admin/statistical" && "Thống kê"}
          {location.pathname === "/admin/order" && "Quản lý đơn hàng"}
        </h1>
        <Icon icon="bx:user-circle" />
      </div>
    </div>
  );
};
export default NavbarAdmin;
