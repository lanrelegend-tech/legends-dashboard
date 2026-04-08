import React from "react";
import MobileSidebar from "../components/MobileSidebar";
import Searchbar from "../components/Searchbar";
import Task from "../components/Task";
import Projects from "../components/Projects";
import Totalrevenue from "../components/Totalrevenue";
import Time from "../components/Time";
import ProjectSummary from "../components/ProjectSummary";
import Dashboard from "../components/Dashboard";
import TaskSumarry from "../components/TaskSumarry";
import {motion} from "framer-motion" ;
import MainPageSkeleton from "../components/MainPageSkeleton"; // adjust path if needed
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Mainpage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // 👇 THIS SWITCHES BETWEEN SKELETON AND REAL UI
  if (loading) {
    return <MainPageSkeleton />;
  }

  
  return (
  
      <div className="app">
          <MobileSidebar /> 
          <Sidebar/>
        <div className="main">
          <Searchbar />
          <motion.div className="overview"
            initial={{ x: 200, opacity: 0 }}     // start off to the right
      animate={{ x: 0, opacity: 1 }}       // slide to position
      transition={{ duration: 0.5 }}       // slide duration
      style={{
      
        padding: "2rem",
        marginBottom: "1rem",
      }}
    >
            <Projects />
            <Task />
            <Time />
            <Totalrevenue />
          </motion.div>

          <motion.div className="project-flex"
            initial={{ x: 200, opacity: 0 }}     // start off to the right
      animate={{ x: 0, opacity: 1 }}       // slide to position
      transition={{ duration: 0.5 }}       // slide duration
      style={{
        display: "flex",

      }}
    >
            <ProjectSummary limit={3} />
            <motion.div
  className="doughnut-chart"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  style={{ width: "200px", margin: "2rem auto" ,padding:'2rem',marginRight:'1rem'}}
>
  
            <Dashboard />
            </motion.div>
          </motion.div>

          <motion.div className="task-summary"
            initial={{ y: 200, opacity: 0 }}     // start off to the right
      animate={{ y: 0, opacity: 1 }}       // slide to position
      transition={{ duration: 0.5 }}       // slide duration
      style={{
        display: "flex",

      }}
    >
            <TaskSumarry limit={2} />
          </motion.div>
        </div>
      </div>

  );
}

export default Mainpage;