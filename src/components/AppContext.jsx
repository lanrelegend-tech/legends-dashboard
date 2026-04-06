// ProjectsContext.js
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Load projects from localStorage on mount
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setProjects(storedProjects);
    setTasks(storedTasks);
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [projects, tasks]);

  return (
    <AppContext.Provider value={{ projects, setProjects, tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
};