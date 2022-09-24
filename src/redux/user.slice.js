import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: "Hải",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.currentUser = action.payload;
    },
    logout(state) {
      state.currentUser = undefined;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
