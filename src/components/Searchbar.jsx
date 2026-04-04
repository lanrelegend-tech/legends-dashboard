import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useState, useEffect } from 'react';

function Searchbar() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUserName(currentUser.name); // get name from logged-in user
    }
  }, []);
  return (
    <div className='searchbar'> 
        <h1 style={{color:'#1A2517'}}>Dashboard</h1>
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