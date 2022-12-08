import axiosInstance from "./axiosInstance";

const getAllBlogs = async () => {
  return await axiosInstance.get("/blog/get-all-blogs");
};

const getBlogById = async (id) => {
  return await axiosInstance.get(`/blog/get-blog-by-id?id=${id}`);
};

const createBlog = async (data) => {
  return await axiosInstance.post("/blog/create-blog", data);
};

const updateBlog = async (data, id) => {
  return await axiosInstance.put(`/blog/update-blog?id=${id}`, data);
};

const deleteBlog = async (id) => {
  return await axiosInstance.delete(`/blog/delete-blog?id=${id}`);
};

export { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
