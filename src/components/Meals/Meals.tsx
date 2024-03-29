import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummery from './MealsSummery';

const Meals: React.FC = () => {
  return (
    <>
      <MealsSummery />
      <AvailableMeals />
    </>
  );
};

export default Meals;
