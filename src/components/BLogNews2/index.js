// import React from 'react'
import React, { useState, useEffect } from "react";
import "./BlogNews2.css";
import { Icon } from "@iconify/react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useRef } from "react";
const BlogNews2 = (props) => {
    const { newsBlog, trendingBlog, newRef } = props;
    // console.log(newRef)
    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = (value) => {
        setSearchTerm(value);
        filterData(value);
    };
    const [data, setData] = useState(newsBlog);
    const excludeColumns = ["blogAuthor", "blogTitle"];

    const filterData = (value) => {
        const lowerCaseValue = value.toLowerCase().trim();
        if (!lowerCaseValue) {
            setData(newsBlog);
        } else {
            const filteredData = newsBlog.filter((item) => {
                return Object.keys(item).some((key) => {
                    return excludeColumns.includes(key)
                        ? item[key].toLowerCase().includes(lowerCaseValue)
                        : false;
                });
            });
            setData(filteredData);
        }
    };

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        if (currentItems.length < itemsPerPage) {
            setCurrentItems(data.slice(itemOffset, currentItems.length - 1));
        }
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, currentItems.length, data]);

    // Invoke when user click to request another page.
    // const ref = useRef(null);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);

        newRef.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const [show, setShow] = useState(true);
    const handleOnBlur = () => {
        setShow(!show);
    };
    const handleOnClick = () => {
        setShow(false);
    };

    function ChangeToSlug(str) {
        // Chuy???n h???t sang ch??? th?????ng
        str = str.toLowerCase();

        // x??a d???u
        str = str.replace(/(??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???)/g, "a");
        str = str.replace(/(??|??|???|???|???|??|???|???|???|???|???)/g, "e");
        str = str.replace(/(??|??|???|???|??)/g, "i");
        str = str.replace(/(??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???)/g, "o");
        str = str.replace(/(??|??|???|???|??|??|???|???|???|???|???)/g, "u");
        str = str.replace(/(???|??|???|???|???)/g, "y");
        str = str.replace(/(??)/g, "d");

        // X??a k?? t??? ?????c bi???t
        str = str.replace(/([^0-9a-z-\s])/g, "");

        // X??a kho???ng tr???ng thay b???ng k?? t??? -
        str = str.replace(/(\s+)/g, "-");

        // x??a ph???n d??? - ??? ?????u
        str = str.replace(/^-+/g, "");

        // x??a ph???n d?? - ??? cu???i
        str = str.replace(/-+$/g, "");

        // return
        return str;
    }

    console.log("current state", currentItems);

    return (
        <section className="BlogNews2_container">
            <div className="BlogNews2_container_detail">
                <div className="Header_Blog_News2_container">
                    <div className="Header_Blog_News2_container_left">
                        <h2>B??i vi???t m???i</h2>
                    </div>
                    <div className="Header_Blog_News2_container_right">
                        <div
                            className={
                                show
                                    ? "Header_Blog_News2_container_right_search_container"
                                    : "Header_Blog_News2_container_right_search_container_unshow"
                            }
                        >
                            <Icon
                                icon="ant-design:search-outlined"
                                className="Header_Blog_News2_container_right_search"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="T??m ki???m ti??u ?????, t??c gi??? "
                            className={
                                show
                                    ? "Header_Blog_News2_container_right_input"
                                    : "Header_Blog_News2_container_right_input_show"
                            }
                            onBlur={handleOnBlur}
                            value={searchTerm}
                            onClick={handleOnClick}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className="Blog_News2_container_main_content">
                    <div className="Blog_News2_container_main_content_left">
                        <div className="Blog_News2_container_main_content_left_top">
                            {currentItems.length === 0 ? (
                                <div className="no_result2">
                                    <img
                                        src="/assets/images/blog/nodata-found.png"
                                        alt="nodata-found"
                                        className="img_not_found2"
                                    />
                                    <div className="BlogNews2_notfound_container">
                                        <span className="BlogNews2_notfound">
                                            Kh??ng t??m th???y k???t qu???
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                currentItems.map((item, index) => (
                                    <Link
                                        to={
                                            "/blog/" +
                                            ChangeToSlug(item.title) +
                                            "." +
                                            item._id +
                                            ".html"
                                        }
                                        id={item._id}
                                        key={index}
                                        className="BlogNews2_Content_container"
                                    >
                                        <div className="BlogNews2_content_item_container">
                                            <div className="BlogNews2_img_container">
                                                <img
                                                    src={item.blogImage}
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className="BlogNews2_About_Detail_container">
                                                <div className="BlogNews2_About_Detail_top">
                                                    <div className="BlogNews2_About_Detail_top_header">
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <div className="BlogNews2_About_Detail_top_desc">
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                                <div className="BlogNews2_About_Detail_divide"></div>
                                                <div className="BlogNews2_About_Detail_bottom">
                                                    <div className="BlogNews2_About_Detail_bottom_author">
                                                        <p>
                                                            T??c gi???:{" "}
                                                            <b className="font-bold_blognews2">
                                                                {item.user
                                                                    .firstName +
                                                                    " " +
                                                                    item.user
                                                                        .lastName}
                                                            </b>
                                                        </p>
                                                    </div>
                                                    <div className="BlogNews2_About_Detail_bottom_date">
                                                        <p>
                                                            {new Date(
                                                                item.createdAt
                                                            ).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                        <div className="BlogNews2_pagination">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                // onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                pageCount={pageCount}
                                previousLabel="<"
                                renderOnZeroPageCount={null}
                                containerClassName="pagination2"
                                pageLinkClassName="page-num2"
                                previousClassName="page-previousClassName2"
                                nextLinkClassName="page-nextClassName2"
                                activeLinkClassName="active__"
                                onClick={handlePageClick}
                                // className='pagination__'
                            />
                        </div>
                    </div>
                    <div className="Blog_News2_container_main_content_right">
                        <div className="Blog_News2_container_main_content_right_item_divide"></div>
                        <h3>B??i vi???t trending</h3>
                        {trendingBlog.map((item, index) => (
                            <Link
                                to={
                                    "/blog/" +
                                    ChangeToSlug(item.title) +
                                    "." +
                                    item._id +
                                    ".html"
                                }
                                id={item._id}
                                key={index}
                                className="BlogNews2_Content_container_trending"
                            >
                                <h3 className="link_h3_blogNews2">
                                    {item.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogNews2;
