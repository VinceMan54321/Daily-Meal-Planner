import React from "react"
import Meal from "./mealBox"

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients

  return (
    <main>
      <section className="nutrients">
        <h1>Daily Macros</h1>
        <ul> 
          <li>Calories: {nutrients.calories.toFixed(2)} cal</li> 
          <li>Carbs: {nutrients.carbohydrates.toFixed(2)} g</li> 
          <li>Fat: {nutrients.fat.toFixed(2)} g</li> 
          <li>Protein: {nutrients.protein.toFixed(2)} g</li> 
        </ul> 
      </section>

      <section className="meals">
        {mealData.meals.map(meal => {
          return <Meal key={meal.id} meal={meal} /> //for each meal in MealData, return Meal component with key as meal id and Meal as meal itself
        })}
      </section>
    </main>
  )//^^displays macros, .toFixed rounds to specified number of decimal places 
}