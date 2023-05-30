import React from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useSelector } from 'react-redux';
import RootState from '../../store/types';
import itemInterface from '../../models';
const DUMMY_MEALS: itemInterface[] = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    amount: 0,
    key: 'm1',
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    amount: 0,
    key: 'm2',
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    amount: 0,
    key: 'm3',
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    amount: 0,
    key: 'm4',
  },
];
const AvailableMeals: React.FC = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((mealItem) => {
            return (
              <MealItem
                key={mealItem.id}
                price={mealItem.price}
                name={mealItem.name}
                description={mealItem.description}
                id={mealItem.id}
                amount={mealItem.amount}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
