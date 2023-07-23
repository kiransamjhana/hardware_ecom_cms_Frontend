import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";
import { Sidebar } from "../../sidebar/Sidebar";

export const AdminLayout = ({ children, title }) => {
  return (
    <div className="admin-layout">
      <div className="side-bar bg-dark text-light">
        <Sidebar />
      </div>
      <main className="main">
        <Header />
        <Container>
          <div className="mt-3">
            <h3> {title}</h3>
          </div>
        </Container>
        <div className="page-content">{children}</div>

        <Footer />
      </main>
    </div>
  );
};
