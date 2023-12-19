import React from "react";
import { motion } from "framer-motion";

export const Transition = (props: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="inline-block"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export const TransitionEase = (props: { children: React.ReactNode, duration?:any }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      transition={{ duration: props.duration, ease: "easeInOut" }}
    >
      {props.children}
    </motion.div>
  );
};
