import React from 'react'
import { FaTasks } from "react-icons/fa";

function Task() {
  return (
    <div id='Task' className='overviewcard'>
        <div><FaTasks /></div>
        <h1>Tasks</h1>
        <h2>100/200</h2>
    </div>
  )
}

export default Task;