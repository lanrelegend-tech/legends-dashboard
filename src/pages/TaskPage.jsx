import React from 'react'
import TaskSumarry from '../components/TaskSumarry'
import Sidebar from '../components/Sidebar'
import Task from '../components/Task';

function TaskPage() {
  return (
    <div>
        <div className='main'>
        <TaskSumarry />
        </div>
<Sidebar/>
    </div>
  );
}

export default TaskPage;