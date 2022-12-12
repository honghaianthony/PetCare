import axiosInstance from "./axiosInstance";

const getAllUsers = async () => {
    return await axiosInstance.get("/user/get-all-users");
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

export { getUserById, getAllUsers, updateUserRole, updateUser, deleteUser };