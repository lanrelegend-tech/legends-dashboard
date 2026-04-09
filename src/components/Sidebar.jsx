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
import { easeInOut, motion } from 'framer-motion';
import { s } from "framer-motion/client";
import { AppContext } from "./AppContext";


 function Sidebar() {
    const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem("currentUser"); // log out
    navigate("/LoginPage", { replace: true });   // go to login page
  };

  const svgVariants = {
    hidden: { rotate: -180},
    visible: { rotate: 0, transition: { duration: 0.5 } },
  };
const polygonVarient ={
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1, transition:{duration:2,ease:'easeInOut'}},

}

  
  return (
    <div className="sidebar">
       <div className="sidebar-logo" style={{ marginBottom: "30px" }}>
       <svg width="150" height="70" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  
  <motion.polygon points="10,40 30,10 50,40 40,40 30,25 20,40" fill="none" stroke="white" strokeWidth="2"
  variants={polygonVarient}
  initial="hidden"
  animate="visible"/>
  

  <motion.polygon points="50,40 70,10 90,40 80,40 70,25 60,40" fill="none" stroke="white" strokeWidth="2"
  variants={polygonVarient}
  initial="hidden"
  animate="visible"/>


  <text x="100" y="32" fontFamily="Arial, sans-serif"  fill="none" stroke="white" >
    Legendtech
  </text>
</svg>
      </div>
      <div className="sidebar-menu">
        <p onClick={() => navigate("/CreateProject")} style={{fontSize:'0.7rem'}}> <IoMdAddCircleOutline />Create project</p>
        
            <p onClick={() => navigate("/")}><RxDashboard />Dashboard</p>
            <p onClick={() => navigate ("/ProjectPage")}> <GrProjects /> Projects</p>
            <p onClick={() => navigate ("/TaskPage")}><FaTasks />Tasks</p>
            <p><SlCalender />Calender</p>
            <p onClick={() => navigate("/Profile")}><CiSettings />settings</p>
            <p onClick={handleLogout}><CiLogout />Logout</p>
        </div>
    </div>
    
  )
}
export default Sidebar;

