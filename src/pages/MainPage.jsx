import React from "react";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import Task from "../components/Task";
import Projects from "../components/Projects";
import Totalrevenue from "../components/Totalrevenue";
import Time from "../components/Time";
import ProjectSummary from "../components/ProjectSummary";
import Dashboard from "../components/Dashboard";
import TaskSumarry from "../components/TaskSumarry";
import {motion} from "framer-motion" ;

function Mainpage() {
  return (
  
      <div className="app">
        <Sidebar />
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
            <Dashboard />
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