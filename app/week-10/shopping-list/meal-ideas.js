'use client';
import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    return data.meals || [];
  };

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
      } else {
        setMeals([]);
      }
    };
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h3 className="text-xl font-bold">Meal Ideas for {ingredient}</h3>

      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul>
          <p> Here are some meal idea using {ingredient}:</p>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-2 m-1 bg-slate-900 hover:bg-orange-800 cursor-pointer"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealIdeas;
