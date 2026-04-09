import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { AppContext } from "./AppContext";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const context = useContext(AppContext);
  if (!context) return <div>Error: AppContext not found!</div>;

  const { projects } = context;

  // Count projects by status
  const completed = projects.filter(p => p.status === "completed").length;
  const inProgress = projects.filter(p => p.status === "inprogress").length;
  const pending = projects.filter(p => p.status === "pending").length;

  const data = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [completed, inProgress, pending],
        backgroundColor: ["#10B981", "#FBBF24", "#EF4444"], // green, yellow, red
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" }
    }
  };

  return <Doughnut data={data} options={options} />;
}

export default Dashboard;