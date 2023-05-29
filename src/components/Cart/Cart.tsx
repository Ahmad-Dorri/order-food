import React from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/UI/modalSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: '2', name: 'sushi', amount: 2, price: 22.99 }].map((cartItem) => (
        <li key={cartItem.id}>{cartItem.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>119.3$</span>
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
