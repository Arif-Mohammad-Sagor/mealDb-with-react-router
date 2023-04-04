import React from 'react'
import { useLoaderData } from 'react-router-dom'

const MealDetails = () => {
    const singleMeal = useLoaderData()
    const singleMealDetail = singleMeal.meals;
    console.log(singleMealDetail);

    let ingredients = [];

    for (let i = 1; i <=5; i++){
        ingredients.push( singleMealDetail[0][`strIngredient${i}`]);
    }

  return (
    <div className="mx-8 grid md:grid-cols-2">
      <div className="w-4/6 h-4/6 p-4">
        <img src={singleMealDetail[0].strMealThumb} />
      </div>

      <div className="my-8 text-xl text-purple-700 ">
        <p>Name : {singleMealDetail[0].strMeal}</p>
        <p>Category : {singleMealDetail[0].strCategory}</p>
              <p>Region : {singleMealDetail[0].strArea}</p>
              <p className='mb-2'>Ingredients:</p>
              {ingredients.map(ingre => <li> {ingre}</li>)}
              <p className='mt-2'>Instructions: {singleMealDetail[0].strInstructions.slice(0,250)} ...</p>
      </div>
    </div>
  );
}

export default MealDetails