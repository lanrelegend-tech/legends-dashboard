import React from 'react'
import { FaTasks } from "react-icons/fa";
import { useState,useEffect } from 'react';

function Task() {
    const [tasks, setTasks] = useState([]);
  useEffect(() => {
  try {
    const savedTask = JSON.parse(localStorage.getItem('tasks'));
    setTasks(Array.isArray(savedTask) ? savedTask : []);
  } catch {
    setTasks([]);
  }
}, []);
  const totalTasks = tasks.length;
  const completedTasks = () => tasks.filter(task => task.completed).length;
  return (
    <div id='Task' className='overviewcard'>
        <div ><FaTasks /></div>
        <h1>Tasks</h1>
        <h2>{completedTasks()}/{totalTasks}</h2>
    </div>
  )
}

export default Task;