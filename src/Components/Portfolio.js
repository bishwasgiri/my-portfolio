import React from "react";
import personal from "../Images/avatar.jpg";
import college from "../Images/college.png";
import portfolio from "../Images/portfolio.png";

import { linkIcon } from "../Assets/asset";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Portfolio = () => {
  const targetRef = useRef(null);
  const portfolioItems = [
    {
      id: "id1",
      heading: "Portfolio Website",
      paragraph: `This is my portfolio website made with the technlogies like React, Tailwind, Framer-motion and Firebase `,
      techUsed: [
        { id: "one", tech: "React" },
        { id: "two", tech: "Tailwind" },
        { id: "three", tech: "Firebase" },
        { id: "four", tech: "Framer Motion" },
      ],
      imageLink: portfolio,
      websiteLink: "https://main--fabulous-kulfi-779b61.netlify.app/",
    },

    {
      id: "id2",
      heading: "College Website",
      paragraph: `This is a full-stack development college website made with React, Tailwind, Monog-Db,Node.js and Framer-Motion`,
      techUsed: [
        { id: "five", tech: "React" },
        { id: "six", tech: "Tailwind" },
        { id: "seven", tech: "Mongo-Db" },
        { id: "node", tech: "Node Js" },
        { id: "eight", tech: "Framer Motion" },
      ],
      imageLink: college,
      websiteLink: "https://main--fabulous-kulfi-779b61.netlify.app/",
    },
    {
      id: "id3",
      heading: "E-commerce Website",
      paragraph: `This is a full stack e-commerce website that i am building with technologies like React, Tailwind, Mongo-Db and Node.js`,
      techUsed: [
        { id: "nine", tech: "React" },
        { id: "ten", tech: "Tailwind" },
        { id: "eleven", tech: "Mongo-Db" },
        { id: "nodes", tech: "Node Js" },
        { id: "twelve", tech: "Framer Motion" },
      ],
      imageLink: personal,
      websiteLink: "https://main--fabulous-kulfi-779b61.netlify.app/",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["-12 1", "1 1"],
  });

  return (
    <motion.div className="w-full mx-auto mt-[390px] flex flex-col items-center space-y-10 text-white xl:w-3/5 relative">
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
        <h1 className="text-7xl opacity-10 tracking-widest">Portfolio</h1>
        <span className="text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold ">
          Portfolio
        </span>
      </motion.div>
      <div className="flex flex-col items-center justify-center space-y-9 relative w-full">
        {portfolioItems.map((item, index) => {
          return (
            <motion.a
              key={item.id}
              style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
              }}
              ref={targetRef}
              href={item.websiteLink}
              className={`flex flex-col items-center justify-center space-y-4 border bg-gray-800 rounded-lg p-11 relative lg:flex-row w-full
                ${index === 2 ? "opacity-50 pointer-events-none" : ""}`}
              whileHover={{
                boxShadow: "0 0px 5px -1px rgba(255, 255, 255, 0.6)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <span className="absolute top-4 right-4">{linkIcon}</span>
              <div className="cursor-pointer rounded-lg  overflow-hidden group h-52 md:h-[400px] w-full lg:h-96 lg:w-1/2">
                <img
                  src={item.imageLink}
                  alt=""
                  className="w-full rounded-lg transition transform duration-1000 group-hover:-translate-y-[78%] group-hover:overflow-hidden p-4"
                />
              </div>
              <div className="flex flex-col space-y-9 w-full md:w-1/2">
                <h1 className="text-center text-3xl md:text-5xl font-bold">
                  {item.heading}
                </h1>
                <p className="text-center text-2xl">{item.paragraph}</p>
                <ul className="flex flex-wrap gap-5 items-center justify-center">
                  {item.techUsed.map((tech) => {
                    return (
                      <li
                        key={tech.id}
                        className="text-2xl  bg-[#0B1623] rounded-lg shadow-lg px-5 py-3"
                      >
                        {tech.tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* Overlay effect when index === 2 */}
              {index === 2 && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 z-10 flex items-center justify-center"></div>
              )}
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Portfolio;
