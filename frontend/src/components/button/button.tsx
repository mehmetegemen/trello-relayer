import { ButtonProps } from './button-types';
import { noop } from 'lodash';
import styles from './button.module.css';
import { useCallback } from 'react';

const Button: React.FC<ButtonProps> = ({ onClick = noop , icon, label, description }) => {
  const onClickHandler = useCallback(onClick, [onClick]);
  
  return (
    <button
      onClick={onClickHandler}
      className={styles.button}
      aria-label={description}
      title={description}
    >
      {icon || label}
    </button>
  );
};

export default Button;
