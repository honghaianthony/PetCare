import React, { useState } from "react";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import SiderCashier from "../components/Sider/SiderCashier";
import { useSelector } from "react-redux";

function CashierEmployeeLayout({ children }) {
    const [openSider, setOpenSider] = useState(false);
    const selector = useSelector((state) => state.user);

    return (
        <>
            {selector.isAuthenticated && selector.role === 5 && (
                <>
                    <SiderCashier
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

export default CashierEmployeeLayout;
