import React from 'react'
import ProjectSummary from '../components/ProjectSummary';
import Sidebar from '../components/Sidebar';
import MobileSidebar from "../components/MobileSidebar";


function ProjectPage() {
  return (
    <div> 
        <Sidebar/>
        <MobileSidebar/>
        <div className='main'>
            <div className='project-page'>
            <ProjectSummary/>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage;