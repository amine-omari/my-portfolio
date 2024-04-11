"use client";

import { motion } from "framer-motion";
import Biography from "./Biography";
import Skills from "./Skills";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full flex flex-col lg:flex-row max-w-[1400px] px-4 mx-auto">
        {/* Text Container */}
        <div>
          {/* Biography Container */}
          <Biography />

          {/* Skills Container */}
          <Skills />

          {/* Experience Container */}
          <div></div>
        </div>
        {/* SVG Container */}
        <div></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
