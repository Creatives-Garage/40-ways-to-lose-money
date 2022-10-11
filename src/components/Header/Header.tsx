import React from "react";
import styles from "./Header.module.scss";

const Header = ({ children, level }) => {
  switch (level) {
    case 1:
      return <h1 className={styles.h1}>{children}</h1>;
    case 2:
      return <h2 className={styles.h2}>{children}</h2>;
    case 3:
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      throw new Error("Undefined header level");
  }
};

export default Header;
