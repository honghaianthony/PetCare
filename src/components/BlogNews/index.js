import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./BlogNews.css";
import "@fontsource/nunito"
import { Icon } from "@iconify/react";
const BlogNews = (props) => {

  const { newsBlog,newRef } = props;
  console.log(newsBlog)
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (value) => {
    setSearchTerm(value);
    filterData(value);
  };
  const [data, setData] = useState(newsBlog);
  const excludeColumns = ["title"];

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
  const itemsPerPage = 3;
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    if (currentItems.length < itemsPerPage) {
      setCurrentItems(data.slice(itemOffset, currentItems.length - 1));
    }
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,currentItems.length, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
    newRef.scrollIntoView({ behavior: 'smooth',block:'start' });
  };

  const [show, setShow] = useState(true);
  const handleOnBlur = () => {
    setShow(!show);
  };
  const handleOnClick=()=>{
    setShow(false);
  }
  return (
    <div className="BlogNews_container">
      <div className="Header_Blog_News_container">
        <div className="Header_Blog_News_container_left">
          <h2>Bài viết mới</h2>
        </div>
        <div className="Header_Blog_News_container_right">
          <div
            className={
              show
                ? "Header_Blog_News_container_right_search_container"
                : "Header_Blog_News_container_right_search_container_unshow"
            }
            
          >
            <Icon
              icon="ant-design:search-outlined"
              className="Header_Blog_News_container_right_search"
            />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm tiêu đề "
            className={
              show
                ? "Header_Blog_News_container_right_input"
                : "Header_Blog_News_container_right_input_show"
            }
            onBlur={handleOnBlur}
            value={searchTerm}
            onClick={handleOnClick}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      <div className="divide____"></div>
      {currentItems.length === 0 ? (
        <div className="no_result">
          <img
            src="/assets/images/blog/nodata-found.png"
            alt="nodata-found"
            className="img_not_found"
          />
          <div className="BlogNews_notfound_container">
            <span className="BlogNews_notfound">Không tìm thấy kết quả</span>
          </div>
        </div>
      ) : (
        currentItems.map((item, index) => (
          <Link
            to={`/blog/${item._id}`}
            id={item.blogId}
            key={index}
            className="BlogNews_Content_container"
          >
            <div className="BlogNews_img_container">
              <img src={item.blogImage} alt={item.title} />
            </div>
            <div className="BlogNews_About_Detail_container">
              <div className="BlogNews_About_Detail_top">
                <div className="BlogNews_About_Detail_top_header">
                  <h3>{item.title}</h3>
                </div>
                <div className="BlogNews_About_Detail_top_desc">
                  <p>{item.content}</p>
                </div>
              </div>
              <div className="BlogNews_About_Detail_divide"></div>
              <div className="BlogNews_About_Detail_bottom">
                <div className="BlogNews_About_Detail_bottom_author">
                  <p>Tác giả: <b>{item.user.firstName} {item.user.lastName}</b></p>
                  
                </div>
                <div className="BlogNews_About_Detail_bottom_date">
                  <p>{item.createdAt.slice(0,10)}</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
      {/* {currentItems.length === 0 && <span>Không tìm thấy kết quả</span>} */}
      <div className="BlogNews_pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          // onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousClassName="page-previousClassName"
          nextLinkClassName="page-nextClassName"
          activeLinkClassName="active__"
          onClick={handlePageClick}
          // className='pagination__'
        />
      </div>
    </div>
  );
};

export default BlogNews;
