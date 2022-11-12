import React from "react";
import "./AboutBanner.css";

function AboutBanner() {
    return (
        <section className="about-banner-container">
            <div className="about-banner-container-detail">
                <div className="about-banner-content-main">
                    <h2>Về chúng tôi</h2>
                    <div className="about-banner-content">
                        <p>
                            PetCare là một dịch vụ chuyên về chăm sóc, huấn
                            luyện, chích ngừa v.v... cho thú cưng được sự chứng
                            nhận của các tổ chức uy tín về động vật.
                        </p>
                        <p>
                            Bên cạnh đó chúng tôi còn cung cấp đến cho khách
                            hàng các sản phẩm dành riêng cho thú cưng của bạn.
                        </p>
                        <p>
                            Không chỉ vậy chúng tôi còn liên tục lên những bài
                            viết mới với mong muốn giúp khách hàng của PetCare
                            có những kỹ năng cần thiết khi chăm sóc cho thú
                            cưng.
                        </p>
                        <p>
                            Tại PetCare, đội ngũ nhân viên được training kỹ
                            càng, luôn ân cần, nhiệt tình giúp đỡ khách hàng khi
                            đến với PetCare. Chúng tôi ưu tiên sự hài lòng của
                            khách hàng lên hàng đầu
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-banner-container-detail-second">
                <div className="about-title-second">
                    <h4>Về chúng tôi</h4>
                    <hr />
                </div>
                <div className="about-content-second">
                    <div className="about-content-detail-second">
                        <p>
                            PetCare là một dịch vụ chuyên về chăm sóc, huấn
                            luyện, chích ngừa v.v... cho thú cưng được sự chứng
                            nhận của các tổ chức uy tín về động vật.
                        </p>
                        <img src="/assets/images/home/about1.png" alt="About" />
                    </div>
                    <div className="about-content-detail-second-middle">
                        <img src="/assets/images/home/about2.png" alt="About" />
                        <p>
                            Không chỉ vậy chúng tôi còn liên tục lên những bài
                            viết mới với mong muốn giúp khách hàng của PetCare
                            có những kỹ năng cần thiết khi chăm sóc cho thú
                            cưng.
                        </p>
                    </div>
                    <div className="about-content-detail-second">
                        <p>
                            Tại PetCare, đội ngũ nhân viên được training kỹ
                            càng, luôn ân cần, nhiệt tình giúp đỡ khách hàng khi
                            đến với PetCare. Chúng tôi ưu tiên sự hài lòng của
                            khách hàng lên hàng đầu.
                        </p>
                        <img src="/assets/images/home/about3.png" alt="About" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBanner;
