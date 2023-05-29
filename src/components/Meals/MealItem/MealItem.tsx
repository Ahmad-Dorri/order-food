import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import itemInterface from '../../../models';
const MealItem: React.FC<itemInterface> = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3> {props.name} </h3>
        <div className={styles.description}>{props.description}</div>
        <div>{props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
