
import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn’t exist.</p>
      <button 
        onClick={() => navigate("/")} 
        style={{
          padding: "0.5rem 1rem",
          marginTop: "1rem",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Go Back Home
      </button>
    </div>
  );
}

export default NotFoundPage;