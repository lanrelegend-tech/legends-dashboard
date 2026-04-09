import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function LogoutModal({ isOpen, onClose, onConfirm }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-box"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
          >
        
            <h4>Are you sure you want to log out?</h4>

            <div className="modal-actions">
              <button className="btn cancel" onClick={onClose}>
                Cancel
              </button>
              <button className="btn confirm" onClick={onConfirm}>
                Logout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LogoutModal;