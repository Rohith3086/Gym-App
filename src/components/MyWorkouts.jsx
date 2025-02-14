import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyWorkouts.css';

const MyWorkouts = () => {
  const [workoutSplit, setWorkoutSplit] = useState('');
  const [customWorkout, setCustomWorkout] = useState('');
  const navigate = useNavigate();

  const handleWorkoutChange = (e) => {
    setWorkoutSplit(e.target.value);
  };

  const handleCustomWorkoutChange = (e) => {
    setCustomWorkout(e.target.value);
  };

  // Prevent the form from submitting and navigate to Exercises page
  const goToExercisesPage = (splitType) => {
    // Redirect to the exercises page for the selected split type
    navigate(`/exercises/${splitType}`);
  };

  // Define exercises for the splits
  const workoutSplits = {
    "Push/Pull/Legs": [
      { day: "Monday", workout: "Push - Chest, Shoulders, Triceps" },
      { day: "Tuesday", workout: "Pull - Back, Biceps" },
      { day: "Wednesday", workout: "Legs - Quads, Hamstrings, Glutes" },
      { day: "Thursday", workout: "Push - Chest, Shoulders, Triceps" },
      { day: "Friday", workout: "Pull - Back, Biceps" },
      { day: "Saturday", workout: "Legs - Quads, Hamstrings, Glutes" },
      { day: "Sunday", workout: "Rest" },
    ],
    "Bro Split": [
      { day: "Monday", workout: "Chest" },
      { day: "Tuesday", workout: "Back" },
      { day: "Wednesday", workout: "Legs" },
      { day: "Thursday", workout: "Shoulders" },
      { day: "Friday", workout: "Arms" },
      { day: "Saturday", workout: "Chest" },
      { day: "Sunday", workout: "Rest" },
    ],
    "4-Day Split": [
      { day: "Monday", workout: "Upper Body - Chest, Shoulders, Triceps" },
      { day: "Tuesday", workout:  "Lower Body - Hamstrings, Quads" },
      { day: "Thursday", workout: "Rest" },
      { day: "Friday", workout:  "Upper Body - Back, Biceps"},
      { day: "Wednesday", workout: "Lower Body - Legs, Glutes" },
      { day: "Saturday", workout:  "cardio"},
      { day: "Sunday", workout: "Rest" },

    ],
    "5-Day Split": [
      { day: "Monday", workout: "Chest" },
      { day: "Tuesday", workout: "Back" },
      { day: "Wednesday", workout: "Shoulders" },
      { day: "Thursday", workout: "Legs" },
      { day: "Friday", workout: "Arms" },
      { day: "Saturday", workout: "Rest" },
      { day: "Sunday", workout: "Rest" },
    ],
  };

  const selectedWorkout = workoutSplits[workoutSplit] || [];

  return (
    <div className="page-container">
      <h1>My Workouts</h1>
      <p>Your workout plans and exercise tracking will appear here.</p>

      <div className="workout-options">
        <h2>Choose a Workout Split</h2>

        {/* Dropdowns for each workout split */}
        <div className="split-selection">
          <label>
            Workout Split:
            <select value={workoutSplit} onChange={handleWorkoutChange}>
              <option value="">Select a workout split</option>
              <option value="Push/Pull/Legs">Push/Pull/Legs</option>
              <option value="Bro Split">Bro Split</option>
              <option value="4-Day Split">4-Day Split</option>
              <option value="5-Day Split">5-Day Split</option>
            </select>
          </label>

          {/* If the user selects a workout split, show the table */}
          {workoutSplit && (
            <div className="workout-table">
              <h3>{workoutSplit} Workout Plan</h3>
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Workout</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedWorkout.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.day}</td>
                      <td>{entry.workout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Show input field for custom workout */}
          {workoutSplit === 'Custom' && (
            <div className="custom-workout">
              <input
                type="text"
                value={customWorkout}
                onChange={handleCustomWorkoutChange}
                placeholder="Enter your custom workout split"
              />
            </div>
          )}
        </div>

        <button
          type="button"
          className="submit-button"
          onClick={() => alert(`Workout split selected: ${workoutSplit}, Custom split: ${customWorkout}`)}
        >
          Save Workout Split
        </button>
      </div>
    </div>
  );
};

export default MyWorkouts;
