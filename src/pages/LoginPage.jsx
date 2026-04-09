import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../components/Spinner"; // your polygon spinner
import { motion } from "framer-motion";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      toast.error("Invalid email or password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("loginTime", Date.now());
      setLoading(false);
      navigate("/");
    }, 6000);
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
        <svg  width="150" height="70" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
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

      <h1>Welcome back</h1>
      <h3>Sign into your account</h3>

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

      <motion.button type="button" className="login-btn" onClick={handleLogin}
      whileHover={{
        scale:1.1,
        boxShadow:"0px 0px 8px rgb(255,255,255)",
      }}>
        LOGIN
      </motion.button>

      <div className="divider"><span>OR</span></div>

      <button className="google-btn">
        <FcGoogle /> Continue with google &rarr;
      </button>

      <p style={{ color: "white" }}>
        Don't have an account? <Link to='/SignupPage'> Sign up</Link>
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

      {/* Spinner Overlay */}
      {loading && (
        
          <Spinner />
          
      )}
    </div>
  );
}

export default LoginPage;