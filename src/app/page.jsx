"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row max-w-[1400px] mx-auto">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="Hero img"
            fill
            priority
            className="object-contain"
          />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col space-y-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">Amine Omari</h1>
          {/* Description */}
          <p className="md:text-xl">
            Hi👋! I'm a frontend developer. I create websites people enjoy
            using. I'm skilled in HTML, CSS, and JavaScript, and I use tools
            like React.js and Next.js to enhance websites. I add fun animations
            using GSAP and Framer-motion to make them more appealing. I pay close attention to
            detail and strive for excellence. Let's collaborate to bring your
            ideas to life and make your website shine online!
          </p>
          {/* Buttons */}
          <div className="w-full space-x-2">
            <button className="py-3 px-6 rounded-xl border-2 border-black hover:bg-black hover:text-white hover:scale-95 duration-300">
              View My Work
            </button>
            <button className="py-3 px-6 rounded-xl border-2 border-black hover:bg-black hover:text-white hover:scale-95 duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
