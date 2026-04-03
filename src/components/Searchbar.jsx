import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";

function Searchbar() {
  return (
    <div className='searchbar'>
        <h1 style={{color:'#1A2517'}}>Dashboard</h1>
        <input className='searchbtn'
        type='text'
        placeholder='search...'
        />

        
    </div>
    
  )
}

export default Searchbar;