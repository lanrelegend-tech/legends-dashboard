import React, { useState,useEffect}from 'react'
import { SiThestorygraph } from "react-icons/si";
import ProjectSummary from './ProjectSummary';

function Totalrevenue() {
  const[projects,setProjects] = useState([]);

useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);
  }, []);
  const totalRevenue = projects.reduce((sum, project) => {
    return sum + (parseFloat(project.deposit) || 0);
  }, 0);
  return (
    <div id='totalrevenue' className='overviewcard'>
        <div><SiThestorygraph /></div>
        <h1>Total revenue</h1>
        <h2>${totalRevenue.toLocaleString()}</h2>

    </div>
  )
}

export default Totalrevenue;