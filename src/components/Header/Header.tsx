import React from "react";
import styles from "./Header.module.scss";

const Header = ({ level, data }) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.h1Container}>
        {level}
      </div>
      <div className={styles.data}>{data}</div>
    </div>
  );
};

export default Header;
