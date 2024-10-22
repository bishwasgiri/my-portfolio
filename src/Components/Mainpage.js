import Hero from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Animation from "./Animation";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import { useState, useEffect } from "react";

const loadervariant = {
  initial: {
    scaleX: 0,
    y: 0,
  },

  animate: {
    scaleX: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

const nameZoopVariant = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const nameVariant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const listVariant = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const Mainpage = () => {
  const [isLoading, setIsloading] = useState(true);

  const delay = 1000;
  const navLists = ["About", "Skills", "Portfolio", "Contact"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
      // setHasLoadeed(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <div className="text-red bg-white h-[100vh] w-full flex justify-center items-center">
            <motion.div className="w-3/5">
              <motion.p
                className="text-center"
                exit="exit"
                variants={nameZoopVariant}
                initial="initial"
                animate="animate"
              >
                Loading..
              </motion.p>
              <motion.p
                className="text-center"
                exit="exit"
                variants={nameVariant}
                initial="initial"
                animate="animate"
                layoutId="logo"
              >
                Bishwas
              </motion.p>
              <motion.div
                variants={loadervariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-gray-300 h-1 rounded w-full"
                layoutId="lines"
                transition={{ duration: delay / 1000 }}
              ></motion.div>
            </motion.div>
          </div>
        ) : (
          <div className="relative overflow-x-hidden">
            <motion.header className="w-full mx-auto flex justify-center items-center p-6 xl:justify-between lg:w-3/5">
              <div className="hidden xl:flex">
                <motion.div
                  className="text-primary tracking-wide text-4xl cursor-pointer"
                  layoutId="logo"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Link to="Home" smooth={true} duration={500} offset={-110}>
                    <Animation
                      primaryName="Bishwas."
                      secondaryName="विश्वास."
                    />
                  </Link>
                </motion.div>
              </div>
              <nav className="flex items-center text-primary list-none space-x-4 sm:space-x-10 lg relative">
                {navLists.map((item, index) => {
                  return (
                    <motion.li
                      key={index}
                      className="text-xl tracking-tighter cursor-pointer lg:text-3xl lg:tracking-wide"
                      variants={listVariant}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                      <Link
                        to={item}
                        smooth={true}
                        duration={500}
                        offset={-110}
                      >
                        <Animation primaryName={item} secondaryName={item} />
                      </Link>
                    </motion.li>
                  );
                })}
              </nav>
            </motion.header>
            <motion.div
              className="bg-gray-800 h-1 rounded mx-auto w-3/5"
              layoutId="lines"
              transition={{ duration: 0.8, ease: "easeInOut" }}
            ></motion.div>
            <Element name="Home">
              <Hero />
            </Element>
            <Element name="About">
              <About />
            </Element>
            <Element name="Skills">
              <Skill />
            </Element>
            <Element name="Portfolio">
              <Portfolio />
            </Element>
            <Element name="Contact">
              <Footer />
            </Element>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Mainpage;
