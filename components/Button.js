import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ label, image, selected, onClick }) => {
  const buttonClass = selected ? `${styles.button} ${styles.selected}` : styles.button;

  return (
    <button className={buttonClass} onClick={onClick}>
      {image && <img src={image} alt={label} className={styles.image} />}
      {label}
    </button>
  );
};

export default Button;