import React, {useState,useEffect, use} from 'react';



function Dashboard({projects = []}) {
  const [projectsList,setProjectsList]=useState([]);
  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjectsList(JSON.parse(storedProjects));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projectsList));
  }, [projectsList]);
  const totalProjects = projectsList.length;
  const completed = projectsList.filter(project => project.status === 'completed');
  const inprogress = projectsList.filter(project => project.status === 'in-progress');
  const pending = projectsList.filter(project => project.status === 'pending');

  /* to %  */
  const completedPercent = totalProjects > 0 ? (completed.length / totalProjects) * 100 : 0; 
  const inprogressPercent = totalProjects > 0 ? (inprogress.length / totalProjects) * 100 : 0;
  const pendingPercent = totalProjects > 0 ? (pending.length / totalProjects) * 100 : 0;

  /* convert to degree*/
  const completedDegree = completedPercent * 1.8;
  const inprogressDegree = inprogressPercent * 1.8;
  const pendingDegree = pendingPercent * 1.8;

  const updatedProjectStatus = (id, newStatus) => {
    const updatedProjects = projectsList.map(project => {
      if (project.id === id) {
        return { ...project, status: newStatus };
      }
      return project;
    });
    setProjectsList(updatedProjects);
  };
  return (
    <div className="overview-card">
      <h3>Project progress</h3>
      <div className='progress-container'>
        <div className='semi-circle'
        style={{
          backgroundColor: `conic-gradient(
              #3498db 0deg ${completedDegree}deg,
              #f39c12 ${completedDegree}deg ${completedDegree + inprogressDegree}deg,
              #ccc ${completedDegree + inprogressDegree}deg 180deg
            )`,
            transition: "background 1s ease"
        }}
        ></div>

        <div className='text'>
          <h2>{Math.round(completedPercent)}%</h2>
        </div>
      </div>

      <div className='legends'>
        <span>
          <i className='completed'></i>Completed({completed.length})
        </span>
        <span>
          <i className='inprogress'></i>In Progress({inprogress.length})
        </span>
        <span>
          <i className='pending'></i>Pending({pending.length})
        </span>
      </div>
    </div>
  );
}




export default Dashboard;