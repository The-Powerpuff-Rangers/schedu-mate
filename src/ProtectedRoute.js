import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, getUser } = UserAuth();

  const userData = getUser();

  console.log(userData);
  //   console.log(user.email);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
