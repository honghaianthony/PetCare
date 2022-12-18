import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./BlogDetail.css";
import BlogContent from "../../components/BlogContent";
import AuthorBlog from "../../components/AuthorBlog";
import HighlightBlog from "../../components/HighlightBlog";
import BlogTrending from "../../components/BlogTrending";
import { getBlogById } from "../../apis/blogApi";
import SEO from "../../components/SEO";

function BlogDetail() {
    const { blogId } = useParams();
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        async function getBlogDetail() {
            const blog = await getBlogById(blogId);
            setBlogData(blog);
        }
        getBlogDetail();
    }, [blogId]);

    return (
        <MainLayout>
            {blogData ? (
                <div className="blog-detail-container">
                    <SEO
                        title={blogData.title}
                        description="Website cung cấp dịch vụ chăm sóc thú cưng"
                        name="PetCare"
                        type="article"
                    />
                    <div className="blog-detail-container-detail">
                        <div className="blog-detail-link">
                            <p>
                                <Link to="/">Trang chủ</Link>
                                &nbsp; &#62; &nbsp;
                                <Link to="/">Blog</Link>
                                &nbsp; &#62; &nbsp; {blogData.title}
                            </p>
                        </div>
                        <div className="blog-detail-main">
                            <BlogContent
                                title={blogData.title}
                                time={blogData.updatedAt}
                                content={blogData.content}
                                author={`${blogData.user.firstName} ${blogData.user.lastName}`}
                                image={blogData.blogImage}
                            />
                            <div className="blog-detail-main-right">
                                <AuthorBlog
                                    author={`${blogData.user.firstName} ${blogData.user.lastName}`}
                                    authorImage={blogData.user.avatar}
                                />
                                <HighlightBlog />
                            </div>
                        </div>
                        <div className="blog-detail-trending">
                            <BlogTrending />
                        </div>
                    </div>
                    <div className="blog-detail-container-detail-second">
                        <div className="blog-detail-link">
                            <p>
                                <Link to="/">Trang chủ</Link>
                                &nbsp; &#62; &nbsp;
                                <Link to="/">Blog</Link>
                                &nbsp; &#62; &nbsp; {blogData.title}
                            </p>
                        </div>
                        <div className="blog-detail-main">
                            <BlogContent
                                title={blogData.title}
                                time={blogData.updatedAt}
                                content={blogData.content}
                                author={`${blogData.user.firstName} ${blogData.user.lastName}`}
                                image={blogData.blogImage}
                                authorImage={blogData.user.avatar}
                            />
                        </div>
                        <div className="blog-detail-trending">
                            <BlogTrending />
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </MainLayout>
    );
}

export default BlogDetail;
