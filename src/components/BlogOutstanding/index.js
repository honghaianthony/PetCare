import React from "react";
import "./BlogOutstanding.css";
import { Link } from "react-router-dom";
const BlogOutstanding = (props) => {
    function ChangeToSlug(str) {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
        str = str.replace(/(đ)/g, "d");

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, "");

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, "-");

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, "");

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, "");

        // return
        return str;
    }
    const {
        blogId,
        blogTitle,
        blogImage,
        blogContent,
        blogTime,
        blogAuthorFirstName,
        blogAuthorLastName,
    } = props;
    return (
        <div className="BlogOutstanding_container">
            <div className="Header_Blog_Outstanding_container">
                <h2>Bài viết nổi bật</h2>
                <hr></hr>
            </div>
            <Link
                to={"/blog/" + ChangeToSlug(blogTitle) + "." + blogId + ".html"}
                id={blogId}
                className="BlogOutstanding_Content_container"
            >
                <div className="BlogOutstanding_img_container">
                    <img src={blogImage} alt={blogTitle} />
                </div>
                <div className="BlogOutstanding_About_Detail_container">
                    <div className="BlogOutstanding_About_Detail_top">
                        <div className="BlogOutstanding_About_Detail_top_header">
                            <h3>{blogTitle}</h3>
                        </div>
                        <div className="BlogOutstanding_About_Detail_top_desc">
                            <p>{blogContent}</p>
                        </div>
                    </div>
                    <div className="BlogOutstanding_About_Detail_divide"></div>
                    <div className="BlogOutstanding_About_Detail_bottom">
                        <div className="BlogOutstanding_About_Detail_bottom_author">
                            <p>
                                Tác giả:{" "}
                                <b>
                                    {blogAuthorFirstName} {blogAuthorLastName}{" "}
                                </b>
                            </p>
                        </div>
                        <div className="BlogOutstanding_About_Detail_bottom_date">
                            <p>{blogTime}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BlogOutstanding;
