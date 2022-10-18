import axiosInstance from "./axiosInstance";

const postLogin = async (data) => {
    return await axiosInstance
        .post("/login", data)
        .then((response) => {
            return response;
        })
        .catch(() => {
            return { success: false };
        });
};

const register = async (data) => {
    return await axiosInstance.post("/register", data);
};

export { postLogin, register };
