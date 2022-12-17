import React, { useState } from "react";
import "./GalleryMain.css";
import ReactPlayer from "react-player";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const galleryImages = [
    "/assets/images/home/cat-7.png",
    "/assets/images/home/dog-2.png",
    "/assets/images/home/cat-3.png",
    "/assets/images/home/dog-4.png",
    "/assets/images/home/cat-5.png",
    "/assets/images/home/dog-6.png",
];

function GalleryMain() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="gallery-main-container">
            <div className="gallery-main-container-first">
                <div className="gallery-main-up">
                    <div className="gallery-main-up-left">
                        <h3>Video giới thiệu về PetCare</h3>
                        <p>
                            PetCare là một dịch vụ chuyên về thú cưng. Mọi khó
                            khăn của bạn đối với thú cưng sẽ đáp ứng một cách
                            đầy đủ tại PetCare. Bạn muốn tìm hiểu nhiều hơn? Hãy
                            đến với video ngay sau đây
                        </p>
                    </div>
                    <div className="gallery-main-up-right">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=8pYMtx1iRDA"
                            className="react-player"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
                <div className="gallery-main-down">
                    <div className="gallery-main-down-title">
                        <h3>Hình ảnh của thú cưng có ở PetCare</h3>
                        <p>
                            Khoảng khắc được lưu lại khi được chăm sóc tại
                            PetCare
                        </p>
                    </div>
                    <div
                        className="gallery-main-down-content"
                        onClick={() => setIsOpen(true)}
                    >
                        <img
                            src="/assets/images/home/gal-1.png"
                            alt="Gallery"
                        />
                        <img
                            src="/assets/images/home/gal-2.png"
                            alt="Gallery"
                        />
                        <img
                            src="/assets/images/home/gal-3.png"
                            alt="Gallery"
                        />
                        <img
                            src="/assets/images/home/gal-4.png"
                            alt="Gallery"
                        />
                        <img
                            src="/assets/images/home/gal-5.png"
                            alt="Gallery"
                        />
                        <img
                            src="/assets/images/home/gal-6.png"
                            alt="Gallery"
                        />
                        {isOpen && (
                            <Lightbox
                                mainSrc={galleryImages[photoIndex]}
                                onImageLoad={() => {
                                    window.dispatchEvent(new Event("resize"));
                                }}
                                onCloseRequest={() => setIsOpen(null)}
                                nextSrc={
                                    galleryImages[
                                        (photoIndex + 1) % galleryImages.length
                                    ]
                                }
                                prevSrc={
                                    galleryImages[
                                        (photoIndex +
                                            galleryImages.length -
                                            1) %
                                            galleryImages.length
                                    ]
                                }
                                onMovePrevRequest={() =>
                                    setPhotoIndex(
                                        (photoIndex +
                                            galleryImages.length -
                                            1) %
                                            galleryImages.length
                                    )
                                }
                                onMoveNextRequest={() =>
                                    setPhotoIndex(
                                        (photoIndex + 1) % galleryImages.length
                                    )
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="gallery-main-container-second">
                <div className="gallery-main-up">
                    <div className="gallery-main-up-top">
                        <div className="gallery-main-up-top-title-second">
                            <h3>
                                Video giới thiệu về <span>PetCare</span>
                            </h3>
                            <hr />
                        </div>
                        <p>
                            PetCare là một dịch vụ chuyên về thú cưng. Mọi khó
                            khăn của bạn đối với thú cưng sẽ đáp ứng một cách
                            đầy đủ tại PetCare. Bạn muốn tìm hiểu nhiều hơn? Hãy
                            đến với video ngay sau đây
                        </p>
                    </div>
                    <div className="gallery-main-up-down">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=8pYMtx1iRDA"
                            className="react-player"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
                <div className="gallery-main-down">
                    <div className="gallery-main-down-title-second">
                        <h4>
                            Hình ảnh thú cưng <span>PetCare</span>
                        </h4>
                        <hr />
                        <p>
                            Khoảng khắc được lưu lại khi được chăm sóc tại
                            PetCare
                        </p>
                    </div>
                    <div className="home-community-comment-container">
                        <div
                            className="home-community-comment-slider"
                            onClick={() => setIsOpen(true)}
                        >
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Scrollbar, A11y]}
                                spaceBetween={10}
                                slidesPerView={4}
                                navigation
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() =>
                                    console.log("slide change")
                                }
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
                                        <img
                                            src="/assets/images/home/gal-1.png"
                                            alt="Gallery"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="home-community-slide-space">
                                        <img
                                            src="/assets/images/home/gal-2.png"
                                            alt="Gallery"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="home-community-slide-space">
                                        <img
                                            src="/assets/images/home/gal-3.png"
                                            alt="Gallery"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="home-community-slide-space">
                                        <img
                                            src="/assets/images/home/gal-4.png"
                                            alt="Gallery"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="home-community-slide-space">
                                        <img
                                            src="/assets/images/home/gal-5.png"
                                            alt="Gallery"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="home-community-slide-space">
                                        <img
                                            src="/assets/images/home/gal-6.png"
                                            alt="Gallery"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            {isOpen && (
                                <Lightbox
                                    mainSrc={galleryImages[photoIndex]}
                                    onImageLoad={() => {
                                        window.dispatchEvent(
                                            new Event("resize")
                                        );
                                    }}
                                    onCloseRequest={() => setIsOpen(null)}
                                    nextSrc={
                                        galleryImages[
                                            (photoIndex + 1) %
                                                galleryImages.length
                                        ]
                                    }
                                    prevSrc={
                                        galleryImages[
                                            (photoIndex +
                                                galleryImages.length -
                                                1) %
                                                galleryImages.length
                                        ]
                                    }
                                    onMovePrevRequest={() =>
                                        setPhotoIndex(
                                            (photoIndex +
                                                galleryImages.length -
                                                1) %
                                                galleryImages.length
                                        )
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex(
                                            (photoIndex + 1) %
                                                galleryImages.length
                                        )
                                    }
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GalleryMain;
