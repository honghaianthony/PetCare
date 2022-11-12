import { configureStore } from "@reduxjs/toolkit";
import { productReducer, userReducer } from "./redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});
