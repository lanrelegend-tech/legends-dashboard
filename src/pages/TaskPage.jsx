import React from 'react'
import TaskSumarry from '../components/TaskSumarry'
import Sidebar from '../components/Sidebar'
import MobileSidebar from "../components/MobileSidebar";
import Task from '../components/Task';

function TaskPage() {
  return (
    <div>
      <Sidebar/>
<MobileSidebar/>
        <div className='main'>
        <TaskSumarry />
        </div>

    </div>
  );
}

export default TaskPage;