import React, { useEffect, useRef } from "react";
import styles from "./Section.module.scss";

interface SectionProps{
  children: React.ReactNode;
  bgColor: string;
  onEnterViewport: ()=> void;
}

const Section = ({ children, bgColor, onEnterViewport }: SectionProps) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnterViewport();
        }
      },
      { root: null, rootMargin: '0px', threshold: 1.0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onEnterViewport]);

  return(
    <div
      ref={sectionRef} 
      className={styles.section} 
      style={{backgroundColor: bgColor}}
    >
      {children}
    </div>
  );
};

export default Section;
