// import React from 'react'
import MainLayout from "../../layouts/MainLayout";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";
import "./Blog.css";
import "@fontsource/nunito";
import BlogOutstanding from "../../components/BlogOutstanding";
import BlogTrending from "../../components/BlogTrending";
import BlogNews from "../../components/BlogNews";
import BlogBanner from "../../components/BlogBanner";
import BlogCommon from "../../components/BlogCommon";
import BlogNews2 from "../../components/BLogNews2";
import { useRef } from "react";
import React, { useState, useEffect } from "react";

import { getAllBlogs } from "../../apis/blogApi";

const Blog = () => {
    const [dataBlog, setDataBlog] = useState([]);
    useEffect(() => {
        async function getBlogDetail() {
            const blog = await getAllBlogs();
            setDataBlog(blog);
        }
        getBlogDetail();
    }, []);
    // console.log(dataBlog);
    const ref = useRef(null);
    const a = document.querySelector(".blog_container_second_common");
    const b = document.querySelector(".blog_news_container");
    // console.log(b);
    const OutstandingBlog = {
        blogId: 1,
        blogTitle: "Những lưu ý quan trọng khi nuôi chó Husky",
        blogImage: "/assets/images/blog/blog-1.png",
        blogContent:
            "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
        blogTime: "2021-10-21",
        blogAuthor: "DuyenTM",
    };
    const newsBlog = [
        {
            blogId: 1,
            blogTitle: "Những lưu ý quan trọng khi nuôi chó Husky ",
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
            blogTitle:
                "Spa cho thú cưng là gì? Tất tần tật về dịch vụ spa thú cưng",
            blogImage: "/assets/images/blog/blog-1.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "DuyenTM",
        },
        {
            blogId: 5,
            blogTitle: "Mèo bị trầm cảm – Dấu hiệu nhận biết và cách điều trị",
            blogImage: "/assets/images/blog/blog-4.jpg",
            blogContent:
                "Không chỉ con người, mèo cũng bị trầm cảm nhé. Thậm chí trầm cảm ở mèo còn nguy hiểm hơn?",
            blogTime: "2021-10-21",
            blogAuthor: "ChuongTB",
        },
        {
            blogId: 6,
            blogTitle: "THỨC ĂN CHO CHÓ NÀO LÀ TỐT NHẤT?",
            blogImage: "/assets/images/blog/blog-6.jpg",
            blogContent:
                "Có một sự thật, tất cả những người chủ đều quan tâm đến việc liệu chú chó của mình có thể hấp thụ được bao nhiêu chất dinh dưỡng",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 7,
            blogTitle: "Những lý do không nên nuôi chó Corgi",
            blogImage: "/assets/images/blog/blog-5.jpg",
            blogContent:
                "Trước khi quyết định nuôi chó Corgi thì hẳn bạn đã tìm hiểu một số thông tin về đặc điểm",
            blogTime: "2021-10-21",
            blogAuthor: "Hai",
        },
        {
            blogId: 8,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 9,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 10,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 11,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 12,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 13,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 14,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 15,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 16,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 17,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 18,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 19,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 20,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 21,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 22,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 23,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 24,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 25,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 26,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "Tamy",
        },
        {
            blogId: 27,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "Tamy",
        },
        {
            blogId: 28,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "Tamy",
        },
        {
            blogId: 29,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "Tamy",
        },
        {
            blogId: 30,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "Tamy",
        },
    ];
    const trendingBlog = [
        {
            blogId: 1,
            blogTitle:
                "Hướng Dẫn Cách Chăm Sóc Mèo Con Theo Từng Giai Đoạn Tuổi",
            blogImage: "/assets/images/blog/blog-1.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "DuyenTM",
        },
        {
            blogId: 2,
            blogTitle: "Danh sách Các Màu Hiếm Của Mèo Anh Lông Ngắn Hiện Nay",
            blogImage: "/assets/images/blog/blog-2.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "ChuongTB",
        },
        {
            blogId: 3,
            blogTitle:
                "Khắc phục nỗi sợ cắt móng tay ở chó Alaska và chó Phốc Sóc",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "GiaoTN",
        },
        {
            blogId: 4,
            blogTitle: "Mèo Munchkin Giá Bao Nhiêu? Bảng Giá Mèo Munchkin 2022",
            blogImage: "/assets/images/blog/blog-1.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
            blogTime: "2021-10-21",
            blogAuthor: "DuyenTM",
        },
    ];

    let firstItem = 0;
    let trendBlogs = [1, 2, 3];

    return (
        <MainLayout>
            <SEO
                title="Bài viết"
                description="Website cung cấp dịch vụ chăm sóc thú cưng"
                name="PetCare"
                type="article"
            />
            <div className="blog_container">
                {dataBlog.length > 0 ? (
                    <div className="blog_container_detail">
                        <div className="blog_link_container">
                            <p>
                                <Link to="/" className="blog_link_">
                                    Pet Care
                                </Link>
                                &nbsp; &#62; &nbsp;
                                <Link to="/blog" className="blog_link_">
                                    Blog
                                </Link>
                            </p>
                        </div>

                        <div className="blog_outstanding_container">
                            <BlogOutstanding
                                blogId={dataBlog[firstItem]._id}
                                blogTitle={dataBlog[firstItem].title}
                                blogImage={dataBlog[firstItem].blogImage}
                                blogContent={dataBlog[firstItem].content}
                                blogTime={dataBlog[firstItem].createdAt.slice(
                                    0,
                                    10
                                )}
                                blogAuthorFirstName={
                                    dataBlog[firstItem].user.firstName
                                }
                                blogAuthorLastName={
                                    dataBlog[firstItem].user.lastName
                                }
                            />
                        </div>
                        <div className="blog-detail-trending">
                            <BlogTrending />
                        </div>

                        <div className="blog_news_container">
                            <BlogNews newsBlog={dataBlog} newRef={b} />
                        </div>
                    </div>
                ) : (
                    <div className="loading__">
                        <div className="loading-container">
                            <div className="loading"></div>
                            <div id="loading-text">loading</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="blog_container_second">
                <BlogBanner />
                <div className="blog_container_second_common" ref={ref}>
                    <BlogCommon />
                </div>
                {dataBlog.length > 0 ? (
                    <BlogNews2
                        newsBlog={dataBlog}
                        trendingBlog={dataBlog}
                        newRef={a}
                    />
                ) : (
                    <div className="loading__">
                        <div className="loading-container">
                            <div className="loading"></div>
                            <div id="loading-text">loading</div>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default Blog;
