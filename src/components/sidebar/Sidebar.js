import React from "react";
import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";

export const Sidebar = () => {
  return (
    <div className="side-bar bg-dark text-litght p-3">
      <p className="mt-3 text-center">Admin Panel</p>
      <hr />

      <nav>
        <ul className="list-unstyled">
          <li>
            <Link className="nav-link" to="/dashboard">
              <AiFillDashboard /> Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/catagory">
              <BiCategoryAlt />
              Category
            </Link>

            <li>
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
          </li>
          <li>
            <Link className="nav-link" to="/payment">
              <AiFillDashboard />
              Payment
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/order">
              <AiFillDashboard />
              Order
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/customer">
              <AiFillDashboard />
              Customer
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/admin-user">
              <AiFillDashboard />
              Add New Admin
            </Link>
          </li>
          <hr />
          <li>
            <Link className="nav-link" to="/profile">
              <AiFillDashboard />
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
