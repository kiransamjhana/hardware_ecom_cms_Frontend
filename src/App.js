import { SignIn } from "./pages/signIN-singUp/SignIn";
import { SignUp } from "./pages/signIN-singUp/SignUp";
import React, { useEffect } from "react";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { VerifiyAdmin } from "./pages/verifyEmail/VerifiyAdmin";
import { DashBoard } from "./pages/dashbod/DashBoard";
import { Product } from "./pages/product/Product";
import { Payment } from "./pages/payment/Payment";
import { Order } from "./pages/order/Order";
import { AdminUser } from "./pages/admin-user/AdminUser";
import { Catagory } from "./pages/Catagory/Catagory";
import { Customer } from "./pages/customer/Customer";
import { Profile } from "./pages/profile/Profile";
import { useDispatch } from "react-redux";
import { getCatsAction } from "./pages/Catagory/categoryAction";
import { PrivateRoute } from "./components/private/PrivateRoute";
import { NewProuduct } from "./pages/product/NewProuduct";
import { getProductsAction } from "./pages/product/productAction";
import EditProduct from "./pages/product/EditProduct";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsAction());
    dispatch(getProductsAction());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/new-admin"
          element={
            <PrivateRoute>
              <SignUp />
            </PrivateRoute>
          }
        />
        <Route path="/admin-verification" element={<VerifiyAdmin />} />

        <Route
          path="/dashbord"
          element={
            <PrivateRoute>
              {" "}
              <DashBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/category"
          element={
            <PrivateRoute>
              {" "}
              <Catagory />
            </PrivateRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              {" "}
              <Product />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/new-product"
          element={
            <PrivateRoute>
              {" "}
              <NewProuduct />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="product/edit/:_id"
          element={
            <PrivateRoute>
              <EditProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment-option"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route
          path="/customer"
          element={
            <PrivateRoute>
              <Customer />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin-user"
          element={
            <PrivateRoute>
              <AdminUser />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
