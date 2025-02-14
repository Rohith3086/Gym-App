import React, { useState } from "react";
import axios from "axios";
import "./AiCoach.css"; // Ensure this CSS file has a proper UI

const AiCoach = () => {
  const [goal, setGoal] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("diet"); // Tab switcher state

  const handleSend = async () => {
    if (!goal || !timeframe) return;

    // Choosing request type based on the active tab
    const userMessage =
      activeTab === "diet"
        ? `Create a structured diet plan for ${goal} in ${timeframe}. Format it neatly.`
        : `Create a structured exercise plan for ${goal} in ${timeframe}. Include sets, reps, and rest periods.`;

    setMessages([...messages, { sender: "user", text: userMessage }]);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent",
        {
          contents: [{ role: "user", parts: [{ text: userMessage }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
          params: { key: "AIzaSyDxZpGyT-IBt_k8mQIG57NcYNlq00XPyKU" }, // Replace with your actual API key
        }
      );

      let aiResponse =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm unable to generate a response.";

      aiResponse = formatResponse(aiResponse);

      setMessages([
        ...messages,
        { sender: "user", text: userMessage },
        { sender: "bot", text: aiResponse },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages([
        ...messages,
        { sender: "user", text: userMessage },
        { sender: "bot", text: "Sorry, something went wrong!" },
      ]);
    }

    setGoal("");
    setTimeframe("");
    setLoading(false);
  };

  // Function to format AI response for better readability
  const formatResponse = (response) => {
    return response
      .replace(/\n\n/g, "<br/><br/>") // Double line breaks for paragraphs
      .replace(/- /g, "• ") // Convert dashes to bullet points
      .replace(/\n/g, "<br/>"); // Single line break for new lines
  };

  return (
    <div className="ai-coach-container">
      <h2>AI Coach - Your Personalized Fitness Guide</h2>

      {/* Tab Switcher */}
      <div className="tab-switcher">
        <button
          className={activeTab === "diet" ? "active" : ""}
          onClick={() => setActiveTab("diet")}
        >
          Diet Plan
        </button>
        <button
          className={activeTab === "exercise" ? "active" : ""}
          onClick={() => setActiveTab("exercise")}
        >
          Exercise Plan
        </button>
      </div>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your fitness goal (e.g., Muscle Gain, Weight Loss)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter timeframe (e.g., 3 months, 6 weeks)"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? "Generating..." : `Get ${activeTab === "diet" ? "Diet" : "Workout"} Plan`}
        </button>
      </div>

      {/* Chat Box */}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <span dangerouslySetInnerHTML={{ __html: msg.text }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiCoach;
