import React from 'react'

function TaskSumarry() {
  return (
    <div className="task-card">
      <h3>Task Summary</h3>

    
      <div className="filters">
        <button className="filter-btn active" style={{color:'black'}}>All</button>
        <button className="filter-btn" style={{color:'black'}}>Active</button>
        <button className="filter-btn" style={{color:'black'}}>Inactive</button>
        <button className="filter-btn" style={{color:'black'}}>Add Task</button>
      </div>

    
      <div className="task-row">
        <span><input type='checkbox'></input>Design Homepage</span>
        <div className="actions">
          <button className="btn view">View</button>
          <button className="btn edit">Edit</button>
          <button className="btn delete">Delete</button>
        </div>
      </div>

      <div className="task-row">
        <span><input type='checkbox'></input>Fix Bugs</span>
        <div className="actions">
          <button className="btn view">View</button>
          <button className="btn edit">Edit</button>
          <button className="btn delete">Delete</button>
        </div>
      </div>
    </div>
  )
}




export default TaskSumarry;