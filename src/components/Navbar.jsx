import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { WeConnect } from './WeConnect';  // Import the WeConnect component (ensure it's defined properly)

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Navigate to a route and close sidebar
  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // Close sidebar after navigation
  };

  // Handle logout
  const handleLogout = () => {
    console.log('Logout clicked!'); // Debugging line
    // Add any logout logic here (e.g., clear session, token)
    navigate('/'); // Redirect to landing page after logout
    setIsSidebarOpen(false); // Close sidebar
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          {/* Back Arrow to Close Sidebar */}
          <div className="back-arrow" onClick={toggleSidebar}>
            &#8592; {/* Unicode for Left Arrow */}
          </div>
          <h2>FitLife Pro</h2>
        </div>
        <div className="sidebar-links">
          <div onClick={() => handleNavigation('/home')}>Home</div>
          <div onClick={() => handleNavigation('/workouts')}>My Workouts</div>
          <div onClick={() => handleNavigation('/diet')}>Diet Plan</div>
          <div onClick={() => handleNavigation('/calculator')}>Calculator</div>
          <div onClick={() => handleNavigation('/ai-coach')} className="ai-coach-link">AI Coach</div>
          <div onClick={() => handleNavigation('/exercises')} className="exercises-link">Exercises</div>
          {/* WeConnect Link */}
          <div onClick={() => handleNavigation('/weconnect')} className="weconnect-link">WeConnect</div>
          {/* Logout Button */}
          <div className="logout-link" onClick={handleLogout}>Logout</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          {/* Hamburger Icon on the left */}
          <div className="hamburger-icon" onClick={toggleSidebar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <h1 onClick={() => navigate('/home')} style={{ cursor: "pointer" }}>FitLife Pro</h1>
        </div>
        <div className="navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/workouts">My Workouts</Link>
          <Link to="/diet">Diet Plan</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/ai-coach" className="ai-coach-link">AI Coach</Link>
          <Link to="/exercises" className="exercises-link">Exercises</Link>
          {/* WeConnect Link */}
          <Link to="/weconnect" className="weconnect-link">WeConnect</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
