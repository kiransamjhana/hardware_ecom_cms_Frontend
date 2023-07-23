import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React from "react";
function Header() {
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Container>
        <Link href="/" className="navbar-brand">
          Hardware_estore
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/dashbord" className="nav-link">
              Dashboard
            </Link>
            <Link to="/" className="nav-link">
              SignIn
            </Link>
            <Link to="/new-admin" className="nav-link">
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
