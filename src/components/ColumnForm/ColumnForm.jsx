import React from "react";
import Layout from "../UI/Layout/Layout";
import styles from "./ColumnForm.module.scss";
import Search from "../UI/Search/Search";
import CheckboxList from "../CheckboxList/CheckboxList";
import Button from "../UI/Button/Button";

const ColumnForm = (props) => {
  const { setVisible } = props;
  const onSubmitForm = () => {
    setVisible(false);
  };
  return (
    <Layout style={styles.columnForm}>
      <h1>Select columns</h1>
      <Search />
      <CheckboxList />
      <Button style={styles.buttonForm} buttonHandler={onSubmitForm}>
        Apply
      </Button>
    </Layout>
  );
};

export default ColumnForm;
