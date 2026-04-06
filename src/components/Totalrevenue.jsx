import React, { useContext } from 'react';
import { SiThestorygraph } from "react-icons/si";
import { AppContext } from './AppContext';

function Totalrevenue() {
  const { projects } = useContext(AppContext);

  const totalRevenue = projects.reduce((sum, project) => {
    return sum + (parseFloat(project.deposit) || 0);
  }, 0);

  return (
    <div id='totalrevenue' className='overviewcard'>
        <div><SiThestorygraph /></div>
        <h1>Total revenue</h1>
        <h2>${totalRevenue.toLocaleString()}</h2>
    </div>
  )
}

export default Totalrevenue;