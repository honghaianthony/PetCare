import React, { useState } from "react";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import SiderShipper from "../components/Sider/SiderShipper";
import { useSelector } from "react-redux";

function ShipperLayout({ children }) {
    const [openSider, setOpenSider] = useState(false);
    const selector = useSelector((state) => state.user);

    return (
        <>
            {selector.isAuthenticated && selector.role === 4 && (
                <>
                    <SiderShipper
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

export default ShipperLayout;
