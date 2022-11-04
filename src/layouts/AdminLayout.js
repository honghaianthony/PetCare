import React, { useState } from "react";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import Sider from "../components/Sider";

function AdminLayout({ children }) {
  const [openSider, setOpenSider] = useState(false);

  return (
    <>
      <Sider
        toggleSider={openSider}
        setToggleSider={() => setOpenSider(false)}
      />
      <div>
        <NavbarAdmin
          toggleSider={openSider}
          openSider={() => setOpenSider(true)}
        />
        {children}
      </div>
    </>
  );
}

export default AdminLayout;
