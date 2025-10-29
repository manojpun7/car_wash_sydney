"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PRIMARY_BLUE = "#0c55a6";
const ACCENT_YELLOW = "#fdb813";
const HEADING_COLOR = "#1e1e1e";
const FEATURE_BUTTON_COLOR = "#2ec4b6";

const WhyChooseUsSection: React.FC = () => {
  const features = [
    "Instant Cash On The Spot",
    "Free Sydney-Wide Removal",
    "Eco-Friendly Recycling",
    "7 Days A Week Service",
    "Friendly Local Experts",
    "All Vehicles Accepted",
  ];

  return (
    <section className="bg-white py-16 md:py-2 lg:py-10 relative overflow-hidden mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-10 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[566px] h-72 sm:h-80 md:h-[342px] lg:h-[342px] overflow-hidden">
              <Image
                src="/chooseImg.png"
                alt="Tow truck loading a red car"
                layout="fill"
                objectFit="cover"
                quality={90}
                style={{ transform: "scale(1.2)", transition: "transform 0.3s ease-in-out" }}
              />
            </div>
          </motion.div>

          {/* Right Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:pr-8"
          >
            <h3
              className="text-md font-semibold uppercase tracking-widest mb-3 relative pb-2 inline-block"
              style={{ color: PRIMARY_BLUE }}
            >
              WHY CHOOSE US
              <span
                className="absolute left-0 bottom-0 w-16 h-0.5 z-10"
                style={{ backgroundColor: PRIMARY_BLUE }}
              ></span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-200 z-0"></span>
            </h3>

            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mt-4 mb-6"
              style={{ color: HEADING_COLOR }}
            >
              TRUSTED,{" "}
             <span className="inline-block relative z-10" style={{ color: PRIMARY_BLUE }}>
                    FAST
                    <span
                      className="absolute left-0 right-0 -z-10"
                      style={{
                        backgroundColor: ACCENT_YELLOW,
                        height: "14px",
                        bottom: "8px",
                      }}
                    ></span>
                  </span>{" "}
              & HASSLE-
              <br className="hidden sm:inline" />
              FREE
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-prose text-justify">
              At Sydney Car Removal and Towing Services, we are all about making the process
              simple, quick, and stress-free. Whether your vehicle is old, damaged, or
              unwanted, our friendly local team ensures you get the best value, instant cash,
              and free pickup anywhere in Sydney — all in one smooth experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium transition duration-200 ease-in-out transform hover:scale-105"
                  style={{ backgroundColor: FEATURE_BUTTON_COLOR }}
                >
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
