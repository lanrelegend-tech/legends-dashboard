
import {useState,useEffect} from 'react'

function ProjectSummary({limit}) {
  const [projects, setProjects] = useState([]);

useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);
  }, []);
  const displayedProjects =  limit ? projects.slice(0, limit) : projects;
  
  const handleStatusChange = (projectId, newStatus) => {
    const updatedProjects = projects.map(project =>
      project.id === projectId ? { ...project, status: newStatus } : project
    );
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

   const handleDelete = (projectId) => {
    const updatedProjects = projects.filter(project => project.id !== projectId);
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
            {displayedProjects.map((project) => (
              <tr key={project.id}>
                <td>{project.projectName}</td>
                <td>{project.projectManager}</td>
                <td>{project.dueDate}</td>
            
                <td>{project.priority}

                </td>
                <td>
                  <select value={project.status} onChange={(e) => handleStatusChange(project.id, e.target.value)} className='selection'>
                    <option value="Pending" >Pending</option>
                    <option value="In Progress" >In Progress</option>
                    <option value="Completed" >Completed</option>
                  </select>
                </td>
                <td><button onClick={() => handleDelete(project.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}
                  >
                    Delete
                  </button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectSummary;
            