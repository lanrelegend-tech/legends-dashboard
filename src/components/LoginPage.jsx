
import React from "react";

function LoginPage({ onLogin }) {
  return (
    <div className="login">
        <h1>Welcome back</h1>
        <h3 style={{color:"white"}}>Sign into your account</h3>
        <div>
        <input
          type="email"
          placeholder="Email" className="user-input"
        />
        </div>
        <div>
        <input
          type="password"
          placeholder="Password" className="user-input"
        />
        </div>
        <div>
        <button type="submit" className="login-btn">Login</button>
        </div>
    
      <div>
        <div className="divider">
      <span>OR</span></div>
      <button className="google-btn">
  <span>Continue with Google</span>
  <span>&rarr;</span>
</button>
      <p style={{color:"white"}}>Dont have an account? Sign up</p>
      </div>
    </div>
  );
}

export default LoginPage;