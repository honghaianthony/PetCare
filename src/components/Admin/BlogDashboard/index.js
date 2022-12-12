import "./BlogDashboard.css";
import { useEffect, useState } from "react";
import FilterBlog from "./FilterBlog";
import BlogList from "./BlogList";
import { getAllBlogs } from "../../../apis/blogApi";

const BlogDashboard = () => {
  const [dataBlogs, setDataBlogs] = useState(null);
  const [needUpdateData, setNeedUpdateData] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await getAllBlogs();
      setDataBlogs(response);
      setNeedUpdateData(false);
    }
    if (needUpdateData) {
      fetchData();
    }
  }, [needUpdateData]);
  return (
    <>
      <div className="blog-dashboard-container">
        <FilterBlog />
        <BlogList
          data={dataBlogs}
          needUpdateData={() => setNeedUpdateData(true)}
        />
      </div>
    </>
  );
};
export default BlogDashboard;
