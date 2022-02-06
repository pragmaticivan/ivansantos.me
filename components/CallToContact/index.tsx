import React from "react";
import styles from "./styles.module.scss";

const CallToContact = () => (
  <div className={styles.CallToContact}>
    If you fancy a chat, drop me a line at{" "}
    <a href="mailto:hello@ivansantos.me">hello@ivansantos.me</a>
  </div>
);

export default CallToContact;
