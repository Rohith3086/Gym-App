import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './common.css';

const Home = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    age: 28,
    weight: 75,
    height: 175,
    goal: 'Build Muscle',
    address: '123 Fitness Street, Gym City',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    fitnessLevel: 'Intermediate',
    preferredWorkoutTime: 'Morning'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to FitLife Pro</h1>
        <p>Your personal fitness journey starts here</p>
      </header>

      <div className="profile-section">
        <div className="profile-header">
          <h2>My Profile</h2>
          <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleProfileUpdate} className="profile-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  value={userProfile.age}
                  onChange={(e) => setUserProfile({...userProfile, age: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  value={userProfile.weight}
                  onChange={(e) => setUserProfile({...userProfile, weight: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Height (cm)</label>
                <input
                  type="number"
                  value={userProfile.height}
                  onChange={(e) => setUserProfile({...userProfile, height: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="save-button">Save Changes</button>
          </form>
        ) : (
          <div className="profile-details">
            <div className="profile-grid">
              <div className="profile-item">
                <h3>Personal Info</h3>
                <p><strong>Name:</strong> {userProfile.name}</p>
                <p><strong>Age:</strong> {userProfile.age} years</p>
                <p><strong>Email:</strong> {userProfile.email}</p>
                <p><strong>Phone:</strong> {userProfile.phone}</p>
              </div>

              <div className="profile-item">
                <h3>Fitness Details</h3>
                <p><strong>Weight:</strong> {userProfile.weight} kg</p>
                <p><strong>Height:</strong> {userProfile.height} cm</p>
                <p><strong>Fitness Level:</strong> {userProfile.fitnessLevel}</p>
                <p><strong>Goal:</strong> {userProfile.goal}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="quick-actions">
        <div className="action-card" onClick={() => navigate('/workouts')}>
          <h3>My Workouts</h3>
          <p>View and track your workout progress</p>
        </div>
        
        <div className="action-card" onClick={() => navigate('/diet')}>
          <h3>Diet Plan</h3>
          <p>Check your meal plan and nutrition</p>
        </div>
        
        <div className="action-card" onClick={() => navigate('/calculator')}>
          <h3>Fitness Calculator</h3>
          <p>Calculate BMI, calories, and more</p>
        </div>
        
        <div className="action-card" onClick={() => navigate('/ai-coach')}>
          <h3>AI Coach</h3>
          <p>Get personalized fitness advice</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
