import React, { useState } from 'react';
import styles from './Input.module.css';
interface InputProps {
  className?: string;
  input: {
    id: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
    type: string;
  };
  label: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
