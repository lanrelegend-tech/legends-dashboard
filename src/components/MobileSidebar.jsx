import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { GrProjects } from "react-icons/gr";
import { FaTasks, FaTimes } from "react-icons/fa";
import { CiSettings, CiLogout } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { easeInOut, motion } from 'framer-motion';
import LogoutModal from "../components/LogoutModal";


function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/LoginPage", { replace: true });
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    // ✅ Filter sidebar menu items
    const menuItems = document.querySelectorAll(".mobile-sidebar-menu p");
    menuItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(value) ? "flex" : "none";
    });
  };

  const polygonVarient = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },


    
  };

  return (
    <>
      {/*  Hamburger */}
      <div className="hamburger-btn" onClick={toggleSidebar}>
        <div className="line" style={{ backgroundColor: "green" }}></div>
        <div className="line" style={{ backgroundColor: "green" }}></div>
        <div className="line" style={{ backgroundColor: "green" }}></div>
      </div>

      {/*  Sidebar */}
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        
        {/* Close button */}
        <div className="close-btn" onClick={toggleSidebar}>
          <FaTimes size={20} />
        </div>

        {/* Logo */}
        <div className="sidebar-logo" style={{ marginBottom: "50px" ,marginTop:'-70px'}}>
          <svg width="150" height="70" viewBox="0 0 300 100">
            <motion.polygon
              points="10,40 30,10 50,40 40,40 30,25 20,40"
              fill="none"
              stroke="white"
              strokeWidth="2"
              variants={polygonVarient}
              initial="hidden"
              animate="visible"
            />

            <motion.polygon
              points="50,40 70,10 90,40 80,40 70,25 60,40"
              fill="none"
              stroke="white"
              strokeWidth="2"
              variants={polygonVarient}
              initial="hidden"
              animate="visible"
            />

            <text x="100" y="32" fontSize="24" fill="white">
              Legendtech
            </text>
          </svg>
        </div>

        {/* Menu */}
        <div className="mobile-sidebar-menu">
           <input 
        type='text'
        className="mobile-search"
        color='--search-text'
        placeholder='search...'
        value={query}
        onChange={handleSearch}
        />
          <p onClick={() => navigate("/CreateProject")}>
            <IoMdAddCircleOutline /> Create project
          </p>

          <p onClick={() => navigate("/")}>
            <RxDashboard /> Dashboard
          </p>

          <p onClick={() => navigate("/ProjectPage")}>
            <GrProjects /> Projects
          </p>

          <p onClick={() => navigate("/TaskPage")}>
            <FaTasks /> Tasks
          </p>

         
          <p onClick={() => navigate("/Profile")}>
            <CiSettings /> Settings
          </p>

          <p onClick={() => setShowModal(true)}>
  <CiLogout /> Logout
</p>
  <LogoutModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleLogout}
      />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default MobileSidebar;