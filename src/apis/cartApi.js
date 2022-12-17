import axiosInstance from "./axiosInstance";

const getMyCart = async () => {
  return await axiosInstance.get("/user/get-all-carts");
};
const addCart = async (data) => {
  return await axiosInstance.post("/user/add-cart", data);
};
const createOrder = async (data) => {
  return await axiosInstance.post("/order/create-order", data);
};

const updateBlog = async (data, id) => {
  return await axiosInstance.put(`/blog/update-blog?id=${id}`, data);
};

const deleteCart = async (id) => {
  return await axiosInstance.delete(`/user/delete-cart?id=${id}`);
};

export { getMyCart, deleteCart, addCart };
