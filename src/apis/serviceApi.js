import axiosInstance from "./axiosInstance";

const getAllServices = async () => {
  return await axiosInstance.get("/service/get-all-services");
};
const createService = async (data) => {
  return await axiosInstance.post("/service/create-service", data);
};
const delteteService = async (id) => {
  return await axiosInstance.delete(`/service/delete-service?id=${id}`);
};

export { createService, getAllServices, delteteService };
