import './App.css';
import React, { useState } from "react"
import MealList from "./mealMacros"
import pic from './foodpic.jpg'

function App() {
  const [mealData, setMealData] = useState(null)
  const [calories, setCalories] = useState(2000) //default value of 2000 calories
  const [diet, setDiet] = useState(null);

  function getMealData() { //fetches API through onClick event
    fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=bf05533470c44d229a3f6f997c17df8c&timeFrame=day&targetCalories=${calories}&diet=${diet}`) 
    //^can replace day with week to get weekly results, calories state is inputted
      .then(response => response.json())
      .then(data => {setMealData(data)}) //fetches data and places into setMealData
      .catch(() => {console.log("Something went wrong. Please retry.")})
  }

  function handleCalories(e) {setCalories(e.target.value)} //setting calorie input
  function handleDiet(e) {setDiet(e.target.value)} //setting diet input (if any)

  return (
    <div className="App">
      <section className="heading">
          <h1>Daily Meal Planner</h1>
          <img className="logoPicture" src={pic} alt="headingPic"/>
      </section>
      <section className="dietchoices">
        <h3>Choose a Diet Plan</h3>
        <input type="checkbox" value="vegetarian" onChange={handleDiet}/> Vegetarian <label></label>
        <input type="checkbox" value="vegan" onChange={handleDiet}/> Vegan <label></label>
        <input type="checkbox" value="ketogenic" onChange={handleDiet}/> Keto <label></label>
        <input type="checkbox" value="pescetarian" onChange={handleDiet}/> Pescetarian <label></label>
        <input type="checkbox" value="" onChange={handleDiet}/> No Specific Diet <label></label>
      </section>
      <section className="controls">
      <h4>Input Calorie Amount</h4>
        <input
          type="number"
          placeholder="Daily Calorie Goal"
          onChange={handleCalories}
        />
        <button onClick={getMealData}>Retrieve Daily Meals</button> 
      </section> 
      {mealData && <MealList mealData={mealData} />} 
    </div> //^passing mealData into MealList
  )
}

export default App
