import React, { useContext } from "react";
import { AppContext } from "./AppContext"; // <- make sure the path is correct
import { RiDeleteBin6Line } from "react-icons/ri";

function ProjectSummary({ limit }) {
  const context = useContext(AppContext);

  if (!context) {
    return <div>Error: AppContext not found!</div>;
  }

  const { projects, setProjects } = context;

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  const handleStatusChange = (projectId, newStatus) => {
    const updatedProjects = projects.map((p) =>
      p.id === projectId ? { ...p, status: newStatus } : p
    );
    setProjects(updatedProjects);
  };

  const handleDelete = (projectId) => {
    const updatedProjects = projects.filter((p) => p.id !== projectId);
    setProjects(updatedProjects);
  };

  return (
    <div className="table-summary">
      <h2>Project Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Manager</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedProjects.map((project) => (
            <tr key={project.id}>
              <td>{project.projectName}</td>
              <td>{project.projectManager}</td>
              <td>{project.dueDate}</td>
              <td>{project.priority}</td>
              <td>
                <select
                  value={project.status}
                  onChange={(e) =>
                    handleStatusChange(project.id, e.target.value)
                  }
                >
                  <option value="pending">Pending</option>
                  <option value="inprogress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleDelete(project.id) } style={{background:'none',outline:'none',border:'none',color:'red'}}><RiDeleteBin6Line /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectSummary;