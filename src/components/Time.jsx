import React from 'react'
import { useState, useEffect } from 'react';
import { CiTimer } from "react-icons/ci";

function Time() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const loginTime = localStorage.getItem("loginTime");

    if (!loginTime) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = now - loginTime;
      setTime(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // format time
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div id='Time' className='overviewcard'>
        <div><CiTimer  /></div>
        <h1>Time spent</h1>
        <h2>{formatTime(time)}</h2>
    </div>
  )
}

export default Time;