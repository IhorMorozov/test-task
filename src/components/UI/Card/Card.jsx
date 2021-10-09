import React from "react";
import Layout from "../Layout/Layout";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { children } = props;
  return <Layout style={styles.card}>{children}</Layout>;
};

export default Card;
