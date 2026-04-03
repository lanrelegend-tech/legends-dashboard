import React from 'react'
import ProjectSummary from '../components/ProjectSummary';
import Sidebar from '../components/Sidebar';


function ProjectPage() {
  return (
    <div> 
        <Sidebar/>
        <div className='main'>
            <div className='project-page'>
            <ProjectSummary/>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage;