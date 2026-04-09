import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CreateProject from "./pages/CreateProject";
import RedirectIfAuth from "./components/RedirectIfAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import { AppProvider } from "./components/AppContext";
import MainPageSkeleton from "./components/MainPageSkeleton";
import NotFoundPage from "./components/NotFoundPage";

import "./App.css";

const MainPage = lazy(() => import("./pages/MainPage"));
const TaskPage = lazy(() => import("./pages/TaskPage"));
const Profile = lazy(() => import("./pages/Profile"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));

function AppContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/LoginPage" element={<RedirectIfAuth><LoginPage /></RedirectIfAuth>} />
        <Route path="/SignupPage" element={<RedirectIfAuth><SignupPage /></RedirectIfAuth>} />

        <Route path="/CreateProject" element={<ProtectedRoute><CreateProject /></ProtectedRoute>} />
        <Route path="/Profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/TaskPage" element={<ProtectedRoute><TaskPage /></ProtectedRoute>} />
        <Route path="/ProjectPage" element={<ProtectedRoute><ProjectPage /></ProtectedRoute>} />

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

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;