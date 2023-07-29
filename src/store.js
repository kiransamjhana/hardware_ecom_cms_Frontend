import { configureStore, createReducer } from "@reduxjs/toolkit";
import adminReducer from "../src/pages/admin-user/adminSlice.js";
import CatReucer from "./pages/Catagory/categorySlice.js";
export const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    catInfo: createReducer,
  },
});
