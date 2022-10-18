import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const initialState = {
    isAuthenticated: false,
    userId: -1,
    userName: null,
    role: -1,
    fullName: "",
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
                // return {
                //     isAuthenticated: true,
                //     userId: infoReload.userId,
                //     userName: infoReload.userName,
                //     role: infoReload.role,
                //     fullName: infoReload.fullName,
                // };
            } else {
                state.isAuthenticated = false;
                state.userId = -1;
                state.userName = null;
                state.role = -1;
                state.fullName = "";
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
            // return {
            //     isAuthenticated: true,
            //     userId: info.userId,
            //     userName: info.userName,
            //     role: info.role,
            //     fullName: info.fullName,
            // };
        },
        logout(state) {
            Cookies.remove("token");
            state.isAuthenticated = false;
            state.userId = -1;
            state.userName = null;
            state.role = -1;
            state.fullName = "";
        },
    },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
