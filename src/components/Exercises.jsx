import React from 'react';
import { useParams } from 'react-router-dom';
import './Exercises.css';

const Exercises = () => {
  const { splitType } = useParams(); // Get the splitType from URL or set a default

  // Define images for each muscle group
  const muscleImages = {
    Chest: "/images/chest.png",
    Back: "/images/back.png",
    Shoulders: "/images/shoulders.png",
    Triceps: "/images/triceps.png",
    Biceps: "/images/biceps.png",
    Legs: "/images/legs.png",
    Traps: "/images/traps.png",
    Arms: "/images/arms.png",
    Rest: "/images/rest.png"
  };

  // Define the exercises by muscle group
  const exercises = {
    "Push/Pull/Legs": {
      Chest: ["Bench Press", "Incline Dumbbell Press", "Chest Fly", "Cable Crossover"],
      Back: ["Deadlift", "Pull-ups", "Barbell Row", "Lat Pulldown"],
      Shoulders: ["Overhead Press", "Lateral Raise", "Arnold Press"],
      Triceps: ["Dips", "Skull Crushers", "Tricep Pushdowns"],
      Biceps: ["Bicep Curls", "Hammer Curls", "Concentration Curls"],
      Legs: ["Squats", "Leg Press", "Lunges", "Leg Curls"],
      Traps: ["Shrugs", "Face Pulls"],
      Rest: []
    },
    "Bro Split": {
      Chest: ["Bench Press", "Chest Fly", "Incline Press"],
      Back: ["Deadlift", "Pull-ups", "T-Bar Row"],
      Shoulders: ["Military Press", "Lateral Raises"],
      Arms: ["Bicep Curls", "Tricep Extensions"],
      Legs: ["Squats", "Leg Press", "Lunges"],
      Rest: []
    }
  };

  // Set a default split type if none is provided
  const selectedSplitType = splitType || "Push/Pull/Legs";
  const selectedExercises = exercises[selectedSplitType] || {};

  return (
    <div className="page-container">
      <h1>Exercise Routines - {selectedSplitType}</h1>

      {Object.keys(selectedExercises).length === 0 ? (
        <p>No exercises available for this split type.</p>
      ) : (
        <div className="muscle-group-list">
          {Object.keys(selectedExercises).map((muscleGroup, index) => (
            <div key={index} className="muscle-group-section">
              {/* Title with Muscle Image */}
              <div className="muscle-title">
                <img src={muscleImages[muscleGroup]} alt={muscleGroup} className="muscle-image" />
                <h2>{muscleGroup}</h2>
              </div>

              {muscleGroup === "Rest" ? (
                // Display message for rest day
                <p>Do cardio based on your goal physique and eat, sleep, and repeat the process.</p>
              ) : (
                // Display exercises for other muscle groups
                selectedExercises[muscleGroup].length > 0 ? (
                  <ul>
                    {selectedExercises[muscleGroup].map((exercise, idx) => (
                      <li key={idx}>{exercise}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No exercises for this muscle group.</p>
                )
              )}
            </div>
          ))}
        </div>
      )}

      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default Exercises;
