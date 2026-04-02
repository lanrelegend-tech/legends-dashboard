import React from 'react'


function Dashboard() {
  
  return (
    <div className="overview-card">
      <h3>Project progress</h3>
      <div className='progress-container'>
        <div className='semi-circle'></div>
        <div className='progress'></div>

        <div className='text'>
          <h2>40%</h2>
        </div>
      </div>

      <div className='legends'>
        <span>
          <i className='completed'></i>Completed
        </span>
        <span>
          <i className='ongoing'></i>ongoing
        </span>
        <span>
          <i className='pending'></i>Pending
        </span>
      </div>
    </div>
  );
}




export default Dashboard;