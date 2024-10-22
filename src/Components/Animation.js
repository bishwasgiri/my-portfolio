import React from "react";
import { motion } from "framer-motion";

const Animation = ({ primaryName, secondaryName }) => {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial="initial"
      whileHover="hovered"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        className="z-10"
      >
        {primaryName}
      </motion.div>
      <motion.div
        className="absolute inset-0 text-blue-600"
        variants={{
          initial: { y: "100%", opacity: 0 },
          hovered: { y: 0, opacity: 1 },
        }}
      >
        {secondaryName}
      </motion.div>
    </motion.div>
  );
};

export default Animation;
