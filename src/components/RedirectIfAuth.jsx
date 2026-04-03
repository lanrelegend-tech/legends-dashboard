import React from "react";
import { Navigate } from "react-router-dom";

function RedirectIfAuth({ children }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // If user is logged in, redirect to dashboard
  if (currentUser) {
    return <Navigate to="/" />;
  }

  // Otherwise, show the page
  return children;
}

export default RedirectIfAuth;