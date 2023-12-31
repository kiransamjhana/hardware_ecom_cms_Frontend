import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../src/pages/admin-user/adminSlice";
import catReducer from "../src/pages/Catagory/categorySlice";
import poReducer from "../src/pages/payment/PayOptionSlice";
import systemReducer from "../src/system/systemSlice";
import productReducer from "../src/pages/product/productSlice";
export const store = configureStore({
  reducer: {
    system: systemReducer,
    adminInfo: adminReducer,
    catInfo: catReducer,
    poInfo: poReducer,
    productInfo: productReducer,
  },
});
