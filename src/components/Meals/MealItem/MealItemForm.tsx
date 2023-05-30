import React from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm: React.FC<{ id: string; onAddItem: () => void }> = (
  props
) => {
  const submitFormHandler: any = (event: Event) => {
    event.preventDefault();
    props.onAddItem();
  };
  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: props.id,
          min: '1',
          max: '5',
          defaultValue: '1',
          type: 'number',
          step: '1',
        }}
      />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
