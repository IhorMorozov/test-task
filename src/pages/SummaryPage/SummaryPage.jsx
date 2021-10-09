import React from "react";
import Card from "../../components/UI/Card/Card";
import styles from "./SummaryPage.module.scss";

const SummaryPage = () => {
  return (
    <div className={styles.cardsWrapper}>
      <Card>
        <h1>General info</h1>
        <div className={styles.summaryInfo}>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </Card>
      <Card>
        <h1>Other info</h1>
        <div className={styles.summaryInfo}>
          <p>test</p>
          <p>test</p>
        </div>
      </Card>
    </div>
  );
};

export default SummaryPage;
