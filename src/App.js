import { SignIn } from "./pages/signIN-singUp/SignIn";
import { SignUp } from "./pages/signIN-singUp/SignUp";
import React from "react";
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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/new-admin" element={<SignUp />} />
        <Route path="/admin-verification" element={<VerifiyAdmin />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/catagory" element={<Catagory />} />
        <Route path="/product" element={<Product />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/admin-user" element={<AdminUser />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
