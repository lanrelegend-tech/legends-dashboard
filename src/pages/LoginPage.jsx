import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../components/Spinner"; // your polygon spinner

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // spinner off by default

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

    // Show spinner only after clicking LOGIN
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("loginTime", Date.now());
      setLoading(false);
      navigate("/"); // redirect to dashboard
    }, 6000); // simulate login delay
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
        minHeight: "80vh",
        padding: 20
      }}
    >
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

      <button type="button" className="login-btn" onClick={handleLogin}>
        LOGIN
      </button>

      <div className="divider"><span>OR</span></div>
      <button className="google-btn">
        <FcGoogle /> Continue with google &rarr;
      </button>

      <p style={{ color: "white" }}>
        Don't have an account? <Link to='/SignupPage'> SIGN UP</Link>
      </p>

      <ToastContainer position="top-right" autoClose={3000} />

      {/* Spinner Overlay */}
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 1, bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.44)",
            zIndex: 10
          }}
        > <div style={{ transform: "translateX(10rem)" }}>
          <Spinner />
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;