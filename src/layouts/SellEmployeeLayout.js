import React, { useState } from "react";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import SiderSellEmployee from "../components/Sider/SiderSellEmployee";
import { useSelector } from "react-redux";

function SellEmployeeLayout({ children }) {
    const [openSider, setOpenSider] = useState(false);
    const selector = useSelector((state) => state.user);

    return (
        <>
            {selector.isAuthenticated && selector.role === 3 && (
                <>
                    <SiderSellEmployee
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

export default SellEmployeeLayout;
