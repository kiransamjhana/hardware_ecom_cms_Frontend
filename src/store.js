import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../src/pages/admin-user/adminSlice.js";

import systemReducer from "../src/system/systemSlice.js";
export const store = configureStore({
  reducer: {
    system: systemReducer,
    adminInfo: adminReducer,
  },
});
