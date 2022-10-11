import React from "react";
import styles from "../styles/index.module.scss"
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
          <Header level={2}>{data[0].header}</Header>
          <BodyText>{data[0].body}</BodyText>
        </div>
      </Section>
    </>    
  );
}