import React, { useState, useEffect } from "react";
import "./BlogTrending.css";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getAllBlogs } from "../../apis/blogApi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
const [dataBlog, setDataBlog] = useState([]);
useEffect(() => {
    async function getBlogDetail() {
        const blog = await getAllBlogs();
        setDataBlog(blog);
    }
    getBlogDetail();
}, []);
const navigate = useNavigate();
const handleGoTo=(id)=>{
    console.log("hello",id)
    // if(id===dataBlog._id)
    navigate(`/blog/${id}`);
}
let takeSixBlog = [1, 2, 3,4 ,5 ,6 ]
    return (<>
        {dataBlog.length > 0 ? (
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
                        {takeSixBlog.map((item, index) => {
                            return (
                                dataBlog[item]&&(
                                <SwiperSlide key={index}>
                                    <div
                                     className="blog-trending-article-detail"
                                    //  to={`/blog/${dataBlog[item]._id}`}
                                    onClick={()=>handleGoTo(dataBlog[item]._id)}
                                    >
                                        <img
                                            src={dataBlog[item].coverImage}
                                            alt="Article banner"
                                        />
                                        <h5>{dataBlog[item].title}</h5>
                                        <p>{dataBlog[item].content}</p>
                                        <hr />
                                        <div className="blog-trending-article-detail-author">
                                            <p>
                                                Tác giả: 
                                                {dataBlog[item].user.firstName} {dataBlog[item].user.lastName}
                                            </p>
                                            <span>{dataBlog[item].createdAt.slice(0,10)}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>):(<h2>loading</h2>)}
        </>);
}

export default BlogTrending;
