import React from "react";
import "./BlogBanner.css";
const BlogBanner = () => {
  return (
    <section className="BlogBanner_container">
      <div className="BlogBanner_container_overlay"></div>
      <div className="BlogBanner_container_detail">
        <h2>Blog</h2>
        <h3>Nơi chia sẻ những mẹo hay về thú cưng dành riêng cho bạn</h3>
      </div>
    </section>
  );
};

export default BlogBanner;
