import React from "react";
import Image from "next/image";
import styles from "../styles/indexPage.module.scss";
import Header from "components/Header";
import Section from "components/Section";
import BodyText from "components/Body";
import { data } from "dataSource";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Index() {
  console.log("Data: ", data[13])
  return (
    <div className={styles.pageWrapper}>
      <Section bgColor="yellow">
        <div className={styles.home}>
          <motion.img
            initial={{
              scale: 0.1,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 2,
            }}
            src="/homepage.png"
            alt="home"
            className={styles.homeImg}
          />
        </div>
      </Section>
      <Section bgColor="#c9f414">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 3, type: "spring", stiffness: 50 }}
          viewport={{ once: false }}
          className={styles.ponzi}
        >
          <Image src="/pyramid.png" width={560} height={550} alt="Pyramid" />
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 3, type: "spring" }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>1. {data[0].header.toUpperCase()}</Header>
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
          <Header level={1}>2. {data[1].header.toUpperCase()}</Header>
          <BodyText>{data[1].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={styles.pastor}
        >
          <Image src="/Pastor.png" width={560} height={650} alt="Pastor" />
        </motion.div>
      </Section>
      <Section bgColor="#309ead">
        <motion.div
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>3. {data[2].header.toUpperCase()}</Header>
          <BodyText>{data[2].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className={styles.luthuli}
        >
          <Image src="/Luthuli.png" width={600} height={840} alt="Pastor" />
        </motion.div>
      </Section>
      <Section bgColor="#03F1FA">
        <div className={styles.bodyLeft}>
          <Header level={1}>4. {data[3].header.toUpperCase()}</Header>
          <BodyText>{data[3].body}</BodyText>
        </div>
        <motion.img
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{ duration: 2, stiffness: 100 }}
          viewport={{ once: false }}
          src="/WashWash.png"
          alt="washwash"
          className={styles.washwash}
        />
      </Section>
      <Section bgColor="#F97F89">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
          className={styles.nywele}
        >
          <Image src="/shuka.png" width={600} height={760} alt="Shuka" />
        </motion.div>
        <div className={styles.bodyRight}>
          <Header level={1}>5. {data[4].header.toUpperCase()}</Header>
          <BodyText>{data[4].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#329dad">
        <motion.div
          className={styles.ben10}
          initial={{ x: 200 }}
          whileInView={{ x: -10 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <Image src="/ben10.png" width={680} height={560} alt="Pastor" />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>6. {data[5].header.toUpperCase()}</Header>
          <BodyText>{data[5].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#991e21">
        <motion.div
          initial={{ opacity: 0, scale: "50%" }}
          whileInView={{ opacity: 1, scale: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className={styles.iphone}
        >
          <Image src="/HAND.png" width={680} height={560} alt="iPhone" />
        </motion.div>
        <div className={styles.bodyRight}>
          <Header level={1}>7. {data[6].header.toUpperCase()}</Header>
          <BodyText>{data[6].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#dfd946">
        <motion.img
          initial={{ opacity: 0, scale: "50%" }}
          whileInView={{ opacity: 1, scale: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          src="/streetboy.png"
          alt="Streetboy"
          className={styles.shitstorm}
        />
        <div className={styles.bodyLeft}>
          <Header level={1}>8. {data[7].header.toUpperCase()}</Header>
          <BodyText>{data[7].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#d1383b">
        <motion.div
          initial={{ opacity: 0, scale: "0%" }}
          whileInView={{ opacity: 1, scale: "70%", rotate: "360deg" }}
          transition={{ duration: 1, stiffness: 100 }}
          viewport={{ once: false }}
          className={styles.logbook}
        >
          <Image src="/LOGBOOK.png" width={680} height={580} alt="Logbook" />
        </motion.div>
        <div className={styles.bodyRight}>
          <Header level={1}>9. {data[8].header.toUpperCase()}</Header>
          <BodyText>{data[8].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#8ab035">
        <motion.div
          initial={{ x: 100, opacity: 0, y: 100 }}
          whileInView={{ x: 0, opacity: 1, y: 20 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>10. {data[9].header.toUpperCase()}</Header>
          <BodyText>{data[9].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className={styles.house}
        >
          <Image src="/house.png" width={680} height={800} alt="Pastor" />
        </motion.div>
      </Section>
      <Section bgColor="#3560b0">
        <motion.img
          initial={{ y: 200 }}
          whileInView={{ y: 10 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          src="/multilevel.png"
          alt="Multilevel"
          className={styles.multilevel}
        />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 10 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>11. {data[10].header.toUpperCase()}</Header>
          <BodyText>{data[10].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#e9868b">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className={styles.patapotea}
        >
          <Image src="/patapotea.png" width={480} height={600} alt="Pastor" />
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>12. {data[11].header.toUpperCase()}</Header>
          <BodyText>{data[11].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#bfe3aa">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>13.. {data[12].header.toUpperCase()}</Header>
          <BodyText>{data[12].body}</BodyText>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          src={data[12].image}
          width={680}
          height={800}
          alt="Pastor"
          className={styles.newspaper}
        />
      </Section>
      <Section bgColor="#f7ce91">
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 100 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>14. {data[17].header.toUpperCase()}</Header>
          <BodyText>{data[17].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className={styles.duka}
        >
          <Image src={data[17].image} width={595} height={700} alt="Betting" />
        </motion.div>
      </Section>
      <Section bgColor="#99e5e3">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>15. {data[13].header.toUpperCase()}</Header>
          <BodyText>{data[13].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 0.8, y: 120 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className={styles.biz}
        >
          <Image
            src={data[13].image}
            width={680}
            height={800}
            alt="Naanza Biz"
          />
        </motion.div>
      </Section>
      <Section bgColor="#ebeeb2">
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 100 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>16. {data[14].header.toUpperCase()}</Header>
          <BodyText>{data[14].body}</BodyText>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          src={data[14].image}
          alt="vote"
          className={styles.vote}
        />
      </Section>
      <Section bgColor="#99e5e3">
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>17. {data[15].header.toUpperCase()}</Header>
          <BodyText>{data[15].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: false }}
          className={styles.phone}
        >
          <Image src={data[15].image} width={640} height={700} alt="phone" />
        </motion.div>
      </Section>

      <Section bgColor="#DAD199">
        <motion.img
          src={data[19].image}
          alt="phone"
          className={styles.politician}
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>18. {data[19].header.toUpperCase()}</Header>
          <BodyText>{data[19].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#DF978B">
        <motion.img
          src={data[20].image}
          alt="phone"
          className={styles.jaba}
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>19. {data[20].header.toUpperCase()}</Header>
          <BodyText>{data[20].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#BCC67A">
        <motion.img
          src={data[21].image}
          alt="phone"
          className={styles.refund}
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>20. {data[21].header.toUpperCase()}</Header>
          <BodyText>{data[21].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#8DB2EA">
        <motion.img
          src={data[22].image}
          alt="phone"
          className={styles.agent}
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>21. {data[22].header.toUpperCase()}</Header>
          <BodyText>{data[22].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#D6A560">
        <motion.img
          src={data[23].image}
          alt="phone"
          className={styles.coin}
          initial={{ rotate: "0deg", opacity: 0, scale: 0.1 }}
          whileInView={{ rotate: "360deg", opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>22. {data[23].header.toUpperCase()}</Header>
          <BodyText>{data[23].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#D49B97">
        <motion.img
          src={data[24].image}
          alt="phone"
          className={styles.forex}
          initial={{ rotate: "0deg", opacity: 0, scale: 0.1 }}
          whileInView={{ rotate: "360deg", opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>23. {data[24].header.toUpperCase()}</Header>
          <BodyText>{data[24].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#78B570">
        <motion.img
          src={data[25].image}
          alt="phone"
          className={styles.greenHouse}
          initial={{ rotate: "0deg", opacity: 0, scale: 0.1 }}
          whileInView={{ rotate: "360deg", opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>24. {data[25].header.toUpperCase()}</Header>
          <BodyText>{data[25].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#4D8AB1">
        <motion.img
          src={data[26].image}
          alt="phone"
          className={styles.con}
          initial={{ rotate: "0deg", opacity: 0, scale: 0.1 }}
          whileInView={{ rotate: "360deg", opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>25. {data[26].header.toUpperCase()}</Header>
          <BodyText>{data[26].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#DAD199">
        <motion.img
          src={data[27].image}
          alt="phone"
          className={styles.online}
          initial={{ y: -150, opacity: 0, scale: 0.1 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>26. {data[27].header.toUpperCase()}</Header>
          <BodyText>{data[27].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#F4AA73">
        <motion.img
          src={data[28].image}
          alt="phone"
          className={styles.advancePayment}
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>27. {data[28].header.toUpperCase()}</Header>
          <BodyText>{data[28].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#D984B6">
        <motion.img
          src={data[29].image}
          alt="phone"
          className={styles.nitakurudishia}
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>28. {data[29].header.toUpperCase()}</Header>
          <BodyText>{data[29].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#E9C7A8">
        <motion.img
          src={data[30].image}
          alt="phone"
          className={styles.lostIdLoans}
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>29. {data[30].header.toUpperCase()}</Header>
          <BodyText>{data[30].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#EFE5A1">
        <motion.img
          src={data[31].image}
          alt="phone"
          className={styles.roadsideChurches}
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>30. {data[31].header.toUpperCase()}</Header>
          <BodyText>{data[31].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#6FACCD">
        <motion.img
          src={data[32].image}
          alt="phone"
          className={styles.mganga}
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>31. {data[32].header.toUpperCase()}</Header>
          <BodyText>{data[32].body}</BodyText>
        </motion.div>
      </Section>

      <Section bgColor="#D79193">
        <motion.img
          src={data[33].image}
          alt="phone"
          className={styles.scamBook}
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>40. {data[33].header.toUpperCase()}</Header>
          <BodyText>{data[33].body}</BodyText>
        </motion.div>
      </Section>
      <div className={styles.endCredits}>
        <div className={styles.creditsHeader}>
          <h1>CREW AND CREDITS</h1>
        </div>
        <div className={styles.creditInnerWrapper}>
          <div className={styles.credit}>
            <span className={styles.creditName}>Writing</span>
            <span className={styles.creditRole}>Thayu</span>
          </div>
          <div className={styles.credit}>
            <span className={styles.creditName}>Editing</span>
            <span className={styles.creditRole}>Adam Kiboi</span>
          </div>
          <div className={styles.credit}>
            <span className={styles.creditName}>Illustration</span>
            <span className={styles.creditRole}>Thayu, Diana Kavaya</span>
          </div>
          <div className={styles.credit}>
            <span className={styles.creditName}>Web</span>
            <span className={styles.creditRole}>
              Zidane Gimiga, Henry Mutua
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}