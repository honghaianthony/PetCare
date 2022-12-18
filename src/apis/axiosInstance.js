import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    // baseURL: "http://localhost:5000/api/v1",
    baseURL: "https://petcare-be.vercel.app/api/v1",
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
    "token"
)}`;

axiosInstance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;
