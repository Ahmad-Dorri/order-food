import React from 'react';
import CartIcon from '../../assets/CartIcon';
import styles from './HeaderCartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/UI/modalSlice';
import RootState from '../../store/types';

const HeaderCartButton: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.meal.items);
  const modalViewController = () => {
    dispatch(modalActions.toggleModal());
  };
  const totalItems = items.reduce((accumulator, item) => {
    if (item.amount !== undefined) {
      return accumulator + item.amount;
    }
    return accumulator;
  }, 0);
  return (
    <button onClick={modalViewController} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
