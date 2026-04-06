import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

function Searchbar() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUserName(currentUser.name.slice(0,5));
    }
    // get name from logged-in user
  }, []);

  const fullText = "Dashboard";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 250); // typing speed (ms)
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='searchbar'> 
        <motion.h1 initial={{ x: -200, opacity: 0 }}      // start left, invisible
      animate={{ x: 0, opacity: 1 }}         // slide to position, fade in
      transition={{ duration: 0.5 }}          // slide duration
      style={{ fontSize: "1.3rem", fontWeight: "bold" ,color:'black',overflow: 'hidden', whiteSpace: 'nowrap' }}
  >Dashboard</motion.h1>
        <input className='searchbtn'
        type='text'
        placeholder='search...'
        />
        <div className='search-icons'>
          <CiUser style={{color:'#1A2517'}}/>
          <span style={{color:'#1A2517'}}>{userName}</span>
          </div>


        
    </div>
    
  )
}

export default Searchbar;