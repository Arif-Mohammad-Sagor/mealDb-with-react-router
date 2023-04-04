import React from 'react'
import { NavLink } from 'react-router-dom';

const Meal = ({ meal }) => {

    const { idMeal, strMealThumb, strMeal } = meal;

  return (
    <NavLink to={`/meal/${idMeal}`}>
      <div className="shadow-lg p-4 relative ">
        <img src={strMealThumb} className="object-cover rounded-md" />
        <div className="bg-black bg-opacity-0 hover:bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0  rounded-md transition duration-200 text-white flex flex-col ">
          <p className="p-8 text-xl">Name : {strMeal}</p>
          <p className="p-8 text-xl mt-auto">Price : $99</p>
        </div>
      </div>
    </NavLink>
  );
}

export default Meal