import { AnimatePresence } from "framer-motion";
import React from "react";

const TransitionProvider = () => {
  return (
    <AnimatePresence>
      <div>TransitionProvider</div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
