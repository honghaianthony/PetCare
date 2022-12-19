import axiosInstance from "./axiosInstance";

const getAllOrders = async () => {
  return await axiosInstance.get("/order/get-all-orders");
};

const getOrderById = async (id) => {
  return await axiosInstance.get(`/order/get-order-by-id?id=${id}`);
};

const createOrder = async (data) => {
  return await axiosInstance.post("/order/create-order", data);
};

const updateOrder = async (data) => {
  return await axiosInstance.put(`/order/update-order`, data);
};

const getOrderUser = async () => {
  return await axiosInstance.get(`/order/get-order-user`);
};

export { createOrder, getAllOrders, getOrderById, updateOrder, getOrderUser };
