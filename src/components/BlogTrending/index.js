import React from "react";
import "./BlogTrending.css";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const trendingBlog = [
    {
        blogId: 1,
        blogTitle: "Những lưu ý quan trọng khi nuôi chó Husky",
        blogImage: "/assets/images/blog/blog-1.png",
        blogContent:
            "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
        blogTime: "2021-10-21",
        blogAuthor: "DuyenTM",
    },
    {
        blogId: 2,
        blogTitle: "Hướng dẫn kiểm tra sức khỏe cho thú cưng tại nhà",
        blogImage: "/assets/images/blog/blog-2.png",
        blogContent:
            "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
        blogTime: "2021-10-21",
        blogAuthor: "ChuongTB",
    },
    {
        blogId: 3,
        blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
        blogImage: "/assets/images/blog/blog-3.png",
        blogContent:
            "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
        blogTime: "2021-10-21",
        blogAuthor: "GiaoTN",
    },
    {
        blogId: 4,
        blogTitle: "Những lưu ý quan trọng khi nuôi chó Husky",
        blogImage: "/assets/images/blog/blog-1.png",
        blogContent:
            "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
        blogTime: "2021-10-21",
        blogAuthor: "DuyenTM",
    },
    {
        blogId: 5,
        blogTitle: "Hướng dẫn kiểm tra sức khỏe cho thú cưng tại nhà",
        blogImage: "/assets/images/blog/blog-2.png",
        blogContent:
            "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
        blogTime: "2021-10-21",
        blogAuthor: "ChuongTB",
    },
    {
        blogId: 6,
        blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
        blogImage: "/assets/images/blog/blog-3.png",
        blogContent:
            "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
        blogTime: "2021-10-21",
        blogAuthor: "GiaoTN",
    },
];

function BlogTrending() {
    return (
        <div className="blog-trending-container">
            <div className="blog-trending-title">
                <h2>Xu hướng</h2>
                <hr />
            </div>
            <div className="blog-trending-content">
                <div className="blog-trending-article-swiper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
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
                        }}
                    >
                        {trendingBlog.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="blog-trending-article-detail">
                                        <img
                                            src={item.blogImage}
                                            alt="Article banner"
                                        />
                                        <h5>{item.blogTitle}</h5>
                                        <p>{item.blogContent}</p>
                                        <hr />
                                        <div className="blog-trending-article-detail-author">
                                            <p>Tác giả: {item.blogAuthor}</p>
                                            <span>{item.blogTime}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default BlogTrending;
