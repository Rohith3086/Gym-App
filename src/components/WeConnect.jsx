import React, { useState, useEffect } from "react";
import "./WeConnect.css"; // Styling for the UI

const WeConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [steps, setSteps] = useState(0);
  const [heartRate, setHeartRate] = useState(0);

  // Simulating device connection (Replace this with actual API calls)
  const connectDevice = () => {
    setIsConnected(true);
    setDeviceName("Fitbit Charge 5"); // Example device
    fetchHealthData();
  };

  const fetchHealthData = () => {
    setSteps(8560); // Simulated step count
    setHeartRate(75); // Simulated heart rate
  };

  return (
    <div className="weconnect-container">
      <h2>WeConnect - Sync Your Wearables</h2>

      {isConnected ? (
        <div className="device-info">
          <p><strong>Connected to:</strong> {deviceName}</p>
          <p><strong>Steps Today:</strong> {steps}</p>
          <p><strong>Heart Rate:</strong> {heartRate} BPM</p>
        </div>
      ) : (
        <button onClick={connectDevice} className="connect-button">
          Connect Wearable
        </button>
      )}
    </div>
  );
};

export default WeConnect;
