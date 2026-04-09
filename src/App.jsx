import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  { lazy, Suspense } from "react";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import Profile from "./pages/Profile";
import SignupPage from "./pages/SignupPage";
import ProjectPage from "./pages/ProjectPage";
import CreateProject from "./pages/CreateProject";
import RedirectIfAuth from "./components/RedirectIfAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import { AppProvider } from "./components/AppContext"; // ✅ import your context provider
import MainPageSkeleton from "./components/MainPageSkeleton"; 
import NotFoundPage from "./components/NotFoundPage";
import "./App.css";


function App() {
   const savedTheme = localStorage.getItem("selectedTheme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  

const MainPage = lazy(() => import("./pages/MainPage"));

  
  return (
    <AppProvider> {/* ✅ Wrap the whole app in the provider */}
      <Router>
        <Routes>
          <Route
            path="/LoginPage"
            element={
              <RedirectIfAuth>
                <LoginPage />
              </RedirectIfAuth>
            }
          />
          <Route
            path="/SignupPage"
            element={
              <RedirectIfAuth>
                <SignupPage />
              </RedirectIfAuth>
            }
          />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/TaskPage" element={<TaskPage />} />
          <Route path="/ProjectPage" element={<ProjectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          <Route path="/CreateProject" element={<CreateProject />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                    <Suspense fallback={<MainPageSkeleton />}>
                <MainPage />
                   </Suspense>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;