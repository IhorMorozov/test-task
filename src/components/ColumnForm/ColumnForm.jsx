import React, { useContext, useState } from 'react';
import Layout from '../UI/Layout/Layout';
import styles from './ColumnForm.module.scss';
import Search from '../UI/Search/Search';
import CheckboxList from '../CheckboxList/CheckboxList';
import Button from '../UI/Button/Button';
import Context from '../../context/context';

const ColumnForm = (props) => {
  const { setVisible } = props;
  const { checkboxes, setCheckboxes } = useContext(Context);
  const onSubmitForm = () => {
    setVisible(false);
  };

  const onToggleCheckbox = (value) => {
    setCheckboxes(
      checkboxes.map((checkbox) => {
        if (checkbox.value === value) {
          if (checkbox.checked === 'true') {
            checkbox.checked = 'false';
          } else {
            checkbox.checked = 'true';
          }
          localStorage.setItem(checkbox.value, checkbox.checked);
        }
        return checkbox;
      })
    );
  };

  return (
    <Layout style={styles.columnForm}>
      <h1>Select columns</h1>
      <Search />
      <CheckboxList checkboxes={checkboxes} onToggle={onToggleCheckbox} />
      <Button style={styles.buttonForm} buttonHandler={onSubmitForm}>
        Apply
      </Button>
    </Layout>
  );
};

export default ColumnForm;
