import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import itemInterface from '../../../models';
import { useDispatch } from 'react-redux';
import { mealsActions } from '../../../store/meals/mealsSlice';

const MealItem: React.FC<itemInterface> = (props) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.meal}>
      <div>
        <h3> {props.name} </h3>
        <div className={styles.description}>{props.description}</div>
        <div>{props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddItem={() => {
            dispatch(
              mealsActions.addItem({
                description: props.description,
                id: props.id,
                key: props.id,
                name: props.name,
                price: props.price,
                amount: 3,
              })
            );
          }}
        />
      </div>
    </li>
  );
};

export default MealItem;
