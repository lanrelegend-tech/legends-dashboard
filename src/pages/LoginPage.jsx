
import React,{ useState } from "react";
import { FcGoogle } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate,Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  


  
  const handleLogin = () => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };
  
  return (
    <div className="login">
        <h1>Welcome back</h1>
        <h3 >Sign into your account</h3>
        <div>
        <input
          type="email"
          
          placeholder="Email" className="user-input" onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <input
          type="password"
          
          placeholder="Password" className="user-input" onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div>
        <button type="submit" className="login-btn"
         onClick={handleLogin}
         >Login</button>
        </div>
    
      <div>
        <div className="divider">
      <span>OR</span></div>
      <button className="google-btn">
        <span><FcGoogle/></span>
  <span>Continue with Google</span>
  <span>&rarr;</span>
</button>
      <p style={{color:"white"}}>Dont have an account?<Link to='/SignupPage'> Sign up</Link></p>
      </div>

       <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
    
  );
}

export default LoginPage;