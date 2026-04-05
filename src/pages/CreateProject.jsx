import React from 'react'
import Sidebar from '../components/Sidebar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

function CreateProject() {
  const [formData, setFormData] = React.useState({
    projectName: '',
    projectManager: '',
    dueDate: '',
    deposit: '',
    priority: 'low',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = (e) => {    
    e.preventDefault();
    const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const updatedProjects = [ formData , ...existingProjects ];
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    toast.success('Project created successfully!');
    setFormData({
      projectName: '',
      projectManager: '',
      dueDate: '',
      deposit: '',
      priority: 'low',
      description: ''
    });
  };
  return (
  
    <div >
      <Sidebar />
      <div >
      <form className="create-project-form" onSubmit={handleSubmit}>
          <h2>Create New Project</h2>
      <div className="form-group">
        <label htmlFor="project-name">Project Name:</label>
        <input type="text" value={formData.projectName} onChange={handleChange} id="projectName" className="project-input" required />
        <label htmlFor="project-manager">Project Manager:</label>
        <input type="text" value={formData.projectManager} onChange={handleChange} id="projectManager" className="project-input" required />
        <label htmlFor="project-due-date">Due date:</label>
        <input type="date" value={formData.dueDate} onChange={handleChange}  id="dueDate" className="project-input" required />
        <label htmlFor="project-deposit">Deposit:</label>
        <input type='text' value={formData.deposit} onChange={handleChange} id='deposit' className='project-input' required />
        <label htmlFor="project-priority">Priority:</label>
        <select value={formData.priority} onChange={handleChange} id="priority" className="project-input">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="project-description">Description:</label>
        <textarea value={formData.description} onChange={handleChange} id="description" name="project-description" rows="4"></textarea>
      </div>
      <button type="submit" className='create-btn'
      
  >Create Project</button>
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