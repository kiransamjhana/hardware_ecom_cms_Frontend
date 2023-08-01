import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../../../helper/axios";
import { setAdmins } from "../../../pages/admin-user/adminSlice";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { admins } = useSelector((state) => state.adminInfo);
  const handleOnLogout = () => {
    // log out from server by removing the access and refresh JWTs

    logoutAdmin(admins._id);

    //clear storages
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");

    // reset store
    dispatch(setAdmins({}));
    navigate("/");
  };
  return (
    <div>
      <Navbar expand="md" variant="dark" className="bg-dark">
        <Container>
          <Link to="/" className="navbar-brand">
            E-Store
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {admins?._id ? (
                <>
                  <Link to="/dashbord" className="nav-link">
                    Dashboard
                  </Link>
                  <Link to="#!" className="nav-link" onClick={handleOnLogout}>
                    Sign Out
                  </Link>
                </>
              ) : (
                <Link to="/" className="nav-link">
                  Sign In
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
