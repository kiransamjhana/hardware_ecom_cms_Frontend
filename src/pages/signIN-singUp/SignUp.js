import React from "react";
import Header from "../../components/layout/layout/Header";
import { AdminSignUp } from "../../components/admin-signUp/AdminSignUp";

export const SignUp = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <AdminSignUp />
      </main>
    </div>
  );
};
