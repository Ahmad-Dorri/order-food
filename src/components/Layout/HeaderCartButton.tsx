import React from 'react';
import CartIcon from '../../assets/CartIcon';
import styles from './HeaderCartButton.module.css';
const HeaderCartButton: React.FC = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
