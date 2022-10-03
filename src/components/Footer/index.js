import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="footer-container">
            <div className="footer-container-detail">
                <div className="footer-container-items">
                    <div className="footer-logo-container">
                        <div className="footer-logo">Logo</div>
                        <div className="footer-slogan">
                            <span>
                                Sứ mệnh của chúng tôi là giúp thú cưng khỏe mạnh
                            </span>
                        </div>
                        <div className="footer-social">
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon
                                    icon="akar-icons:facebook-fill"
                                    className="footer-social-icon"
                                />
                            </a>
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon
                                    icon="akar-icons:instagram-fill"
                                    className="footer-social-icon"
                                />
                            </a>
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon
                                    icon="akar-icons:twitter-fill"
                                    className="footer-social-icon"
                                />
                            </a>
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon
                                    icon="akar-icons:youtube-fill"
                                    className="footer-social-icon"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="footer-link">
                        <h4>Liên kết</h4>
                        <div class="footer-link-detail">
                            <Link to="/">Trang chủ</Link>
                            <Link to="/">Cơ cấu tổ chức</Link>
                            <Link to="/">Tin tức</Link>
                            <Link to="/">Về tôi</Link>
                        </div>
                    </div>
                    <div className="footer-working-hour">
                        <h4>Giờ làm việc</h4>
                        <div className="footer-working-hour-banner">
                            <div className="footer-working-time">
                                <span>T2 - T6</span>
                                <span>7h30 - 21h00</span>
                            </div>
                            <div className="footer-working-time">
                                <span>T7</span>
                                <span>7h30 - 20h00</span>
                            </div>
                            <div className="footer-working-time">
                                <span>CN</span>
                                <span>Đóng cửa</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-communication">
                        <h4>Thông tin liên lạc</h4>
                        <div className="footer-communication-address">
                            <Icon
                                icon="carbon:location-filled"
                                className="footer-communication-icon"
                            />
                            <p>
                                Địa chỉ: Khu phố 6, phường Linh Trung, Tp. Thủ
                                Đức, Tp.HCM
                            </p>
                        </div>
                        <div className="footer-communication-phone">
                            <Icon
                                icon="ant-design:phone-filled"
                                className="footer-communication-icon"
                            />
                            <p>Số điện thoại: 0123456789</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">
                <div className="footer-copyright-main">
                    <span>Copyright belongs to PetCare</span>
                </div>
                <div className="footer-copyright-sub">
                    <p>&#169; {new Date().getFullYear()} All rights reserved</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
