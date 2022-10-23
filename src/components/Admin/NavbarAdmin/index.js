import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const NavbarAdmin = () => {
  const location = useLocation();

  return (
    <div className="navbar-admin">
      <Icon icon="ant-design:menu-outlined" className="toggle-sider-mobile" />
      <h1>
        {location.pathname === "/admin/user" && "Quản lý người dùng"}
        {location.pathname === "/admin/product" && "Quản lý sản phẩm"}
        {location.pathname === "/admin/service" && "Quản lý dịch vụ"}
        {location.pathname === "/admin/blog" && "Quản lý Blog"}
        {location.pathname === "/admin/statistical" && "Thống kê"}
      </h1>
      <Icon icon="bx:user-circle" />
    </div>
  );
};
export default NavbarAdmin;
