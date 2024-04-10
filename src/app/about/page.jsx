"use client";

import Skill from "@/components/Skill";
import CircleArrow from "@/icons/general/CircleArrow";
import Logo from "@/icons/logos/Logo";
import { motion } from "framer-motion";

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
          <div className="flex flex-col space-y-12 justify-center">
            {/* Biography Title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            {/* Biography Description */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              nesciunt expedita asperiores veritatis sapiente maiores illum
              aspernatur animi fugit et? Qui, numquam quae facilis nobis culpa
              sequi ea sint, rem praesentium quos, hic nesciunt voluptatum et
              necessitatibus saepe quas temporibus at aperiam est facere? Cum
              aliquam laborum adipisci eum inventore?
            </p>
            {/* Biography Quote */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              quae.
            </span>

            {/* Biography Signature */}
            <div className="self-end">
              <Logo />
            </div>

            {/* Scroll Icon SVG */}
            <div>
              <button className="hover:scale-110 hover:text-[#EBB361] duration-200">
                <CircleArrow />
              </button>
            </div>
          </div>

          {/* Skills Container */}
          <div className="flex flex-col space-y-12 justify-center">
            {/* Skills Title */}
            <h1 className="font-bold text-2xl">SKILLS</h1>

            {/* Skills List*/}
            <div>
              <Skill />
            </div>

            {/* Scroll Icon SVG */}
            <div>
              <button className="hover:scale-110 hover:text-[#EBB361] duration-200">
                <CircleArrow />
              </button>
            </div>
          </div>

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
