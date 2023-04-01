import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

// Declaring button types
const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

// Creating Button
function Button({ type, variant = 'primary', children, ...rest }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
// Create SelectButton
function SelectButton({ children, id, ...rest }) {
  return (
    <select
      id={id}
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
