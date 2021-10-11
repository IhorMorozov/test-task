import React from 'react';
import styles from './CheckboxItem.module.scss';
import st from '../ProfileItem/ProfileItem.module.scss';

const CheckboxItem = (props) => {
  const { onToggle, column, isChecked } = props;

  return (
    <div className={styles.checkboxWrapper} onClick={onToggle}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={onToggle}
        checked={isChecked === 'true'}
      />
      <span className={st.tooltip}>
        {column}
        <span className={st.tooltipText}>Click</span>
      </span>
    </div>
  );
};

export default CheckboxItem;
