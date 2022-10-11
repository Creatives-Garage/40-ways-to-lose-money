import React from "react";
import styles from "./Body.module.scss";

const BodyText = ({ children }) => {
  return(
    <p className={styles.p}>
      {children}
    </p>
  )
};

export default BodyText;
