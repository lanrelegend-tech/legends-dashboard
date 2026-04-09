import React, { useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../components/AppContext";
import MobileSidebar from "../components/MobileSidebar";
import { motion } from "framer-motion";

function CreateProject() {
  const { projects, setProjects } = useContext(AppContext); // Get context

  const [formData, setFormData] = useState({
    projectName: "",
    projectManager: "",
    dueDate: "",
    deposit: "",
    priority: "low",
    description: "",
    status: "pending", // initial status
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle project submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      ...formData,
      id: Date.now(),
      deposit: parseFloat(formData.deposit) || 0,
    };

    const updatedProjects = [newProject, ...projects];

    // Update context (this also updates localStorage automatically)
    setProjects(updatedProjects);

    toast.success("Project created successfully!");

    // Reset form
    setFormData({
      projectName: "",
      projectManager: "",
      dueDate: "",
      deposit: "",
      priority: "low",
      description: "",
      status: "pending",
    });
  };
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
      <Sidebar />
      <MobileSidebar/>
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
        <form className="create-project-form" onSubmit={handleSubmit}>
          <h2>Create New Project</h2>
          <div className="form-group">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              style={{fontSize:'1.3rem'}}
              value={formData.projectName}
              onChange={handleChange}
              id="projectName"
              required
            />

            <label htmlFor="projectManager">Project Manager:</label>
            <input
              type="text"
              style={{fontSize:'1.3rem'}}
              value={formData.projectManager}
              onChange={handleChange}
              id="projectManager"
              required
            />

            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              value={formData.dueDate}
              style={{fontSize:'1rem'}}
              onChange={handleChange}
              id="dueDate"
              required
            />

            <label htmlFor="deposit">Deposit:</label>
            <div className="input-wrapper">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                style={{fontSize:'1.3rem'}}
                value={formData.deposit}
                onChange={handleChange}
                rows={5}
                id="deposit"
                required
                
              />
            </div>

            <label htmlFor="priority">Priority:</label>
            <select
              value={formData.priority}
              style={{fontSize:'1.3rem'}}
              onChange={handleChange}
              id="priority"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description"
            
            >Description:</label>
            <textarea
              value={formData.description}
              onChange={handleChange}
               style={{fontSize:'16px',padding:'0.4rem'}}
              id="description"
              rows={5}
            />
          </div>

          <motion.button type="submit" className="create-btn"
          whileHover={{
        scale:1.1,
        boxShadow:"0px 0px 8px rgb(255,255,255)",}}>
          
            Create Project
          </motion.button>
        </form>
      </motion.div>

      <ToastContainer position="top-right" autoClose={1000} 
                hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              style={{ maxWidth: "350px" }}/>
    </div>
  );
}

export default CreateProject;