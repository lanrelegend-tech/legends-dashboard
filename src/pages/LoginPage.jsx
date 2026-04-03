
import React,{ useState } from "react";
import { FcGoogle } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password,setPassword] = useState("");


  
  const handleLogin = () => {
      if ((name || "").trim() === "" || (password || "").trim() === "") {
      toast.error("Please enter both Name and Email"); 
      return;
      }
localStorage.setItem("name",name);
localStorage.setItem("password",password);

    navigate("/MainPage");
  };
  
  return (
    <div className="login">
        <h1>Welcome back</h1>
        <h3 >Sign into your account</h3>
        <div>
        <input
          type="name"
          
          placeholder="Name" className="user-input" onChange={(e) => setName(e.target.value)}
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
      <p style={{color:"white"}}>Dont have an account? Sign up</p>
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