import React from "react";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import Task from "../components/Task";
import Projects from "../components/Projects";
import Totalrevenue from "../components/Totalrevenue";
import Time from "../components/Time";
import ProjectSummary from "../components/ProjectSummary";
import  Dashboard from "../components/Dashboard";
import TaskSumarry from "../components/TaskSumarry";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  

  return (
    <div className="app">
      <Sidebar/>
      <div className="main">
        <Searchbar/>
        <div className="overview">
          <Projects/>
          <Task/>
          <Time/>
          <Totalrevenue/>
        </div>
        <div className="project-flex">
          <ProjectSummary/>
          <Dashboard/>
        </div>
        <TaskSumarry limit={2}/>
      </div>
   
</div>
  );
}

export default Mainpage;
