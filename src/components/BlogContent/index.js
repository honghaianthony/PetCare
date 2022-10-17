import React from "react";
import "./BlogContent.css";
import { Icon } from "@iconify/react";

function BlogContent(props) {
    return (
        <div className="blog-content-container">
            <div className="blog-content-title">
                <h2>{props.title}</h2>
            </div>
            <div className="blog-content-time">
                {props.time} bởi {props.author}
            </div>
            <div
                className="blog-content-main"
                dangerouslySetInnerHTML={{ __html: props.content }}
            ></div>
            <div className="blog-content-social">
                <Icon
                    icon="akar-icons:facebook-fill"
                    className="blog-content-social-icon-fa"
                />
                <Icon
                    icon="akar-icons:instagram-fill"
                    className="blog-content-social-icon-ins"
                />
                <Icon
                    icon="akar-icons:twitter-fill"
                    className="blog-content-social-icon-twi"
                />
            </div>
        </div>
    );
}

export default BlogContent;
