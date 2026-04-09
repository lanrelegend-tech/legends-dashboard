import React from 'react'
import TaskSumarry from '../components/TaskSumarry'
import Sidebar from '../components/Sidebar'
import MobileSidebar from "../components/MobileSidebar";
import Task from '../components/Task';
import {motion} from "framer-motion" ;


function TaskPage() {
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
        <TaskSumarry />
        </motion.div>

    </div>
  );
}

export default TaskPage;