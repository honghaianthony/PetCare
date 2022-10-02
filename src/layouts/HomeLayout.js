import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";

function HomeLayout({ children }) {
    return (
        <>
            <HomeNavbar />
            {children}
        </>
    );
}

export default HomeLayout;
