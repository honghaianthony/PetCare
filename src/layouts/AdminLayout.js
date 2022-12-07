import React, { useState } from "react";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import Sider from "../components/Sider";
import { useSelector } from "react-redux";

function AdminLayout({ children }) {
    const [openSider, setOpenSider] = useState(false);
    const selector = useSelector((state) => state.user);

    return (
        <>
            {selector.isAuthenticated && selector.role === 2 && (
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
            )}
        </>
    );
}

export default AdminLayout;
