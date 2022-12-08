import axiosInstance from "./axiosInstance";

const getAllProducts = async () => {
  return await axiosInstance.get("/product-detail/get-all-product-details");
};

const getProductById = async (id) => {
  return await axiosInstance.get(`/product/get-product-by-id?id=${id}`);
};
const getProductDetailById = async (id) => {
  return await axiosInstance.get(
    `/product-detail/get-product-detail-by-id?id=${id}`
  );
};
const createProduct = async (data) => {
  return await axiosInstance.post("/product/create-product", data);
};
const createProductDetail = async (data) => {
  return await axiosInstance.post(
    "/product-detail/create-product-detail",
    data
  );
};
const getAllCategories = async () => {
  return await axiosInstance.get("/category/get-all-categories");
};

const updateProduct = async (data, id) => {
  return await axiosInstance.put(`/product/update-product?id=${id}`, data);
};
const updateProductDetail = async (data, id) => {
  return await axiosInstance.put(
    `/product-detail/update-product-detail?id=${id}`,
    data
  );
};

const deleteProduct = async (id) => {
  return await axiosInstance.delete(`/product/delete-product?id=${id}`);
};

export {
  getAllProducts,
  createProduct,
  createProductDetail,
  getAllCategories,
  getProductById,
  getProductDetailById,
  updateProduct,
  updateProductDetail,
  deleteProduct,
};
