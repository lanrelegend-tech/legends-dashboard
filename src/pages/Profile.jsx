import React, { useState, useRef ,useEffect} from "react";
import profileImg from "../assets/profile-img.png";
import { FaUserEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Sidebar from '../components/Sidebar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import MobileSidebar from "../components/MobileSidebar";
import { motion } from "framer-motion";

function Profile() {
  const [image, setImage] = useState(() => {
    const savedImage = localStorage.getItem("profilePic");
    return savedImage || profileImg;
  });
  const fileInputRef = useRef(null);

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
const [isEditing,setIsEditing] =useState(false);
const [countryCode, setCountryCode] = useState("+1");
const [phone, setPhone] = useState("");
const [isEditingPhone, setIsEditingPhone] = useState(false);
const [address, setAddress] = useState("");


useEffect(() => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone || "");
    setCountryCode(user.countryCode || "+1");
    setAddress(user.address || "");
  }
  const savedTheme = localStorage.getItem("selectedTheme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}, []);

const handleSave = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const updatedUser = {
    ...user,
    name,
    phone: `${countryCode}${phone}`,
    address,
    profilePic: image,
    email
  };

  localStorage.setItem("currentUser", JSON.stringify(updatedUser));
};

// Add this inside your Profile component, but **outside of return()**
const handleThemeToggle = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("selectedTheme", newTheme);

  toast.success(`Switched to ${newTheme} mode`);
};

const containerVariants ={
    hidden:{
      opacity:'0',
    },
    visible:{
      opacity:'1',
      transition: {delay:1.5,duration:1}
    },
    exit :{
      x:'100vw',
      transition:{ease:'easeInOut'}
    }
  }
  return (
    <div><Sidebar/>
    <MobileSidebar/>
    <motion.div className="page"
    variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">

      <div className="profile-card">
         <motion.button className='toogle' onClick={handleThemeToggle} style={{outline:'none',border:'none',color:'white'}}   whileHover={{
        scale:1.1,
        boxShadow:"0px 0px 8px rgb(255,255,255)",}}>Toggle Theme</motion.button>
        <h2>Profile</h2>
        

        {/* Profile Picture */}
        <div className="profile-pic-section">
          <img
            src={image || profileImg}
            alt="Profile"
            className="profile-pic"
          />
          <button className="edit-pic-btn" onClick={handleImageClick}
           ><FaUserEdit/></button>


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
            className="name"
            disabled={!isEditing}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
        if (e.key === "Enter" &&isEditing) {
          handleSave();
          setIsEditing(false);
          toast.success("Name saved!");

         }
         }} />
            <button
            className="name"
             onClick={() => {
              setName("");
              setIsEditing(true);
            }}><CiEdit size={28}/></button>
          </div>
        </div>

        {/* Email */}
        <div className="profile-field">
          <label>Email</label>
          <div className="field-row">
        
 <input type="text" value={email}
            readOnly={!isEditing}
            className="email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
        if (e.key === "Enter" &&isEditing) {
          const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.value = email;
        if (!emailInput.checkValidity()) {
          toast.error("Please enter a valid email!");
          return;
        }

        handleSave();
        toast.success("Email saved!");
        setIsEditing(false);
      
    
          handleSave();
          setIsEditing(false);

         }
         }} />
            <button 
            className="email"
            onClick={() => {
              setEmail("");
              setIsEditing(true);
            }}><CiEdit size={28}/></button>
          </div>
        </div>

        {/* Phone Number */}
       
 <div className="profile-field">
  <label>Phone Number</label>

  <div className="field-row phone-row">
    
    <select
      value={countryCode}
      onChange={(e) => setCountryCode(e.target.value)}
      disabled={!isEditingPhone}
    >
      <option value="+234">+234</option>
      <option value="+1">+1</option>
      <option value="+44">+44</option>
      <option value="+91">+91</option>
    </select>

    <input
      type="tel"
      value={phone}
      onChange={(e) => {
        const digitsOnly = e.target.value.replace(/\D/g, "");
        setPhone(digitsOnly);
      }}
      placeholder="Enter phone number"
      disabled={!isEditingPhone}
      onKeyDown={(e) => {
        if (e.key === "Enter" && isEditingPhone) {
          if (!/^\d{6,15}$/.test(phone)) {
            toast.error("Enter valid phone (6–15 digits)");
            return;
          }

          const user = JSON.parse(localStorage.getItem("currentUser")) || {};
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ ...user, countryCode, phone })
          );

          toast.success(`Saved: ${countryCode}${phone}`);
          setIsEditingPhone(false);
        }
      }}
    />

    <button
      onClick={() => {
        setPhone("");
        setIsEditingPhone(true);
      }}
    >
      <CiEdit size={22} />
    </button>

  </div>
</div>

        {/* Address */}
        <div className="profile-field">
          <label>Address</label>
          <div className="field-row">
            <input type="text" value={address}
            className="address"
            readOnly={!isEditing}
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={(e) => {
        if (e.key === "Enter" &&isEditing) {
          handleSave();
          setIsEditing(false);
          toast.success("Address saved!");

         }
         }} />
            <button 
            className="address"
            onClick={() => {
              setAddress("");
              setIsEditing(true);
            }}><CiEdit size={28}/></button>
          </div>
        </div>

      </div>

    </motion.div>
    <ToastContainer position="top-left" autoClose={1000} 
              hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{ maxWidth: "300px" }}/>
    </div>
  );
}
;

export default Profile;

