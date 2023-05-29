import React from 'react';
import CartIcon from '../../assets/CartIcon';
import styles from './HeaderCartButton.module.css';
import { useDispatch } from 'react-redux';

import { modalActions } from '../../store/UI/modalSlice';

const HeaderCartButton: React.FC = () => {
  const dispatch = useDispatch();

  const modalViewController = () => {
    dispatch(modalActions.toggleModal());
  };
  return (
    <button onClick={modalViewController} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
