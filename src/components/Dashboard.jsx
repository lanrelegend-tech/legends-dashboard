import { useContext } from "react";
import { AppContext } from "./AppContext";

function Dashboard() {
  const { projects } = useContext(AppContext);

  const totalProjects = projects.length;
  const completed = projects.filter((p) => p.status === "completed");
  const inprogress = projects.filter((p) => p.status === "inprogress");
  const pending = projects.filter((p) => p.status === "pending");

  const completedPercent = totalProjects ? (completed.length / totalProjects) * 100 : 0;
  const inprogressPercent = totalProjects ? (inprogress.length / totalProjects) * 100 : 0;
  const pendingPercent = totalProjects ? (pending.length / totalProjects) * 100 : 0;

  const completedDegree = completedPercent * 1.8;
  const inprogressDegree = inprogressPercent * 1.8;

  return (
    <div className="overview-card">
      <h3>Project Progress</h3>
      <div className="progress-container">
        <div
          className="semi-circle"
          style={{
            background: `conic-gradient(
              #3498db 0deg ${completedDegree}deg,
              #f39c12 ${completedDegree}deg ${completedDegree + inprogressDegree}deg,
              #ccc ${completedDegree + inprogressDegree}deg 180deg
            )`,
            transition: "background 0.5s ease",
          }}
        ></div>
        <div className="text">
          <h2>{Math.round(completedPercent)}%</h2>
        </div>
      </div>
      <div className="legends">
        <span>
          <i className="completed"></i>Completed ({completed.length})
        </span>
        <span>
          <i className="inprogress"></i>In Progress ({inprogress.length})
        </span>
        <span>
          <i className="pending"></i>Pending ({pending.length})
        </span>
      </div>
    </div>
  );
}

export default Dashboard;