import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { useState } from "react";
import Animation from "./Animation";

const parentVariant = {
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

const childVariant = {
  initial: {
    opacity: 0,
    x: 300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Footer = () => {
  const [copyEmail, setCopyEmail] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const email = process.env.REACT_APP_EMAIL;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopyEmail(true);
  };

  return (
    <motion.div
      className="w-4/5 text-white mx-auto mt-[390px] flex flex-col items-center space-y-10 mb-10 xl:w-3/5"
      variants={parentVariant}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="relative" variants={childVariant}>
        <span className="relative text-7xl opacity-10 tracking-widest ">
          Contact
        </span>
        <span className="text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold ">
          Contact
        </span>
      </motion.div>

      <motion.p
        className="flex flex-col items-center justify-center text-xl md:text-3xl"
        variants={childVariant}
      >
        <span className="inline-block text-center lg:text-start">
          I am currently Specializing in{" "}
          <span className="text-blue-600 ml-1">MERN stack development</span>
        </span>

        <span className="inline-block text-center lg:text-start">
          Feel free to get in touch and talk more about your projects
        </span>
      </motion.p>
      <motion.footer
        className="flex flex-wrap gap-4 md:flex-nowrap"
        variants={childVariant}
      >
        <motion.div
          className="flex items-center justify-center px-4 py-3 bg-gray-800 border rounded cursor-pointer"
          whileHover={{
            boxShadow: "0 0px 5px -1px rgba(255, 255, 255, 0.6)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="text-primary">
            <AiOutlineGithub fontSize={25} className="text-blue-600" />
          </span>
          <div className="text-xl ml-2 md:text-2xl">
            <Animation primaryName="Github" secondaryName="Github" />
          </div>
        </motion.div>
        <motion.div className="flex items-center justify-center px-4 py-3 bg-gray-800 border rounded cursor-pointer">
          <span className="text-primary">
            <AiOutlineLinkedin fontSize={28} className="text-blue-600" />
          </span>
          <div className="text-xl ml-2 md:text-2xl">
            <Animation primaryName="LinkedIn" secondaryName="LinkedIn" />
          </div>
        </motion.div>
        <div
          className="mx-auto relative md:w-auto flex items-center justify-center px-4 py-3 border rounded bg-gray-800 cursor-pointer"
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
            <AiOutlineMail fontSize={25} className="text-blue-600" />
          </span>
          <span className="text-xl ml-2  md:text-2xl">Email</span>
        </div>
      </motion.footer>

      <motion.p
        variants={childVariant}
        className="text-center text-xl  md:text-3xl"
      >
        Designed and Developed by <span>Bishwas Giri.</span>
      </motion.p>
    </motion.div>
  );
};

export default Footer;
