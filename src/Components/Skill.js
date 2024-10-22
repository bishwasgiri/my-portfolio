import React from "react";
import {
  framerIcon,
  gitIcon,
  htmlIcon,
  jsIcon,
  mongoIcon,
  nodeIcon,
  reactIcon,
} from "../Assets/asset";
import { motion, useScroll, useTransform } from "framer-motion";

const skillParentVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillChildVariant = {
  initial: {
    opacity: 0,
    x: 300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Skill = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [1800, 3000], [1, 0]);
  const y = useTransform(scrollY, [1800, 3000], [0, -200]);

  return (
    <motion.div className="w-4/5 text-primary mx-auto mt-[390px] flex flex-col items-center space-y-10 xl:w-3/5">
      <motion.div
        className="relative mb-4"
        initial={{
          opacity: 0,
          x: 300,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
          },
        }}
        style={{ opacity, y }}
      >
        <h1 className="text-7xl opacity-10 tracking-widest">Skills</h1>
        <span className="text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold ">
          Skills
        </span>
      </motion.div>
      <motion.div
        className="text-center text-2xl tracking-wide md:text-3xl max-w-[1020px]"
        initial={{
          opacity: 0,
          x: 300,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
          },
        }}
      >
        <motion.div
          style={{ opacity, y }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col items-center md:block"
        >
          <span className="leading-relaxed">
            The main area of expertise is full stack developement
          </span>
          <span className="leading-relaxed ">
            I build web application using HTML, CSS, JS and library like React,
            run time like
          </span>
          <span className="leading-relaxed ml-1 ">
            NodeJs and database like MongoDb
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 lg:space-x-7"
        variants={skillParentVariant}
        initial="initial"
        whileInView="animate"
      >
        <motion.div
          className="flex flex-col items-center w-20 "
          variants={skillChildVariant}
        >
          {htmlIcon}
          <span className="flex items-center justify-center mt-3 text-xl">
            HTML
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-20 "
          variants={skillChildVariant}
        >
          {jsIcon}
          <span className="flex items-center justify-center mt-3 text-xl">
            Javascript
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-20 "
          variants={skillChildVariant}
        >
          {reactIcon}
          <span className="flex items-center justify-center mt-3 text-xl">
            React
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-20 "
          variants={skillChildVariant}
        >
          {nodeIcon}
          <span className="flex items-center justify-center mt-3 text-xl">
            Node JS
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-20 "
          variants={skillChildVariant}
        >
          {mongoIcon}
          <span className="flex items-center justify-center mt-3 text-xl">
            MongoDb
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-20 "
          variants={skillChildVariant}
        >
          {gitIcon}
          <span className="flex items-center justify-center mt-3 text-xl">
            Git
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-20 "
          variants={skillChildVariant}
        >
          {framerIcon}
          <span className="flex items-center justify-center mt-3 text-xl">
            Framer
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skill;
