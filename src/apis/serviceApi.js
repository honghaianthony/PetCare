import axiosInstance from "./axiosInstance";

const createService = async (data) => {
    return await axiosInstance.post("/service/create-service", data);
};

export { createService };
