import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three"; // Import THREE.js (Vanta requires it)
import BIRDS from "vanta/dist/vanta.birds.min"; // Import Vanta Birds effect
import "./LandingPage.css";

const LandingPage = ({ setIsAuthenticated }) => {
  const [loginMethod, setLoginMethod] = useState("email"); // 'email' or 'mobile'
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const vantaRef = useRef(null); // Reference for Vanta.js effect

  // Initialize Vanta.js on mount
  useEffect(() => {
    if (!vantaRef.current) {
      try {
        vantaRef.current = BIRDS({
          el: "#vanta-bg", // ID of the div where Vanta will render
          THREE,
          color1: 0x00ffcc, // Neon cyan
          color2: 0xff00ff, // Neon pink
          backgroundColor: 0x121212, // Dark background
          birdSize: 1.5,
          speedLimit: 4,
          separation: 50,
          alignment: 50,
          quantity: 5,
        });
      } catch (error) {
        console.error("Error initializing Vanta.js Birds:", error);
      }
    }

    return () => {
      if (vantaRef.current) vantaRef.current.destroy(); // Cleanup on unmount
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginMethod === "email") {
      console.log("Login with email:", email, password);
    } else {
      console.log("Login with mobile:", mobileNumber, password);
    }
    setIsAuthenticated(true);
    navigate("/home");
  };

  return (
    <div id="vanta-bg" className="landing-container">
      <div className="landing-content">
        <h1>FitLife Pro</h1>
        <p>Your Personal Fitness Journey Starts Here</p>

        <div className="login-container">
          <div className="login-methods">
            <button
              className={loginMethod === "email" ? "active" : ""}
              onClick={() => setLoginMethod("email")}
            >
              Email Login
            </button>
            <button
              className={loginMethod === "mobile" ? "active" : ""}
              onClick={() => setLoginMethod("mobile")}
            >
              Mobile Login
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {loginMethod === "email" ? (
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            ) : (
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
