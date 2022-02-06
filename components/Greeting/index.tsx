import React from "react";
import styles from "./Greeting.module.scss";

const Greeting = () => (
  <div className={styles.Greeting}>
    <div className={styles.Greeting__calling}>HOWDY!</div>
    <div className={styles.Greeting__aboutme}>I am Ivan Santos</div>
  </div>
);

export default Greeting;
