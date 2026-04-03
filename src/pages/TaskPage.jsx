import React from 'react'
import TaskSumarry from '../components/TaskSumarry'
import Sidebar from '../components/Sidebar'

function TaskPage() {
  return (
    <div>
        <div className='main'>
        <TaskSumarry/>
        </div>
<Sidebar/>
    </div>
  );
}

export default TaskPage;