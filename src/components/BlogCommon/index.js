import React from "react";
import "./BlogCommon.css";
const BlogCommon = () => {
    return (
        <section className="BlogCommon_container">
            <div className="BlogCommon_container_detail">
                <div className="BlogCommon_container_detail_item">
                    <div className="BlogCommon_container_left">
                        <div className="BlogCommon_container_img_left_container">
                            <img
                                src="/assets/images/blog/bannerDog.png"
                                alt="bannerDog"
                            />
                        </div>
                    </div>
                    <div className="BlogCommon_container_right">
                        <div className="BlogCommon_container_img_right_container">
                            <img
                                src="/assets/images/blog/bannerCat.png"
                                alt="bannerCat"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogCommon;
