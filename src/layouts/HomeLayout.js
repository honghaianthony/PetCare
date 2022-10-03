import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import Footer from "../components/Footer";

function HomeLayout({ children }) {
    return (
        <>
            <HomeNavbar />
            {children}
            <Footer />
        </>
    );
}

export default HomeLayout;
