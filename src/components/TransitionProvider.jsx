"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence>
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.div
          className="w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
