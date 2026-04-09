import React from 'react'
import ProjectSummary from '../components/ProjectSummary';
import Sidebar from '../components/Sidebar';
import MobileSidebar from "../components/MobileSidebar";
import { motion } from "framer-motion";



function ProjectPage() {
  const containerVariants ={
    hidden:{
      opacity:'0',
    },
    visible:{
      opacity:'1',
      transition: {delay:1.5,duration:1}
    },
    exit :{
      x:'100vw',
      transition:{ease:'easeInOut'}
    }
  }
  return (
    <div> 
        <Sidebar/>
        <MobileSidebar/>
        <motion.div className='main'
        variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
            <div className='project-page'>
            <ProjectSummary/>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectPage;