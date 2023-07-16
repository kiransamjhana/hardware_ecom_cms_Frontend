import { SignIn } from "./pages/signIN-singUp/SignIn";
import { SignUp } from "./pages/signIN-singUp/SignUp";
import React from "react";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/new-admin" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
