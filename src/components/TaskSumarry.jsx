import React, { useState } from 'react';

function TaskSummary() {
  // State to hold all tasks  

  const [tasks, setTasks] = useState([
    { id: 1, name: 'Design Homepage', completed: false },
    { id: 2, name: 'Fix Bugs', completed: false },
  ]);

  const [newTask, setNewTask] = useState(''); 
  const [filter, setFilter] = useState('all');
   "all", "active", "inactive"


  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const nextTask = {
      id: Date.now(), 
      name: newTask,
      completed: false,
    };

    setTasks([...tasks, nextTask]);
    setNewTask('');
  };

  const handleChange = (id, value) => {
    setTasks(tasks.map(t => t.id === id ? {...t, name: value} : t));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      setTasks(tasks.map(t => t.id === id ? {...t, isediting: false} : t));
    }
  };

  const getFilteredTasks = () => {
    return tasks.filter(task => {
      if (filter === "active") return task.completed;
      if (filter === "inactive") return !task.completed;
      return true; // "all"
    });
  };

  return (
    <div className="task-card">
      <h3>Task Summary</h3>

      {/* Filters */}
      <div className="filters">
        <button className="filter-btn active" style={{color:'black'}} onClick={() => setFilter('all')}>All</button>
        <button className="filter-btn" style={{color:'black'}} onClick={() => setFilter('active')}>Active</button>
        <button className="filter-btn" style={{color:'black'}} onClick={() => setFilter('inactive')}>Inactive</button>
        <div style={{ marginLeft: '3rem' }}>
        <input
          type="text"
          placeholder="New task"
          value={newTask}
          className='filter-btn'
          style={{color:"black"}}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask} className='filter-btn' style={{color:"white",backgroundColor:"#1A2517" }}>Add</button>
      </div>
      </div>



      {/* Tasks list */}
      {tasks.map((task) => (
        <div className="task-row" key={task.id}>
          <span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                setTasks(tasks.map(t => t.id === task.id ? {...t, completed: !t.completed} : t));
              }}
            />
            {task.isediting ? (
              <input
                type="text"
                value={task.name}
                style={{background:'none',border:'none',color:'black',outline:'none'}}
                onChange={(e) => handleChange(task.id, e.target.value)}
                onKeyDown={(e) =>handleKeyDown(e,task.id)}
                autoFocus
              />
            ) :(
            task.name)}
          </span>
          <div className="actions">
            <button className="btn view">View</button>
            <button className="btn edit" onClick={() => {
              setTasks(tasks.map(t => t.id === task.id ? {...t, isediting: true} : t));
            }}>Edit</button>
            <button className="btn delete" onClick={() => {
              setTasks(tasks.filter(t => t.id !== task.id));
            }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskSummary;