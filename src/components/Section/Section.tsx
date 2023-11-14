import React, { useEffect, useRef } from "react";
import styles from "./Section.module.scss";

interface SectionProps{
  children: React.ReactNode;
  bgColor: string;
  audio?:string;
}

const Section = ({ children, audio, bgColor }: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const audioRefB = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Intersecting")
          audioRef.current.src = `/sounds/${audio}`;
          audioRef.current.play();
        } else {
          audioRef.current.pause()
        }
      },
      { root: null, rootMargin: '100px', threshold: 1.0 }
    );

    if (sectionRef.current) {
      observer.observe(audioRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(audioRef.current);
      }
    };
  }, [audio, audioRef]);


  return(
    <div
      ref={sectionRef} 
      className={styles.section}
      style={{
        backgroundColor: bgColor
      }} 
    >
      <div ref={audioRefB} style={{   backgroundColor: "red" }}>
        <audio ref={audioRef} preload="auto" controls style={{ width: "0.2px", position: "absolute", top: "20%" }}>
          <source type="audio/mpeg" src={"/sounds/test.mp3"} />
        </audio>
      </div>
      {children}
    </div>
  );
};

export default Section;
