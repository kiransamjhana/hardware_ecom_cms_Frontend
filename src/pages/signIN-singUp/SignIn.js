import React from "react";
import { Footer } from "../../components/layout/layout/Footer";
import Header from "../../components/layout/layout/Header";
import { LogIn } from "../../components/logInForm/LogIn";

export const SignIn = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <LogIn />
      </main>

      <Footer />
    </div>
  );
};
