import axiosInstance from "./axiosInstance";

const getAllCategories = async () => {
  return await axiosInstance.get("/category/get-all-categories");
};

const getCategoryById = async (id) => {
  return await axiosInstance.get(`/category/get-category-by-id?id=${id}`);
};

const createCategory = async (data) => {
  return await axiosInstance.post("/category/create-category", data);
};

const deleteCategory = async (id) => {
  return await axiosInstance.delete(`/category/delete-category?id=${id}`);
};

export { getAllCategories, getCategoryById, createCategory, deleteCategory };
