import React from "react";
import { RxDashboard } from "react-icons/rx";
import { GrProjects } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { SiLogitech } from "react-icons/si";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";

 function Sidebar() {
  return (
    <div className="sidebar">
        <h1><SiLogitech />legendtech</h1>
        <h2><IoMdAddCircleOutline />Create new project</h2>
        
            <p><RxDashboard />Dashboard</p>
            <p> <GrProjects /> Projects</p>
            <p><FaTasks />Tasks</p>
            <p><SlCalender />Calender</p>
            <p><CiSettings />settings</p>
        
        <h3><IoMdHelpCircleOutline /></h3>
    </div>
    
  )
}
export default Sidebar;

