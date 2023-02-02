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
                <div className="home-banner-main-second">
                    <div className="home-banner-left">
                        <img
                            src="/assets/images/home/dogHat.png"
                            alt="PetCare banner"
                        />
                    </div>
                    <div className="home-banner-center">
                        <div className="home-banner-center-detail">
                            <h1 className="home-banner-center-title">
                                Chăm sóc thú cưng là sứ mệnh của chúng tôi
                            </h1>
                            <p className="home-banner-center-content">
                                PetCare luôn đồng hành cùng bạn
                            </p>
                            <Link to="/">Bắt đầu</Link>
                        </div>
                    </div>
                    <div className="home-banner-right">
                        <img
                            src="/assets/images/home/catBallNew.png"
                            alt="PetCare banner"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;
