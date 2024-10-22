import React, { useState } from "react";

import avatar from "../Images/avatar.jpg";
import Animation from "./Animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { storage } from "../Config/firbase";
import { ref, getDownloadURL } from "firebase/storage";

const About = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [600, 2000], [1, 0]);
  const y = useTransform(scrollY, [600, 2000], [0, -200]);

  const fileName = process.env.REACT_APP_FILENAME;

  const storageRef = ref(storage, `cv/${fileName}`);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      const url = await getDownloadURL(storageRef);

      const response = await fetch(url);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", fileName); // Specify the download filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError("Error Downloading the file");
    }
  };

  return (
    <motion.div
      className="w-4/5 text-white mx-auto mt-[100px] flex flex-col items-center space-y-10 xl:w-3/5 relative"
      style={{ opacity, y }}
      transition={{
        duration: 0.6,
      }}
    >
      <motion.div
        className="relative"
        initial={{
          x: 300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
          },
        }}
      >
        {/* <span className="absolute top_0 left-30">{doodles}</span> */}
        <h1 className="text-7xl opacity-10  tracking-widest relative">About</h1>
        <span className="text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold">
          About
        </span>
      </motion.div>
      <div className="flex flex-col items-center justify-center space-y-5 space-x-0 lg:flex-row  lg:space-x-10 lg:space-y-0">
        <motion.div
          className="w-full lg:w-3/4"
          initial={{
            x: -300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
            },
          }}
        >
          <img src={avatar} alt="avatar" className="w-full" />
        </motion.div>
        <motion.section
          className="flex flex-col items-center lg:items-start md:w-full  space-y-9"
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
            },
          }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">Introduction</h1>
          <p className="text-2xl text-center lg:text-3xl lg:text-start ">
            I am a Full Stack Developer who is passionate about creating robust
            web application with a solid foundation in modern technologies. I
            specialize in MongoDb, Express.js, Node.js and React
          </p>
          <button
            onClick={handleDownload}
            className="px-4 py-3 bg-gray-800 rounded border text-xl text-primary"
          >
            {isLoading ? (
              <span>Downloading...</span>
            ) : (
              <Animation
                primaryName="Download CV"
                secondaryName="Download CV"
              />
            )}
          </button>
          {error && <span>{error}</span>}
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;
