import React from "react";
import "./HighlightBlog.css";

const highlightedBlog = [
    {
        blogId: 1,
        blogTitle: "Những lưu ý quan trọng khi nuôi chó Husky",
        blogImage: "/assets/images/blog/blog-1.png",
        blogAuthor: "DuyenTM",
    },
    {
        blogId: 2,
        blogTitle: "Hướng dẫn kiểm tra sức khỏe cho thú cưng tại nhà",
        blogImage: "/assets/images/blog/blog-2.png",
        blogAuthor: "ChuongTB",
    },
    {
        blogId: 3,
        blogTitle: "Mèo bị bệnh – Những dấu hiệu tuyệt đối không thể...",
        blogImage: "/assets/images/blog/blog-3.png",
        blogAuthor: "GiaoTN",
    },
];

function HighlightBlog() {
    return (
        <div className="highlight-blog-container">
            <div className="highlight-blog-title">
                <h4>Bài viết nổi bật</h4>
                <hr />
            </div>
            <div className="highlight-blog-content">
                {highlightedBlog.map((item, index) => {
                    return (
                        <div
                            className="highlight-blog-article-detail"
                            key={index}
                        >
                            <img src={item.blogImage} alt="Article banner" />
                            <h5>{item.blogTitle}</h5>
                            <p>Tác giả: {item.blogAuthor}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HighlightBlog;
