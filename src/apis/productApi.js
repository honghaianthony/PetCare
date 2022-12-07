import axiosInstance from "./axiosInstance";

const getAllProducts = async () => {
  return await axiosInstance.get("/product/get-all-products");
};

const getProductById = async (id) => {
  return await axiosInstance.get(`/product/get-product-by-id?id=${id}`);
};

const createProduct = async (data) => {
  return await axiosInstance.post("/product/create-product", data);
};

const updateProduct = async (data) => {
  return await axiosInstance.put("/product/update-product", data);
};

const deleteProduct = async (id) => {
  return await axiosInstance.delete(`/product/delete-product?id=${id}`);
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
