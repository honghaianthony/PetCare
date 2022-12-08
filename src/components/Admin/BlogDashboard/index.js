import "./BlogDashboard.css";
import { useEffect, useState } from "react";
import FilterBlog from "./FilterBlog";
import BlogList from "./BlogList";

const BlogDashboard = () => {
  const [dataBlogs, setDataBlogs] = useState(null);
  const [needUpdateData, setNeedUpdateData] = useState(true);
  useEffect(() => {
    if (needUpdateData) {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((actualData) => setDataBlogs(actualData));
      setNeedUpdateData(false);
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
