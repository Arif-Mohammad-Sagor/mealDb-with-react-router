import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Meal from './Meal'

const Root = () => {

  const data = useLoaderData()
  console.log(data);


  return (
    <div className='mx-8 my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {data.meals && data.meals.map((meal) =>
        <Meal key={meal.idMeal}
          meal={meal}></Meal>
      )}
    </div>
  );
}

export default Root