import React, { useState } from 'react';
import './Calculator.css'; // Import CSS file for styling

const Calculator = () => {
  // State for BMI Calculator
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiMessage, setBmiMessage] = useState('');

  // State for Calorie Calculator
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [calories, setCalories] = useState(null);

  // State for Macros Calculator
  const [goal, setGoal] = useState('maintain');
  const [macros, setMacros] = useState(null);

  // BMI Calculation
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      if (bmiValue < 18.5) {
        setBmiMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiMessage('Overweight');
      } else {
        setBmiMessage('Obese');
      }
    } else {
      setBmiMessage('Please enter valid weight and height.');
    }
  };

  // Calorie Calculation (BMR & TDEE)
  const calculateCalories = () => {
    if (weight && height && age) {
      let bmr;
      if (gender === 'male') {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
      } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
      }
      const tdee = (bmr * parseFloat(activityLevel)).toFixed(0);
      setCalories(tdee);
    } else {
      setCalories(null);
    }
  };

  // Macros Calculation
  const calculateMacros = () => {
    if (calories) {
      let adjustedCalories = parseInt(calories);

      if (goal === 'lose') {
        adjustedCalories -= 500; // Caloric deficit
      } else if (goal === 'gain') {
        adjustedCalories += 500; // Caloric surplus
      }

      const protein = ((adjustedCalories * 0.3) / 4).toFixed(1); // 30% of calories from protein (4 kcal per gram)
      const carbs = ((adjustedCalories * 0.4) / 4).toFixed(1); // 40% of calories from carbs (4 kcal per gram)
      const fats = ((adjustedCalories * 0.3) / 9).toFixed(1); // 30% of calories from fats (9 kcal per gram)

      setMacros({ protein, carbs, fats, totalCalories: adjustedCalories });
    } else {
      setMacros(null);
    }
  };

  return (
    <div className="calculator-container">
      <h1>Fitness Calculator</h1>
      <p>Calculate your BMI, daily calorie needs, and macronutrients.</p>

      {/* BMI Calculator */}
      <div className="calculator-section">
        <h2>BMI Calculator</h2>
        <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && (
          <div className="result">
            <h3>Your BMI: {bmi}</h3>
            <p>Status: {bmiMessage}</p>
          </div>
        )}
      </div>

      {/* Calorie Calculator */}
      <div className="calculator-section">
        <h2>Calorie Calculator</h2>
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
          <option value="1.2">Sedentary (little to no exercise)</option>
          <option value="1.375">Lightly active (1-3 days/week)</option>
          <option value="1.55">Moderately active (3-5 days/week)</option>
          <option value="1.725">Very active (6-7 days/week)</option>
          <option value="1.9">Super active (athlete, twice daily training)</option>
        </select>
        <button onClick={calculateCalories}>Calculate Calories</button>
        {calories && <div className="result"><h3>Daily Calorie Needs: {calories} kcal</h3></div>}
      </div>

      {/* Macros Calculator */}
      <div className="calculator-section">
        <h2>Macronutrient Calculator</h2>
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="maintain">Maintain Weight</option>
          <option value="lose">Lose Weight</option>
          <option value="gain">Gain Weight</option>
        </select>
        <button onClick={calculateMacros}>Calculate Macros</button>
        {macros && (
          <div className="result">
            <h3>Daily Macronutrient Needs</h3>
            <p>Calories: {macros.totalCalories} kcal</p>
            <p>Protein: {macros.protein} g</p>
            <p>Carbs: {macros.carbs} g</p>
            <p>Fats: {macros.fats} g</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
