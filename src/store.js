import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
