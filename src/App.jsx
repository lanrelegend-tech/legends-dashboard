import React from "react";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/MainPage" element={<MainPage/>} />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/TaskPage" element={<TaskPage/>}/>
      </Routes>
      </Router>
   
  );
}

export default App;
