import React, { ReactNode } from 'react';
import styles from './Card.module.css';
interface cardProps {
  children: ReactNode;
  className?: string;
}
const Card: React.FC<cardProps> = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
