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

    if (audioRef.current) {
      observer.observe(audioRef.current);
    }

    return () => {
      if (audioRef.current) {
        observer.unobserve(audioRef.current);
      }
    };
  }, [audio, audioRef]);


  return(
    <div
      ref={sectionRef} 
      className={styles.section} 
      style={{backgroundColor: bgColor}}
    >
      <audio ref={audioRef} preload="auto">
        <source type="audio/mpeg" src={"/sounds/test.mp3"} />
      </audio>
      {children}
    </div>
  );
};

export default Section;
