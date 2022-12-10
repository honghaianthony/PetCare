import axiosInstance from "./axiosInstance";

const getAllBlogs = async () => {
  return await axiosInstance.get("/blog/get-all-blogs");
};

const createOrder = async (data) => {
  return await axiosInstance.post("/order/create-order", data);
};

const updateBlog = async (data, id) => {
  return await axiosInstance.put(`/blog/update-blog?id=${id}`, data);
};

const deleteBlog = async (id) => {
  return await axiosInstance.delete(`/blog/delete-blog?id=${id}`);
};

export { createOrder };
