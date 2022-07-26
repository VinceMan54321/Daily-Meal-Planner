import React, { useState, useEffect } from "react"

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("")
  //const [info, setMealInfo] = useState(null)
  //const [nutrition, setNutrition] = useState(null)

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=bf05533470c44d229a3f6f997c17df8c&includeNutrition=false`)
        //`https://api.spoonacular.com/recipes/${meal.id}/nutritionWidget.json?apiKey=bf05533470c44d229a3f6f997c17df8c`
    //^retrieving meal recipe from meal.id
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.image) //retrieving image data
        //setMealInfo(data)
        //setNutrition(data)
      })
      .catch(() => {console.log("Something went wrong. Please retry.")})
  }, [meal.id])//puts meal.id in an array to iterate through and stops useEffect from infinite loop

  return (
    <article className = "individual-meal">
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation Time: {meal.readyInMinutes} minutes</li>
        <li>Number of Servings: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl}>View Recipe URL</a>
    </article>
  )
}