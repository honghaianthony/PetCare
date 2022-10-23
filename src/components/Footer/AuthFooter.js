import React from "react";
import "./AuthFooter.css";

function AuthFooter() {
    return (
        <>
            <footer className="auth-footer-container">
                <div className="auth-footer-copyright">
                    <hr />
                    <div className="auth-footer-copyright-main">
                        <div className="auth-footer-copyright-detail">
                            <div className="auth-footer-copyright-content">
                                Copyright © {new Date().getFullYear()} PetCare
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default AuthFooter;
