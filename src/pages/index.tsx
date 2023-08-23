import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/indexPage.module.scss";
import Header from "components/Header";
import Section from "components/Section";
import BodyText from "components/Body";
import { data } from "dataSource";
import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";

const ArrowDown = () => {
  return (
    <motion.div 
    initial={{
      opacity: 0,
      y: -50
    }}
    animate={{
      opacity: 1,
      y: 0
    }}
    transition={{
      delay: 8,
      stiffness: 20,
      duration: 1.5
    }}
    className={styles.arrowBtnContainer}>
      <div className={styles.circlesContainer}>
        <svg width="60" height="60">
          <circle
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            r="28"
            cx="30"
            cy="30"
          ></circle>
          <circle
            className={styles.animatedCircle}
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            r="28"
            cx="30"
            cy="30"
            // style="stroke-dasharray: 175.929, 175.929; transform: rotate(-90deg); transform-origin: 30px 30px;"
            // transform-origin="30px 30px"
            // strokeDashoffset="175.92918860102841"
          ></circle>
        </svg>
      </div>
      <span>
        <svg
          className={styles.animatedArrow}
          // class="transform rotate-0"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
            // fill="currentColor"
          ></path>
        </svg>
      </span>
    </motion.div>
  );
}

export default function Index() {
  const { scrollYProgress } = useScroll();
  console.log("Data: ", scrollYProgress);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportHeight(window.innerHeight);
    }
  }, []);

  const handleScrollOffsetDown = () => {
    if (viewportHeight === 0) {
      setViewportHeight(window.innerHeight);
    }
    window.scrollBy(0, viewportHeight);
  };
  const handleScrollOffsetUp = () => {
    if (viewportHeight === 0) {
      setViewportHeight(window.innerHeight);
    }
    window.scrollBy(0, -viewportHeight);
  };

  return (
    <div className={styles.pageWrapper}>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={styles.progressTracker}
      />
      <div className={styles.buttonsContainer}>
        <button onClick={handleScrollOffsetDown} className={styles.buttonNext}>
          <ArrowDown />
        </button>
        <button className={styles.buttonPrev} onClick={handleScrollOffsetUp}>
          <ArrowDown />
        </button>
      </div>

      <div className={styles.coverPageWrapper}>
        <div className={styles.coverPage}>
          <div className={styles.topPart}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 15,
                type: "spring",
                stiffness: 50,
                delay: 1,
              }}
              className={styles.forty}
            >
              40
            </motion.div>
            <div className={styles.waysToLose}>
              <div className={styles.waysTo}>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 5,
                    type: "spring",
                    stiffness: 50,
                    delay: 2,
                  }}
                  className={styles.ways}
                >
                  WAYS
                </motion.div>
                <motion.div
                  initial={{
                    x: 200,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 5,
                    type: "spring",
                    stiffness: 50,
                    delay: 3,
                  }}
                  className={styles.to}
                >
                  TO
                </motion.div>
              </div>
              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 5,
                  type: "spring",
                  stiffness: 50,
                  delay: 4,
                }}
                className={styles.lose}
              >
                LOSE
              </motion.div>
            </div>
          </div>
          <div className={styles.middlePart}>
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 5,
                type: "spring",
                stiffness: 50,
                delay: 5,
              }}
              className={styles.moneyIn}
            >
              <motion.div className={styles.money}>MONEY</motion.div>
              <div className={styles.in}>IN</div>
            </motion.div>
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 5,
                type: "spring",
                stiffness: 50,
                delay: 6,
              }}
              className={styles.nairobi}
            >
              NAIROBI
            </motion.div>
          </div>
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 5,
              type: "spring",
              stiffness: 20,
              delay: 7,
            }}
            className={styles.coverFooter}
          >
            written by Thayu
          </motion.div>
        </div>
      </div>
      <Section bgColor="#9B5DE5">
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
          <Header level={"01"} data={data[0].header.toUpperCase()} />
          <BodyText>{data[0].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#F15BB5">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 17 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={"02"} data={data[1].header.toUpperCase()} />
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
      <Section bgColor="#FEE440">
        <motion.div
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={"03"} data={data[2].header.toUpperCase()} />
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
      <Section bgColor="#03BBF9">
        <div className={styles.bodyLeft}>
          <Header level={"04"} data={data[3].header.toUpperCase()} />
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
      <Section bgColor="#02F5D4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
          className={styles.nywele}
        >
          <Image src="/shuka.png" width={600} height={760} alt="Shuka" />
        </motion.div>
        <motion.div
          initial={{
            y: 0,
          }}
          whileInView={{
            y: -145,
          }}
          className={styles.bodyRight}
        >
          <Header level={"05"} data={data[4].header.toUpperCase()} />
          <BodyText>{data[4].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#9B5DE5">
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
          <Header level={"06"} data={data[5].header.toUpperCase()} />
          <BodyText>{data[5].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#F15BB5">
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
          <Header level={"07"} data={data[6].header.toUpperCase()} />
          <BodyText>{data[6].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#FEE440">
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
          <Header level={"08"} data={data[7].header.toUpperCase()} />
          <BodyText>{data[7].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#03BBF9">
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
          <Header level={"09"} data={data[8].header.toUpperCase()} />
          <BodyText>{data[8].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#02F5D4">
        <motion.div
          initial={{ x: 100, opacity: 0, y: 100 }}
          whileInView={{ x: 0, opacity: 1, y: 20 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={"10"} data={data[9].header.toUpperCase()} />
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
      <Section bgColor="#9B5DE5">
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
          <Header level={11} data={data[10].header.toUpperCase()} />
          <BodyText>{data[10].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#F15BB5">
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
          whileInView={{ y: -10 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={12} data={data[11].header.toUpperCase()} />
          <BodyText>{data[11].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#FEE440">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={13} data={data[12].header.toUpperCase()} />
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
      <Section bgColor="#03BBF9">
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 100 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={14} data={data[17].header.toUpperCase()} />
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
      <Section bgColor="#02F5D4">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={15} data={data[13].header.toUpperCase()} />
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
      <Section bgColor="#9B5DE5">
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 100 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={16} data={data[14].header.toUpperCase()} />
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
      <Section bgColor="#F15BB5">
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={17} data={data[15].header.toUpperCase()} />
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
      <Section bgColor="#FEE440">
        <motion.img
          src={data[19].image}
          alt="phone"
          className={styles.politician}
          initial={{ y: -800 }}
          whileInView={{ y: -50 }}
          transition={{ duration: 2.5, ease: "backInOut" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={18} data={data[19].header.toUpperCase()} />
          <BodyText>{data[19].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#03BBF9">
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
          <Header level={19} data={data[20].header.toUpperCase()} />
          <BodyText>{data[20].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#02F5D4">
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
          <Header level={20} data={data[21].header.toUpperCase()} />
          <BodyText>{data[21].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#9B5DE5">
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
          <Header level={21} data={data[22].header.toUpperCase()} />
          <BodyText>{data[22].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#F15BB5">
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
          <Header level={22} data={data[23].header.toUpperCase()} />
          <BodyText>{data[23].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#FEE440">
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
          <Header level={23} data={data[24].header.toUpperCase()} />
          <BodyText>{data[24].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#03BBF9">
        <motion.img
          src={data[25].image}
          alt="phone"
          className={styles.greenHouse}
          initial={{ y: 300 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 4, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={24} data={data[25].header.toUpperCase()} />
          <BodyText>{data[25].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#02F5D4">
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
          <Header level={25} data={data[26].header.toUpperCase()} />
          <BodyText>{data[26].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#9B5DE5">
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
          <Header level={26} data={data[27].header.toUpperCase()} />
          <BodyText>{data[27].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#F15BB5">
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
          <Header level={27} data={data[28].header.toUpperCase()} />
          <BodyText>{data[28].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#FEE440">
        <motion.img
          src={data[29].image}
          alt="phone"
          className={styles.nitakurudishia}
          initial={{}}
          whileInView={{ rotate: [0, 0, 25, -25, 0] }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
        />
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={28} data={data[29].header.toUpperCase()} />
          <BodyText>{data[29].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#03BBF9">
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
          <Header level={29} data={data[30].header.toUpperCase()} />
          <BodyText>{data[30].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#02F5D4">
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
          <Header level={30} data={data[31].header.toUpperCase()} />
          <BodyText>{data[31].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#9B5DE5">
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
          <Header level={31} data={data[32].header.toUpperCase()} />
          <BodyText>{data[32].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#03BBF9">
        <motion.img
          src={data[33].image}
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
          <Header level={32} data={data[33].header.toUpperCase()} />
          <BodyText>{data[33].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#9B5DE5">
        <motion.img
          src={data[35].image}
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
          <Header level={33} data={data[35].header.toUpperCase()} />
          <BodyText>{data[35].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#F15BB5">
        <motion.img
          src={data[34].image}
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
          <Header level={34} data={data[34].header.toUpperCase()} />
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
