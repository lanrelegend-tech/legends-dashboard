import React,{ useState } from "react";
import { FcGoogle } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password,setPassword] = useState("");
  const [email, setEmail] = useState("");


  
  const handleLogin = () => {
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


    navigate("/");
  };
  
  return (
    <div className="login">
        <h1>Sign up</h1>
        <h3 >Create a new account</h3>
        <div>
        <input
          type="name"
          
          placeholder="Name" className="user-input" onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div>
            <input
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
         >Sign up</button>
        </div>
    
      <div>
        <div className="divider">
      <span>OR</span></div>
      <button className="google-btn">
        <span><FcGoogle/></span>
  <span>Continue with Google</span>
  <span>&rarr;</span>
</button>
      <p style={{color:"white"}}>have an account?<Link to='/LoginPage'> Login</Link></p>
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

export default SignupPage;