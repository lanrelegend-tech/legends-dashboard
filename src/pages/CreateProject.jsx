import React from 'react'
import Sidebar from '../components/Sidebar';

function CreateProject() {
  return (
    <div >
      <Sidebar />
      <div >
      <form className="create-project-form">
          <h2>Create New Project</h2>
      <div className="form-group">
        <label htmlFor="project-name">Project Name:</label>
        <input type="text" id="project-name" className="project-input" required />
        <label htmlFor="project-manager">Project Manager:</label>
        <input type="text" id="project-manager" className="project-input" required />
        <label htmlFor="project-due-date">Due date:</label>
        <input type="date" id="project-due-date" className="project-input" required />
        <label htmlFor="project-deposit">Deposit:</label>
        <input type='text' id='project-deposit' className='project-input' required />
        <label htmlFor="project-priority">Priority:</label>
        <select id="project-priority" className="project-input">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="project-description">Description:</label>
        <textarea id="project-description" name="project-description" rows="4"></textarea>
      </div>
      <button type="submit" className='create-btn'
      onClick={}>Create Project</button>
    </form>
    </div>
    </div>
  );
}

export default CreateProject;