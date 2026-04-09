// Spinner.jsx
import React from "react";
import { motion } from "framer-motion";

function Spinner() {
    const polygonVarient ={
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1, transition:{duration:2,ease:'easeInOut',repeat:Infinity}},

}

  return (
     <div style={{ marginTop: '-15rem',marginLeft:'15rem'  }}>
           <svg width="1000" height="250" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      
      <motion.polygon points="10,40 30,10 50,40 40,40 30,25 20,40" fill="none" stroke="white" strokeWidth="2"
      variants={polygonVarient}
      initial="hidden"
      animate="visible"/>
      
    
      <motion.polygon points="50,40 70,10 90,40 80,40 70,25 60,40" fill="none" stroke="white" strokeWidth="2"
      variants={polygonVarient}
      initial="hidden"
      animate="visible"/>
    
    
    
    </svg>
    </div>
      
  );
}

export default Spinner;