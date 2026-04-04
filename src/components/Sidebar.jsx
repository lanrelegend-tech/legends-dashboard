import React from "react";
import { RxDashboard } from "react-icons/rx";
import { GrProjects } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { SiLogitech } from "react-icons/si";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

 function Sidebar() {
    const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem("currentUser"); // log out
    navigate("/LoginPage", { replace: true });   // go to login page
  };


  
  return (
    <div className="sidebar">
        <h1><SiLogitech />legendtech</h1>
        <h2><IoMdAddCircleOutline />Create new project</h2>
        
            <p onClick={() => navigate("/")}><RxDashboard />Dashboard</p>
            <p onClick={() => navigate ("/ProjectPage")}> <GrProjects /> Projects</p>
            <p onClick={() => navigate ("/TaskPage")}><FaTasks />Tasks</p>
            <p><SlCalender />Calender</p>
            <p onClick={() => navigate("/Profile")}><CiSettings />settings</p>
            <p onClick={handleLogout}><CiLogout />Logout</p>
        
    </div>
    
  )
}
export default Sidebar;

