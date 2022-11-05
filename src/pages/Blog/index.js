import React from 'react'
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import "./Blog.css"
import "@fontsource/nunito"

import BlogOutstanding from '../../components/BlogOutstanding';
import BlogTrending from "../../components/BlogTrending";
import BlogNews from '../../components/BlogNews';
const Blog = () => {
    const OutstandingBlog = {
        blogId: 1,
        blogTitle: "Những lưu ý quan trọng khi nuôi chó Husky",
        blogImage: "/assets/images/blog/blog-1.png",
        blogContent:
            "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
        blogTime: "2021-10-21",
        blogAuthor: "DuyenTM",
    }
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
        {
            blogId: 7,
            blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
            blogImage: "/assets/images/blog/blog-3.png",
            blogContent:
                "Việc nuôi dạy thú cưng ngày càng trở nên phổ biến thì các dịch vụ theo đó cũng ngày càng phát triển theo. Nhiều người vẫn luôn đặt câu hỏi “spa thú cưng là gì và bao gồm những gì?",
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
    return (
        <MainLayout>
            <div className="blog_container">
                <div className="blog_container_detail">
                    <div className="blog_link_container">
                        <p>
                            <Link to="/" className='blog_link_'>Pet Care</Link>
                            &nbsp; &#62; &nbsp;
                            <Link to="/blog" className='blog_link_'>Blog</Link>
                        </p>
                    </div>
                    <div className="blog_outstanding_container">
                        <BlogOutstanding
                            blogId={OutstandingBlog.blogId}
                            blogTitle={OutstandingBlog.blogTitle}
                            blogImage={OutstandingBlog.blogImage}
                            blogContent={OutstandingBlog.blogContent}
                            blogTime={OutstandingBlog.blogTime}
                            blogAuthor={OutstandingBlog.blogAuthor}
                        />
                    </div>
                    <div className="blog-detail-trending">
                        <BlogTrending />
                    </div>
                    <div className="blog_news_container">
                        <BlogNews 
                        newsBlog={newsBlog}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Blog