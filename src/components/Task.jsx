import React from 'react'
import { FaTasks } from "react-icons/fa";
import { useContext,useEffect } from 'react';
import { AppContext } from '../components/AppContext';

function Task() {
    const { tasks, setTasks } = useContext(AppContext);
  useEffect(() => {
  try {
    const savedTask = JSON.parse(localStorage.getItem('tasks'));
    setTasks(Array.isArray(savedTask) ? savedTask : []);
  } catch {
    setTasks([]);
  }
}, [setTasks]);
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