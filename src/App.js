import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Profile from "./components/Profile";
import MyWorkouts from "./components/MyWorkouts";
import MyDiet from "./components/MyDiet";
import Calculator from "./components/Calculator";
import Exercises from "./components/Exercises";
import AiCoach from "./components/AiCoach"; // Import AiCoach component
import WeConnect from "./components/WeConnect"; // Import the WeConnect component

import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app">
        {isAuthenticated && <Navbar />}
        <Routes>
          {/* Landing Page (Shows if not logged in) */}
          <Route
            path="/"
            element={
              !isAuthenticated ? (
                <LandingPage setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate to="/home" replace />
              )
            }
          />

          {/* Public Routes (No Authentication Required) */}
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workouts" element={<MyWorkouts />} />
          <Route path="/diet" element={<MyDiet />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/:splitType" element={<Exercises />} />
          <Route path="/ai-coach" element={<AiCoach />} />

          {/* Add Route for WeConnect */}
          <Route path="/weconnect" element={<WeConnect />} />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
