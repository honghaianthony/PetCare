import axiosInstance from "./axiosInstance";

const getAllProductDetails = async () => {
  return await axiosInstance.get("/product-detail/get-all-product-details");
};

const getProductDetailById = async (id) => {
  return await axiosInstance.get(
    `/product-detail/get-product-detail-by-id?id=${id}`
  );
};

const createProductDetail = async (data) => {
  return await axiosInstance.post(
    "/product-detail/create-product-detail",
    data
  );
};

const updateProductDetail = async (data) => {
  return await axiosInstance.put("/product-detail/update-product-detail", data);
};

const deleteProductDetail = async (id) => {
  return await axiosInstance.delete(
    `/product-detail/delete-product-detail?id=${id}`
  );
};

export {
  getAllProductDetails,
  getProductDetailById,
  createProductDetail,
  updateProductDetail,
  deleteProductDetail,
};
