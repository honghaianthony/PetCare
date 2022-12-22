import axiosInstance from "./axiosInstance";

const getAllUsers = async () => {
    return await axiosInstance.get("/user/get-all-users");
};

const getAllCustomers = async () => {
    return await axiosInstance.get("/user/get-all-customers");
};

const getUserById = async (id) => {
    return await axiosInstance.get(`/user/get-user-by-id?userId=${id}`);
};

const updateUserRole = async (data) => {
    return await axiosInstance.put(`user/update-users-role`, data);
};

const updateUser = async (data, id) => {
    return await axiosInstance.put(`user/update-user?id=${id}`, data);
};

const deleteUser = async (id) => {
    return await axiosInstance.delete(`/user/delete-user?userId=${id}`);
};

const getUser = async () => {
    return await axiosInstance.get("/user/get-info");
};

export {
    getUserById,
    getAllUsers,
    updateUserRole,
    updateUser,
    deleteUser,
    getUser,
    getAllCustomers,
};
