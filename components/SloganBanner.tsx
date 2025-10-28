"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SloganBanner: React.FC = () => {
  const text = "Instant Cash Paid From $200 for Unwanted Cars";

  const [animationKey, setAnimationKey] = useState(0);

  // Loop the animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000); // 5000ms = 5s

    return () => clearInterval(interval);
  }, []);

  // Variants for parent container
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Variants for each letter
  const letter = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#044E9E] w-full">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <motion.p
          key={animationKey} // changing key triggers re-animation
          className="text-center text-sm font-medium tracking-wide flex justify-center flex-wrap"
          style={{ color: "#fdb813" }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

export default SloganBanner;
