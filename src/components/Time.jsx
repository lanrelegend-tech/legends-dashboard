import React from 'react'
import { CiTimer } from "react-icons/ci";

function Time() {
  return (
    <div id='Time' className='overviewcard'>
        <div className='icon-cirle'><CiTimer  /></div>
        <h1>Time spent</h1>
        <h2>120hours</h2>
    </div>
  )
}

export default Time;