import React from "react";
import Image from "next/image";
import styles from "../styles/indexPage.module.scss"
import Header from "components/Header";
import Section from "components/Section";
import BodyText from "components/Body";
import { data } from "dataSource";
import {motion, useMotionValue, useTransform} from "framer-motion"

export default function Index() {
  return (
    <div className={styles.pageWrapper}>
      <Section bgColor="#81E8E5">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 3, type: "spring", stiffness: 50 }}
          viewport={{ once: false }} 
          className={styles.ponzi}
        >
          <Image src="/pyramid.png" width={560} height={550} alt="Pastor"/>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 3, type: "spring" }}
          viewport={{ once: false }} 
          className={styles.bodyRight}
        >
          <Header level={1}>{data[0].header.toUpperCase()}</Header>
          <BodyText>{data[0].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#FEA794">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 17 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: false }} 
          className={styles.bodyLeft}
        >
          <Header level={1}>{data[1].header.toUpperCase()}</Header>
          <BodyText>{data[1].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}        
          className={styles.pastor}
        >
          <Image src="/Pastor.png" width={560} height={650} alt="Pastor"/>
        </motion.div>
      </Section>
      <Section bgColor="#B6E4A4">
        <motion.div
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }} 
          className={styles.bodyRight}
        >
          <Header level={1}>{data[2].header.toUpperCase()}</Header>
          <BodyText>{data[2].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }} 
          className={styles.luthuli}
        >
          <Image src="/Luthuli.png" width={600} height={840} alt="Pastor"/>          
        </motion.div>
      </Section>
      <Section bgColor="#03F1FA">
        <div className={styles.bodyLeft}>
          <Header level={1}>{data[3].header.toUpperCase()}</Header>
          <BodyText>{data[3].body}</BodyText>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, stiffness: 100 }}
          viewport={{ once: false }} 
          className={ styles.washwash }>
          <Image src="/WashWash.png" width={600} height={760} alt="Pastor"/>
        </motion.div>
      </Section>
      <Section bgColor="#F97F89">
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }} 
          className={styles.nywele}
        >
          <Image src="/shuka.png" width={600} height={760} alt="Pastor"/>
        </motion.div>
        <div className={styles.bodyRight}>
          <Header level={1}>{data[4].header.toUpperCase()}</Header>
          <BodyText>{data[4].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#C193B8">
        <motion.div 
          className={styles.ben10}
          initial={{ x: 200 }}
          whileInView={{ x: -10 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }} 
        >
          <Image src="/ben10.png" width={680} height={560} alt="Pastor"/>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }} 
          className={styles.bodyLeft}
        >
          <Header level={1}>{data[5].header.toUpperCase()}</Header>
          <BodyText>{data[5].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#FEA894">
        <motion.div
          initial={{ opacity: 0, scale: "50%" }}
          whileInView={{ opacity: 1, scale: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: false }} 
          className={styles.iphone}
        >
          <Image src="/HAND.png" width={680} height={560} alt="Pastor"/>
        </motion.div>
        <div className={styles.bodyRight}>
          <Header level={1}>{data[6].header.toUpperCase()}</Header>
          <BodyText>{data[6].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#FECD87">
        <motion.div
          initial={{ opacity: 0, scale: "50%" }}
          whileInView={{ opacity: 1, scale: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: false }} 
          className={styles.shitstorm}>
          <Image src="/streetboy.png" width={680} height={780} alt="Pastor"/>
        </motion.div>
        <div className={styles.bodyLeft}>
          <Header level={1}>{data[7].header.toUpperCase()}</Header>
          <BodyText>{data[7].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#FEF490">
        <motion.div
          initial={{ opacity: 0, scale: "0%"}}
          whileInView={{ opacity: 1, scale:"70%", rotate: "360deg" }}
          transition={{ duration: 1, stiffness: 100 }}
          viewport={{ once: false }} 
          className={styles.logbook}
        >
          <Image src="/LOGBOOK.png" width={680} height={580} alt="Pastor"/>
        </motion.div>
        <div className={styles.bodyRight}>
          <Header level={1}>{data[8].header.toUpperCase()}</Header>
          <BodyText>{data[8].body}</BodyText>
        </div>
      </Section>
    </div>    
  );
}