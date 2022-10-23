import React from "react";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import Sider from "../components/Sider";

function AdminLayout({ children }) {
  return (
    <>
      <Sider />
      <div>
        <NavbarAdmin />
        {children}
      </div>
    </>
  );
}

export default AdminLayout;
