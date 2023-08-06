import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../src/pages/admin-user/adminSlice";
import catReducer from "../src/pages/Catagory/categorySlice";

import systemReducer from "../src/system/systemSlice";
export const store = configureStore({
  reducer: {
    system: systemReducer,
    adminInfo: adminReducer,
    catInfo: catReducer,
  },
});
