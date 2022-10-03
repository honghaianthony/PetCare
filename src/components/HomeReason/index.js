import React from "react";
import { Icon } from "@iconify/react";
import "./HomeReason.css";

function HomeReason() {
    return (
        <section className="home-reason-container">
            <div className="home-reason-container-detail">
                <h2 className="home-reason-title">
                    Tại sao bạn nên chọn chúng tôi?
                </h2>
                <div className="home-reason-main">
                    <div className="home-reason-left">
                        <img src="/assets/images/home/why.jpg" alt="Reason" />
                    </div>
                    <div className="home-reason-right">
                        <div className="home-reason-right-space">
                            <div className="home-reason-right-detail">
                                <Icon
                                    icon="ant-design:customer-service-filled"
                                    className="home-reason-icon-reason"
                                />
                                <div className="home-reason-right-content">
                                    <h3 className="home-reason-right-title">
                                        Dịch vụ chất lượng
                                    </h3>
                                    <p>
                                        Ở PetCare, chúng tôi luôn hướng đến sự
                                        hài lòng của khách hàng cho nên mọi dịch
                                        vụ ở đây đều phải được chỉnh chu
                                    </p>
                                </div>
                            </div>
                            <div className="home-reason-right-detail">
                                <Icon
                                    icon="bi:file-earmark-post"
                                    className="home-reason-icon-reason"
                                />
                                <div className="home-reason-right-content">
                                    <h3 className="home-reason-right-title">
                                        Bài viết được cập nhật liên tục
                                    </h3>
                                    <p>
                                        Những bài viết về chăm sóc thú cưng sẽ
                                        liên tục cập nhật để khách hàng có những
                                        kinh nghiệm khi chăm sóc thú cưng
                                    </p>
                                </div>
                            </div>
                            <div className="home-reason-right-detail">
                                <Icon
                                    icon="entypo:price-tag"
                                    className="home-reason-icon-reason"
                                />
                                <div className="home-reason-right-content">
                                    <h3 className="home-reason-right-title">
                                        Giá cả phải chăng
                                    </h3>
                                    <p>
                                        Thức ăn và dịch vụ ở PetCare cam kết giá
                                        cả hợp lý để khách hàng có thể lựa chọn
                                        chúng tôi
                                    </p>
                                </div>
                            </div>
                            <div className="home-reason-right-detail">
                                <Icon
                                    icon="uiw:global"
                                    className="home-reason-icon-reason"
                                />
                                <div className="home-reason-right-content">
                                    <h3 className="home-reason-right-title">
                                        Môi trường xanh - sạch - đẹp
                                    </h3>
                                    <p>
                                        Môi trường chăm sóc, huấn luyện ở
                                        PetCare đều được kiểm định chặt chẽ với
                                        sứ mệnh tạo ra một không khí trong lành
                                        cho thú cưng
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeReason;
