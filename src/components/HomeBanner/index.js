import React from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.css";

function HomeBanner() {
    return (
        <section className="home-banner-container">
            <div className="home-banner-container-detail">
                <div className="home-banner-main">
                    <div className="home-banner-left">
                        <div className="home-banner-left-detail">
                            <h1 className="home-banner-left-title">
                                Hãy chăm sóc cho thú cưng của bạn!
                            </h1>
                            <p className="home-banner-left-content">
                                Vì một thế giới thú cưng khỏe mạnh
                            </p>
                        </div>
                        <div className="home-banner-left-button">
                            <Link to="/">Bắt đầu</Link>
                        </div>
                    </div>
                    <div className="home-banner-right">
                        <img
                            src="/assets/images/home/background-right.png"
                            alt="PetCare banner"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;
