import React from "react";
import "./HomeCommunity.css";

import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HomeCommunity() {
    return (
        <section className="home-community-container">
            <div className="home-community-container-detail">
                <div className="home-community-title">
                    <h2>THAM GIA CỘNG ĐỒNG KHÁCH HÀNG</h2>
                    <h5>Những đánh giá của khách hàng đối với PetCare</h5>
                </div>
                <div className="home-community-comment-container">
                    <div className="home-community-comment-slider">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={10}
                            slidesPerView={4}
                            navigation
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log("slide change")}
                            breakpoints={{
                                1: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1280: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="home-community-slide-space">
                                    <a
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="home-community-slide-box">
                                            <div className="home-community-slide-info">
                                                <div className="home-community-slide-avatar">
                                                    <div className="home-community-slide-round">
                                                        <img
                                                            src="/assets/images/home/hai_ava.jpg"
                                                            alt="Review Avatar"
                                                        />
                                                    </div>
                                                    <div className="home-community-slide-name">
                                                        <p class="home-community-slide-name-detail">
                                                            Dang Ngo Hong Hai
                                                        </p>
                                                        <p class="home-community-slide-name-detail-link">
                                                            @anthony.haidang
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="home-community-content">
                                                Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home-community-slide-space ">
                                    <a
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="home-community-slide-box">
                                            <div className="home-community-slide-info">
                                                <div className="home-community-slide-avatar">
                                                    <div className="home-community-slide-round">
                                                        <img
                                                            src="/assets/images/home/hai_ava.jpg"
                                                            alt="Review Avatar"
                                                        />
                                                    </div>
                                                    <div className="home-community-slide-name">
                                                        <p class="home-community-slide-name-detail">
                                                            Dang Ngo Hong Hai
                                                        </p>
                                                        <p class="home-community-slide-name-detail-link">
                                                            @anthony.haidang
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="home-community-content">
                                                Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây. Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home-community-slide-space ">
                                    <a
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="home-community-slide-box">
                                            <div className="home-community-slide-info">
                                                <div className="home-community-slide-avatar">
                                                    <div className="home-community-slide-round">
                                                        <img
                                                            src="/assets/images/home/hai_ava.jpg"
                                                            alt="Review Avatar"
                                                        />
                                                    </div>
                                                    <div className="home-community-slide-name">
                                                        <p class="home-community-slide-name-detail">
                                                            Dang Ngo Hong Hai
                                                        </p>
                                                        <p class="home-community-slide-name-detail-link">
                                                            @anthony.haidang
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="home-community-content">
                                                Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây. Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây. Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây. Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home-community-slide-space">
                                    <a
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="home-community-slide-box">
                                            <div className="home-community-slide-info">
                                                <div className="home-community-slide-avatar">
                                                    <div className="home-community-slide-round">
                                                        <img
                                                            src="/assets/images/home/hai_ava.jpg"
                                                            alt="Review Avatar"
                                                        />
                                                    </div>
                                                    <div className="home-community-slide-name">
                                                        <p class="home-community-slide-name-detail">
                                                            Dang Ngo Hong Hai
                                                        </p>
                                                        <p class="home-community-slide-name-detail-link">
                                                            @anthony.haidang
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="home-community-content">
                                                Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây. Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home-community-slide-space">
                                    <a
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="home-community-slide-box">
                                            <div className="home-community-slide-info">
                                                <div className="home-community-slide-avatar">
                                                    <div className="home-community-slide-round">
                                                        <img
                                                            src="/assets/images/home/hai_ava.jpg"
                                                            alt="Review Avatar"
                                                        />
                                                    </div>
                                                    <div className="home-community-slide-name">
                                                        <p class="home-community-slide-name-detail">
                                                            Dang Ngo Hong Hai
                                                        </p>
                                                        <p class="home-community-slide-name-detail-link">
                                                            @anthony.haidang
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="home-community-content">
                                                Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home-community-slide-space">
                                    <a
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="home-community-slide-box">
                                            <div className="home-community-slide-info">
                                                <div className="home-community-slide-avatar">
                                                    <div className="home-community-slide-round">
                                                        <img
                                                            src="/assets/images/home/hai_ava.jpg"
                                                            alt="Review Avatar"
                                                        />
                                                    </div>
                                                    <div className="home-community-slide-name">
                                                        <p class="home-community-slide-name-detail">
                                                            Dang Ngo Hong Hai
                                                        </p>
                                                        <p class="home-community-slide-name-detail-link">
                                                            @anthony.haidang
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="home-community-content">
                                                Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây. Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home-community-slide-space">
                                    <a
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="home-community-slide-box">
                                            <div className="home-community-slide-info">
                                                <div className="home-community-slide-avatar">
                                                    <div className="home-community-slide-round">
                                                        <img
                                                            src="/assets/images/home/hai_ava.jpg"
                                                            alt="Review Avatar"
                                                        />
                                                    </div>
                                                    <div className="home-community-slide-name">
                                                        <p class="home-community-slide-name-detail">
                                                            Dang Ngo Hong Hai
                                                        </p>
                                                        <p class="home-community-slide-name-detail-link">
                                                            @anthony.haidang
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="home-community-content">
                                                Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây. Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây. Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây. Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home-community-slide-space">
                                    <a
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="home-community-slide-box">
                                            <div className="home-community-slide-info">
                                                <div className="home-community-slide-avatar">
                                                    <div className="home-community-slide-round">
                                                        <img
                                                            src="/assets/images/home/hai_ava.jpg"
                                                            alt="Review Avatar"
                                                        />
                                                    </div>
                                                    <div className="home-community-slide-name">
                                                        <p class="home-community-slide-name-detail">
                                                            Dang Ngo Hong Hai
                                                        </p>
                                                        <p class="home-community-slide-name-detail-link">
                                                            @anthony.haidang
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="home-community-content">
                                                Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây. Rất hài lòng khi đến với
                                                PetCare, ở đây mình được tận
                                                thấy quy trình chăm sóc thú cưng
                                                ở đây.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeCommunity;
