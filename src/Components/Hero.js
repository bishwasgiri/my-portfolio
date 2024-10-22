import React from "react";
import { useState } from "react";
import { handIcon } from "../Assets/asset";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SiFreelancer } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-scroll";
import Animation from "./Animation";
import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const [copyEmail, setCopyEmail] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const email = process.env.REACT_APP_EMAIL;

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const x = useTransform(scrollY, [0, 300], [0, -100]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopyEmail(true);
  };

  return (
    <div className="w-4/5  mx-auto text-primary p-4 relative mt-2 md:mt-10 xl:w-3/5">
      <motion.div
        className="flex flex-col space-y-6 relative md:space-y-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col items-center md:items-start"
          style={{ opacity, x }}
        >
          <motion.span
            className="text-2xl md:text-4xl flex items-center space-x-2"
            variants={childVariants}
          >
            <span className="text-blue-600 -rotate-12">{handIcon}</span>
            <span className="text-blue-600">There, I am</span>
          </motion.span>
          <motion.div
            className="font-extrabold text-4xl cursor-pointer md:text-8xl lg:text-[150px]"
            variants={childVariants}
          >
            <Animation
              primaryName="Bishwas Giri"
              secondaryName="विश्वास गिरी"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="text-2xl tracking-wide font-normal flex flex-start flex-col md:text-5xl"
          style={{ opacity, x }}
        >
          <motion.div
            className="flex flex-col items-center md:items-start"
            variants={childVariants}
          >
            <span className="font-bold text-center md:text-start">
              Full Stack Developer.
            </span>
            <span className="opacity-60 font-normal text-2xl text-center md:text-start md:text-4xl">
              A technology enthusiast Currently in Nepal
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center space-y-4 md:items-start"
          style={{ opacity, x }}
        >
          <motion.div
            className="text-xl flex items-center justify-center space-x-3 md:text-4xl"
            variants={childVariants}
          >
            <span>
              <IoRocketOutline size={28} />
            </span>
            <span>
              Specializing in
              <span className="text-blue-600 ml-1">MERN stack development</span>
            </span>
          </motion.div>
          <motion.p
            className="text-xl flex items-center justify-center space-x-3 md:text-4xl"
            variants={childVariants}
          >
            <span>
              <SiFreelancer size={28} />
            </span>
            <span>A FreeLance Developer</span>
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center space-y-3 space-x-0 md:flex-row md:justify-start  md:space-y-0 md:space-x-3"
          style={{ opacity, x }}
        >
          <motion.div
            className="flex items-center justify-center px-4 py-3 bg-gray-800 border rounded cursor-pointer w-full md:w-auto"
            variants={childVariants}
          >
            <span>
              <AiOutlineGithub fontSize={28} className="text-blue-600" />
            </span>
            <div className="text-2xl ml-2 md:text-4xl">
              <Animation primaryName="Github" secondaryName="Github" />
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center px-4 py-3 bg-gray-800 border rounded cursor-pointer w-full md:w-auto "
            variants={childVariants}
          >
            <span className="text-primary">
              <AiOutlineLinkedin fontSize={28} className="text-blue-600" />
            </span>
            <div className="text-2xl ml-2 md:text-4xl">
              <Animation primaryName="linkedIn" secondaryName="linkedin" />
            </div>
          </motion.div>
          <motion.div
            className="mx-auto relative  flex items-center justify-center px-4 py-3 border rounded bg-gray-800 cursor-pointer w-full md:w-auto "
            variants={childVariants}
            onMouseEnter={() => {
              setShowDiv(true);
            }}
            onMouseLeave={() => {
              setShowDiv(false);
              setCopyEmail(false);
            }}
          >
            {showDiv && (
              <div className="absolute top-0 w-full h-full bg-blue-600 rounded opacity-95 flex justify-center items-center">
                <div
                  className="text-center z-10 font-extrabold"
                  onClick={copyToClipboard}
                >
                  {copyEmail ? "Copied" : "Click To Copy"}
                </div>
              </div>
            )}
            <span>
              <AiOutlineMail fontSize={28} className="text-blue-600" />
            </span>

            <span className="text-2xl ml-2 md:text-4xl">Email</span>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex justify-center items-center cursor-pointer mt-[100px]  mx-auto "
        style={{ opacity, x }}
      >
        <Link to="About" smooth={true} duration={500} offset={-110}>
          <MdKeyboardDoubleArrowDown className="text-3xl animate-bounce" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
