import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../src/pages/admin-user/adminSlice.js";
export const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
  },
});
