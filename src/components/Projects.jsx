import React from 'react'
import { GrProjects } from "react-icons/gr";
import { useState,useEffect } from 'react';

function Projects() {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjectCount(storedProjects.length);
  }, []);

  return (
    <div id='Projects' className='overviewcard'>
        <div><GrProjects /></div>
        <h1>Projects</h1>
        <h2>{projectCount}</h2>
    </div>
  )
}

export default Projects;