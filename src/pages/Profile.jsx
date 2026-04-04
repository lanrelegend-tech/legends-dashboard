import React, { useState, useRef ,useEffect} from "react";
import profileImg from "../assets/profile-img.png";
import { FaUserEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Sidebar from '../components/Sidebar';

function Profile() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // Load saved image
  useEffect(() => {
    const savedImage = localStorage.getItem("profilePic");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  // When image is clicked → open file picker
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // When user selects image
  const handleImageChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      localStorage.setItem("profilePic", reader.result);
    };

    reader.readAsDataURL(file);
  
  };

  const [name, setName] = useState("");
const [email, setEmail] = useState("");


useEffect(() => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    setName(user.name);
    setEmail(user.email);
  }
}, []);

const handleSave = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const updatedUser = {
    ...user,
    name,
    email
  };

  localStorage.setItem("currentUser", JSON.stringify(updatedUser));
};

  return (
    <div><Sidebar/>
    <div className="page">

      <div className="profile-card">
         <button className='toogle'>toogle theme</button>
        <h2>Profile</h2>
        

        {/* Profile Picture */}
        <div className="profile-pic-section">
          <img
            src={image || profileImg}
            alt="Profile"
            className="profile-pic"
          />
          <button className="edit-pic-btn" onClick={handleImageClick}><FaUserEdit/></button>


               <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    
        </div>

        {/* Name */}
        <div className="profile-field">
          <label>Name</label>
          <div className="field-row">
            <input type="text" value={name}
            onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSave}><CiEdit size={28}/></button>
          </div>
        </div>

        {/* Email */}
        <div className="profile-field">
          <label>Email</label>
          <div className="field-row">
            <input type="email" value={email} />
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
    </div>
  );
}

export default Profile;

