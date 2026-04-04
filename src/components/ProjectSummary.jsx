import React from 'react'

function ProjectSummary() {
  return (
    <div className='table-summary'>
      <h2>Project Summary</h2>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Project Maneger</th>
              <th>Due date</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>nana web development</td>
              <td>micheal</td>
              <td>2026-04-26</td>
              <td className='completed'>Completed</td>
              <td>
                <div className='circle' data-percentage="100">
                  <span className='progress-text'>High</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>nana web development</td>
              <td>john</td>
              <td>2026-04-26</td>
              <td className='ongoing'>Ongoing</td>
              <td>
                <div className='circle' data-percentage="50">
                  <span className='progress-text'>Medium</span>
                </div>
              </td>
              </tr>
              <tr>
                <td>nana web development</td>
                <td>solomon</td>
              <td>2026-04-26</td>
              <td className='pending'>pending</td>
              <td>
                <div className='circle' data-percentage="0">
                  <span className='progress-text'>Low</span>
                </div>
              </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectSummary;