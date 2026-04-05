
import {useState,useEffect} from 'react'

function ProjectSummary({limit}) {
  const [projects, setProjects] = useState([]);

useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);
  }, []);
  const displyedProjects =  limit ? projects.slice(0, limit) : projects;
  
  const handleStatusChange = (projectId, newStatus) => {
    const updatedProjects = projects.map(project =>
      project.id === projectId ? { ...project, status: newStatus } : project
    );
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };
  return (
    <div className='table-summary'>
      <h2>Project Summary</h2>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Project Maneger</th>
              <th>Due date</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {displyedProjects.map((project) => (
              <tr key={project.id}>
                <td>{project.projectName}</td>
                <td>{project.projectManager}</td>
                <td>{project.dueDate}</td>
            
                <td>{project.priority}

                </td>
                <td>
                  <select value={project.status} onChange={(e) => handleStatusChange(project.id, e.target.value)}>
                    <option value="Completed" className='completed'>Completed</option>
                    <option value="In Progress" className='on-going'>In Progress</option>
                    <option value="Pending" className='pending'>Pending</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectSummary;
            