import React from "react";
import "./BlogOutstanding.css";
import { Link } from "react-router-dom";
const BlogOutstanding = (props) => {
    const { blogId, blogTitle, blogImage, blogContent, blogTime, blogAuthor } = props
    return (
        <div className="BlogOutstanding_container">
            <div className="Header_Blog_Outstanding_container">
                <h2>Bài viết nổi bật</h2>
                <hr></hr>
            </div>
            <Link to={`/blog/${blogId}`} id={blogId} className="BlogOutstanding_Content_container">
                <div className="BlogOutstanding_img_container">
                    <img src={blogImage} alt={blogTitle} />
                </div>
                <div className="BlogOutstanding_About_Detail_container">
                    <div className="BlogOutstanding_About_Detail_top">
                        <div className="BlogOutstanding_About_Detail_top_header">
                            <h3>{blogTitle}</h3>
                        </div>
                        <div className="BlogOutstanding_About_Detail_top_desc">
                            <p>
                                {blogContent}
                            </p>
                        </div>
                    </div>
                    <div className="BlogOutstanding_About_Detail_divide"></div>
                    <div className="BlogOutstanding_About_Detail_bottom">
                        <div className="BlogOutstanding_About_Detail_bottom_author">
                            <p>Tác giả: <b>{blogAuthor}</b></p>
                            
                        </div>
                        <div className="BlogOutstanding_About_Detail_bottom_date">
                            <p>
                                {blogTime}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>


        </div>
    );
};

export default BlogOutstanding;