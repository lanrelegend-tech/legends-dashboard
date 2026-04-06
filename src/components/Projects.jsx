import React, { useContext } from 'react';
import { GrProjects } from "react-icons/gr";
import { AppContext } from './AppContext';

function Projects() {
  const { projects } = useContext(AppContext);

  return (
    <div id='Projects' className='overviewcard'>
        <div><GrProjects /></div>
        <h1>Projects</h1>
        <h2>{projects.length}</h2>
    </div>
  )
}

export default Projects;