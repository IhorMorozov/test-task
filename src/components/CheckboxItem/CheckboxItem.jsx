import React from 'react';
import styles from './CheckboxItem.module.scss';

const CheckboxItem = (props) => {
  const { onToggle, column, isChecked } = props;

  return (
    <div className={styles.checkboxWrapper} onClick={onToggle}>
      <input
        type="checkbox"
        className={styles.checkbox}
        // onChange={onToggle}
        checked={isChecked === 'true'}
      />
      <p>{column}</p>
    </div>
  );
};

export default CheckboxItem;
