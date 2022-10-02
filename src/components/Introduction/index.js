import React from "react";
import "./Introduction.css";

function Introduction() {
    var imageIndex = 0;
    ImageSlider();

    function ImageSlider() {
        var introInfo = document.getElementsByClassName("intro-active");
        var imageEvent = document.getElementsByClassName("image-active");
        var contentActivity = document.getElementsByClassName("content-active");

        var i;

        for (i = 0; i < imageEvent.length; i++) {
            imageEvent[i].style.display = "none";
            contentActivity[i].style.display = "none";
        }

        imageIndex++;
        if (imageIndex > imageEvent.length) {
            imageIndex = 1;
        }

        for (i = 0; i < introInfo.length; i++) {
            introInfo[i].className = introInfo[i].className.replace(
                " active",
                ""
            );
        }

        for (i = 0; i < imageEvent.length; i++) {
            imageEvent[imageIndex - 1].style.display = "block";
            contentActivity[imageIndex - 1].style.display = "block";
            break;
        }

        for (i = 0; i < introInfo.length; i++) {
            introInfo[imageIndex - 1].className += " active";
            break;
        }

        setTimeout(ImageSlider, 2000);
    }
    return (
        <section className="introduction-container">
            <div className="introduction-container-detail">
                <div className="introduction-main">
                    <div className="introduction-left">
                        <h2>Giới thiệu về PetCare</h2>
                        <p>
                            PetCare là một dịch vụ chuyên về thú cưng. Mọi khó
                            khăn của bạn đối với thú cưng sẽ đáp ứng một cách
                            đầy đủ tại PetCare
                        </p>
                        <div className="introduction-left-detail intro-active fade">
                            <h4>Sản phẩm đa dạng</h4>
                            <p className="content-active">
                                Thức ăn dành cho thú cưng luôn có ở chúng tôi
                            </p>
                        </div>
                        <div className="introduction-left-detail intro-active fade">
                            <h4>Nhân viên nhiệt tình</h4>
                            <p className="content-active">
                                Nhân viên tại PetCare luôn đồng hành cùng khách
                                hàng
                            </p>
                        </div>
                        <div className="introduction-left-detail intro-active fade">
                            <h4>Bài viết đầy đủ</h4>
                            <p className="content-active">
                                Bài viết về PetCare luôn được cập nhật liên tục
                            </p>
                        </div>
                    </div>
                    <div className="introduction-right">
                        <img
                            src="/assets/images/home/Vector.png"
                            alt="Vector"
                        />
                        <div className="introduction-right-image">
                            <div className="image-active">
                                <img
                                    src="/assets/images/home/petfood.webp"
                                    alt="petfood"
                                />
                            </div>
                            <div className="image-active">
                                <img
                                    src="/assets/images/home/petfood.webp"
                                    alt="petfood"
                                />
                            </div>
                            <div className="image-active">
                                <img
                                    src="/assets/images/home/petfood.webp"
                                    alt="petfood"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Introduction;
