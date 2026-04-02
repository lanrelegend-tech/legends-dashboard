import Sidebar from "./components/Sidebar";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Task from "./components/Task";
import Projects from "./components/Projects";
import Totalrevenue from "./components/Totalrevenue";
import Time from "./components/Time";
import ProjectSummary from "./components/ProjectSummary";
function App() {
  

  return (
    <div className="app">
      <Sidebar/>
      <div className="main">
      <Searchbar/>
      
      <div className="overview">
        <Projects/>
        <Task/>
        <Time/>
        <Totalrevenue/>
      </div>
      <ProjectSummary/>
    </div>
    </div>

  );
}

export default App;
