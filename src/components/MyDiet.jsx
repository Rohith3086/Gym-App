import React, { useState } from 'react';
import './MyDiet.css'; // Ensure you have the correct CSS file

const MyDiet = () => {
  const [activeTab, setActiveTab] = useState('fatLoss'); // Default diet tab
  const [activeGoal, setActiveGoal] = useState('muscleGain'); // Default goal tab

  console.log("Active Goal:", activeGoal); // Debugging log to check state updates

  // Content for each diet plan
  const dietPlans = {
    fatLoss: {
      title: 'Fat Loss Diet Plan',
      description: 'This diet plan is designed to help you lose fat by maintaining a calorie deficit while ensuring sufficient protein intake.',
    },
    calorieDeficit: {
      title: 'Calorie Deficit Diet Plan',
      description: 'A structured plan to help you stay in a calorie deficit to promote weight loss while maintaining muscle mass.',
    },
    weightLoss: {
      title: 'Weight Loss Diet Plan',
      description: 'A balanced approach to reduce overall body weight with a mix of calorie restriction and proper nutrients.',
    },
    weightGain: {
      title: 'Weight Gain Diet Plan',
      description: 'This plan helps with healthy weight gain by focusing on high-calorie, nutrient-dense foods.',
    },
    muscleGain: {
      title: 'Muscle Gain Diet Plan',
      description: 'Designed to provide your body with the necessary nutrients to build muscle and increase strength.',
    },
    bulking: {
      title: 'Bulking Diet Plan',
      description: 'A high-calorie diet plan to promote muscle growth with a focus on calorie surplus and high protein intake.',
    },
    cutting: {
      title: 'Cutting Diet Plan',
      description: 'A diet to help you shed fat while preserving muscle mass by focusing on a calorie deficit and nutrient timing.',
    },
  };

  // Content for each goal
  const goalInstructions = {
    muscleGain: {
      title: 'Muscle Gain Tips',
      instructions: [
        'Choose compound exercises that work multiple major muscle groups, such as squats and bench press.',
        'Make your workouts short and intense rather than long and leisurely.',
        'Avoid wasting time or money on powders, pills, or products that claim to increase muscle mass; these claims are not scientifically proven.',
      ],
    },
    fatLoss: {
      title: 'Fat Loss Tips',
      instructions: [
        'Increase your cardio to burn more calories and maintain a calorie deficit.',
        'Incorporate high-intensity interval training (HIIT) to increase fat burning.',
        'Focus on a balanced diet rich in protein and fiber to keep you full longer.',
      ],
    },
    weightLoss: {
      title: 'Weight Loss Tips',
      instructions: [
        'Track your calorie intake to ensure you are in a calorie deficit.',
        'Focus on a nutrient-dense diet, including plenty of vegetables, lean proteins, and whole grains.',
        'Incorporate regular physical activity, including both cardio and strength training.',
      ],
    },
    weightGain: {
      title: 'Weight Gain Tips',
      instructions: [
        'Focus on calorie-dense foods such as nuts, seeds, and avocados.',
        'Eat larger portion sizes to ensure you are in a calorie surplus.',
        'Include strength training in your routine to help gain lean muscle mass.',
      ],
    },
    bulking: {
      title: 'Bulking Tips',
      instructions: [
        'Increase your caloric intake significantly while focusing on protein to help build muscle.',
        'Prioritize compound lifts like deadlifts and squats to maximize muscle growth.',
        'Ensure you’re eating enough carbs to fuel intense workouts and recovery.',
      ],
    },
    cutting: {
      title: 'Cutting Tips',
      instructions: [
        'Reduce calorie intake to create a calorie deficit, but ensure you’re still getting enough protein to maintain muscle.',
        'Focus on strength training while incorporating more cardio to burn fat.',
        'Incorporate nutrient-dense foods like leafy greens, lean proteins, and healthy fats.',
      ],
    },
  };

  return (
    <div className="page-container">
      <h1>My Diet</h1>
      <p>Your meal plans and nutrition tracking will appear here.</p>

      {/* Tabs for Diet Plan */}
      <div className="diet-tabs">
        {Object.keys(dietPlans).map((key) => (
          <button
            key={key}
            className={activeTab === key ? 'active' : ''}
            onClick={() => setActiveTab(key)}
          >
            {dietPlans[key].title.split(' ')[0]} {/* Displays first word only */}
          </button>
        ))}
      </div>

      {/* Content for active diet plan tab */}
      <div className="diet-content">
        <h2>{dietPlans[activeTab]?.title}</h2>
        <p>{dietPlans[activeTab]?.description}</p>
      </div>

      {/* Tabs for Goal */}
      <div className="goal-tabs">
        <h2>What is your goal?</h2>
        {Object.keys(goalInstructions).map((key) => (
          <button
            key={key}
            className={activeGoal === key ? 'active' : ''}
            onClick={() => setActiveGoal(key)}
          >
            {goalInstructions[key].title.split(' ')[0]} {/* Displays first word */}
          </button>
        ))}
      </div>

      {/* Instructions for the selected goal */}
      <div className="goal-content">
        <h3>{goalInstructions[activeGoal]?.title}</h3>
        <ul>
          {goalInstructions[activeGoal]?.instructions?.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyDiet;
