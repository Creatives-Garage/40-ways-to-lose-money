import React from "react";
import styles from "./Section.module.scss";

interface SectionProps{
  children: React.ReactNode;
  bgColor: string;
}

const Section = ({ children, bgColor }: SectionProps) => {
  return(
    <div 
      className={styles.section} 
      style={{backgroundColor: bgColor}}
    >
      {children}
    </div>
  );
};

export default Section;
