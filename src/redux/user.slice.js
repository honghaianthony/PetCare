import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const initialState = {
    isAuthenticated: false,
    userId: -1,
    userName: null,
    role: -1,
    fullName: "",
    avatar: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reload(state) {
            const token = Cookies.get("token");
            if (token) {
                const infoReload = jwt_decode(token);
                state.isAuthenticated = true;
                state.userId = infoReload.userId;
                state.userName = infoReload.userName;
                state.role = infoReload.role;
                state.fullName = infoReload.fullName;
                state.avatar = infoReload.avatar;
            } else {
                state.isAuthenticated = false;
                state.userId = -1;
                state.userName = null;
                state.role = -1;
                state.fullName = "";
                state.avatar = "";
            }
        },
        login(state, action) {
            Cookies.set("token", action.payload, { expires: 1 });
            const info = jwt_decode(action.payload);
            state.isAuthenticated = true;
            state.userId = info.userId;
            state.userName = info.userName;
            state.role = info.role;
            state.fullName = info.fullName;
            state.avatar = info.avatar;
        },
        logout(state) {
            Cookies.remove("token");
            state.isAuthenticated = false;
            state.userId = -1;
            state.userName = null;
            state.role = -1;
            state.fullName = "";
            state.avatar = "";
        },
    },
});

export const { login, logout, reload } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
