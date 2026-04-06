import React, { useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../components/AppContext";

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

  return (
    <div>
      <Sidebar />
      <div>
        <form className="create-project-form" onSubmit={handleSubmit}>
          <h2>Create New Project</h2>
          <div className="form-group">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              value={formData.projectName}
              onChange={handleChange}
              id="projectName"
              required
            />

            <label htmlFor="projectManager">Project Manager:</label>
            <input
              type="text"
              value={formData.projectManager}
              onChange={handleChange}
              id="projectManager"
              required
            />

            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              value={formData.dueDate}
              onChange={handleChange}
              id="dueDate"
              required
            />

            <label htmlFor="deposit">Deposit:</label>
            <div className="input-wrapper">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                value={formData.deposit}
                onChange={handleChange}
                id="deposit"
                required
              />
            </div>

            <label htmlFor="priority">Priority:</label>
            <select
              value={formData.priority}
              onChange={handleChange}
              id="priority"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              value={formData.description}
              onChange={handleChange}
              id="description"
              rows={4}
            />
          </div>

          <button type="submit" className="create-btn">
            Create Project
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default CreateProject;