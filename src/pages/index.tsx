import React from "react";
import Image from "next/image";
import styles from "../styles/indexPage.module.scss"
import Header from "components/Header";
import Section from "components/Section";
import BodyText from "components/Body";
import { data } from "dataSource";

export default function Index() {
  return (
    <>
      <Section bgColor="#81E8E5">
        <div className={styles.ponzi}></div>
        <div className={styles.body}>
          <Header level={1}>{data[0].header.toUpperCase()}</Header>
          <BodyText>{data[0].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#FEA794">
        <div className={styles.bodyRight}>
          <Header level={1}>{data[1].header.toUpperCase()}</Header>
          <BodyText>{data[1].body}</BodyText>
        </div>
        <div className={styles.pastor}>
          <Image src="/Pastor.png" width={560} height={650} alt="Pastor"/>
        </div>
      </Section>
      <Section bgColor="#B6E4A4">
        <div className={styles.luthuli}>
          <Image src="/Luthuli.png" width={600} height={840} alt="Pastor"/>          
        </div>
        <div className={styles.bodyLeft}>
          <Header level={1}>{data[2].header.toUpperCase()}</Header>
          <BodyText>{data[2].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#03F1FA">
        <div className={styles.bodyRight}>
          <Header level={1}>{data[3].header.toUpperCase()}</Header>
          <BodyText>{data[3].body}</BodyText>
        </div>
        <div className={styles.washwash}>
          <Image src="/WashWash.png" width={600} height={760} alt="Pastor"/>
        </div>
      </Section>
      <Section bgColor="#F97F89">
        <div className={styles.nywele}>
          <Image src="/shuka.png" width={600} height={760} alt="Pastor"/>
        </div>
        <div className={styles.bodyLeft}>
          <Header level={1}>{data[4].header.toUpperCase()}</Header>
          <BodyText>{data[4].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#C193B8">
        <div className={styles.ben10}>
          <Image src="/ben10.png" width={680} height={560} alt="Pastor"/>
        </div>
        <div className={styles.bodyRight}>
          <Header level={1}>{data[5].header.toUpperCase()}</Header>
          <BodyText>{data[5].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#FEA894">
        <div className={styles.iphone}>
          <Image src="/HAND.png" width={680} height={560} alt="Pastor"/>
        </div>
        <div className={styles.bodyLeft}>
          <Header level={1}>{data[6].header.toUpperCase()}</Header>
          <BodyText>{data[6].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#FECD87">
        <div className={styles.shitstorm}>
          <Image src="/streetboy.png" width={680} height={780} alt="Pastor"/>
        </div>
        <div className={styles.bodyRight}>
          <Header level={1}>{data[7].header.toUpperCase()}</Header>
          <BodyText>{data[7].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#FEF490">
        <div className={styles.logbook}>
          <Image src="/LOGBOOK.png" width={680} height={580} alt="Pastor"/>
        </div>
        <div className={styles.bodyLeft}>
          <Header level={1}>{data[8].header.toUpperCase()}</Header>
          <BodyText>{data[8].body}</BodyText>
        </div>
      </Section>
    </>    
  );
}