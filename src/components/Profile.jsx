import React from 'react'
import profileImg from "../assets/profile-img.png";
import { FaUserEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

function Profile() {
  return (
    <div className="page">

      <div className="profile-card">
         <button className='toogle'>toogle theme</button>
        <h2>Profile</h2>
        

        {/* Profile Picture */}
        <div className="profile-pic-section">
          <img
            src={profileImg}
            alt="Profile"
            className="profile-pic"
          />
          <button className="edit-pic-btn"><FaUserEdit/></button>
        </div>

        {/* Name */}
        <div className="profile-field">
          <label>Name</label>
          <div className="field-row">
            <input type="text" placeholder="Your Name" />
            <button><CiEdit size={28}/></button>
          </div>
        </div>

        {/* Email */}
        <div className="profile-field">
          <label>Email</label>
          <div className="field-row">
            <input type="email" placeholder="your.email@example.com" />
            <button><CiEdit size={28}/></button>
          </div>
        </div>

        {/* Phone Number */}
        <div className="profile-field">
          <label>Phone Number</label>
          <div className="field-row">
            <input type="text" placeholder="+234 801 234 5678" />
            <button><CiEdit size={28}/></button>
          </div>
        </div>

        {/* Address */}
        <div className="profile-field">
          <label>Address</label>
          <div className="field-row">
            <input type="text" placeholder="123 Main St, City, Country" />
            <button><CiEdit size={28}/></button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Profile;

