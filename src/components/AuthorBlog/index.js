import React from "react";
import "./AuthorBlog.css";

function AuthorBlog(props) {
    return (
        <div className="author-blog-container">
            <div className="author-blog-title">
                <p>{props.author}</p>
            </div>
            <div className="author-blog-avatar">
                <img src={props.authorImage} alt="Author Avatar" />
            </div>
        </div>
    );
}

export default AuthorBlog;
