import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if ((name || "").trim() === "" || (password || "").trim() === "" || (email || "").trim() === "") {
      toast.error("Please provide details to create an account");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((u) => u.email === email);

    if (userExists) {
      toast.error("User already exists");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    toast.success("Signup successful!");
    navigate("/"); // redirect to dashboard
  };

  const polygonVarient = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: 'easeInOut' } },
  };

  return (
    <div
      className="login"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      {/* Logo 4rem from left */}
      <div
        className="login-logo"
       
      >
        <svg width="150" height="70" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
          <motion.polygon
            points="10,40 30,10 50,40 40,40 30,25 20,40"
            fill="none"
            stroke="white"
            strokeWidth="2"
            variants={polygonVarient}
            initial="hidden"
            animate="visible"
          />
          <motion.polygon
            points="50,40 70,10 90,40 80,40 70,25 60,40"
            fill="none"
            stroke="white"
            strokeWidth="2"
            variants={polygonVarient}
            initial="hidden"
            animate="visible"
          />
          <text
            x="100"
            y="32"
            fontFamily="Arial, sans-serif"
            fontSize="2rem"
            fill="none"
            stroke="white"
          >
            Legendtech
          </text>
        </svg>
      </div>

      <h1>Sign up</h1>
      <h3>Create a new account</h3>

      <input
        type="text"
        placeholder="Name"
        className="user-input"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="user-input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="user-input"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="login-btn" onClick={handleSignup}>
        Sign up
      </button>

      <div className="divider"><span>OR</span></div>

      <button className="google-btn">
        <FcGoogle /> Continue with google &rarr;
      </button>

      <p style={{ color: "white" }}>
        Already have an account? <Link to='/LoginPage'> Login</Link>
      </p>

      <ToastContainer position="top-right" autoClose={1000} 
                hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              style={{ maxWidth: "350px" }}/>
    </div>
  );
}

export default SignupPage;