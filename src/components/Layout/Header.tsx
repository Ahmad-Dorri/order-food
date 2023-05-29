import React from 'react';
import { mealsImage } from '../../assets';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header: React.FC = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="a table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
