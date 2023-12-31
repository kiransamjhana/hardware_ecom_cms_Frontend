import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { admins } = useSelector((state) => state.adminInfo);
  console.log(admins);
  return admins?._id ? (
    children
  ) : (
    <Navigate to="/" state={{ from: { location } }} />
  );
};
