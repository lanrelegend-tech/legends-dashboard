import React from "react";
import "../pages/Skeleton.css";

function MainPageSkeleton() {
  return (
    <div className="app">

      {/* Sidebar */}
      <div className="sidebar">
        <div className="skeleton-logo"></div>

        {[1,2,3,4,5].map((i) => (
          <div key={i} className="skeleton-nav-item"></div>
        ))}
      </div>

      {/* Main */}
      <div className="main">

        {/* Searchbar */}
        <div className="skeleton-searchbar"></div>

        {/* Overview cards */}
        <div className="overview">
          {[1,2,3,4].map((i) => (
            <div key={i} className="skeleton-overview-card-skeleton"></div>
          ))}
        </div>

        {/* Project + Dashboard */}
        <div className="project-flex">
          <div className="skeleton-project-summary"></div>
          <div className="skeleton-dashboard-chart"></div>
        </div>

        {/* Task Summary */}
        <div className="task-summary">
          <div className="skeleton-task-summary-box"></div>
           <div className="skeleton-task-summary-box"></div>
            <div className="skeleton-task-summary-box"></div>
          
        </div>
        <div></div>

      </div>
    </div>
  );
}

export default MainPageSkeleton;