import React from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/UI/modalSlice';
import RootState from '../../store/types';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.meal.items);
  const totalAmount = useSelector((state: RootState) => state.meal.totalAmount);
  const closeModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {items.map((cartItem) => (
        <li key={cartItem.id} className={styles['cart-item']}>
          <div>
            <span>{cartItem.name}</span>
            <span>&times;{cartItem.amount}</span>
          </div>

          <div className={styles['cart-item__actions']}>
            <button>+</button>
            <button>-</button>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button}>Order</button>
        <button onClick={closeModalHandler} className={styles['button--alt']}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
