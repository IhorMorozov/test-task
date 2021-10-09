import React from "react";
import styles from "./CheckboxItem.module.scss";

const CheckboxItem = (props) => {
  const { onChange, column } = props;
  return (
    <div className={styles.checkboxWrapper}>
      <input type="checkbox" className={styles.checkbox} onChange={onChange} />
      <p>{column}</p>
    </div>
  );
};

export default CheckboxItem;
