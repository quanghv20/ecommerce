/** React */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("token");
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
