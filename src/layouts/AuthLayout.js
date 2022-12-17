import React from "react";
import AuthNavbar from "../components/Navbar/AuthNavbar";
import AuthFooter from "../components/Footer/AuthFooter";
import "../styles/auth.css";

function HomeLayout({ children }) {
    return (
        <>
            <main>
                <section className="auth-container">
                    <AuthNavbar />
                    <div className="auth-container-detail">
                        <img
                            src="/assets/images/auth/Paw.png"
                            alt="Paw"
                            className="auth-paw-1"
                        />
                        <img
                            src="/assets/images/auth/Paw-1.png"
                            alt="Paw"
                            className="auth-paw-2"
                        />
                        <img
                            src="/assets/images/auth/Paw-2.png"
                            alt="Paw"
                            className="auth-paw-3"
                        />
                        {children}
                        <img
                            src="/assets/images/auth/dog.png"
                            alt="Dog"
                            className="auth-dog-bg"
                        />
                    </div>
                </section>
                <AuthFooter />
            </main>
        </>
    );
}

export default HomeLayout;
