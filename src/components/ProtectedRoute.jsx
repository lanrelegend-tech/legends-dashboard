import React from "react";
import { Navigate } from "react-router-dom";

// This component checks if the user is logged in
function ProtectedRoute({ children }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  // If not logged in, redirect to login
  if (!currentUser) {
    return <Navigate to="/LoginPage" />;
  }

  // If logged in, show the page
  return children;
}

export default ProtectedRoute;