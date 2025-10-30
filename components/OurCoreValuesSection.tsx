"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PRIMARY_BLUE = "#0c55a6";
const ACCENT_YELLOW = "#fdb813";
const HEADING_COLOR = "#1e1e1e";
const FEATURE_BUTTON_COLOR = "#2ec4b6";

const OurCoreValuesSection: React.FC = () => {
  const coreValues = [
    "Trust & Integrity",
    "Fast & Reliable Service",
    "Eco-Friendly Practices",
    "Customer First Approach",
    "Local Expertise",
    "All Vehicle Types Accepted",
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 relative overflow-hidden mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-10 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text & Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:pr-8"
          >
            {/* Small Heading */}
            <h3
              className="text-md font-semibold uppercase tracking-widest mb-3 relative pb-2 inline-block"
              style={{ color: PRIMARY_BLUE }}
            >
              OUR CORE VALUES
              <span
                className="absolute left-0 bottom-0 w-16 h-0.5 z-10"
                style={{ backgroundColor: PRIMARY_BLUE }}
              ></span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-200 z-0"></span>
            </h3>

            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mt-4 mb-6"
              style={{ color: HEADING_COLOR }}
            >
              DRIVING EXCELLENCE IN
              <br />
              <span className="inline-block relative z-10" style={{ color: PRIMARY_BLUE }}>
                VEHICLE REMOVAL
                <span
                  className="absolute left-0 right-0 -z-10"
                  style={{
                    backgroundColor: ACCENT_YELLOW,
                    height: "14px",
                    bottom: "8px",
                  }}
                ></span>
              </span>{" "}
              & TOWING
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 max-w-prose text-justify">
              At Sydney Car Removal & Towing, our core values define everything we do. We focus on
              providing fast, reliable, and eco-friendly services while maintaining the highest level
              of trust and integrity. Our customer-first approach ensures every vehicle is handled with care.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((value, index) => (
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
                  {value}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[566px] aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src="/coreValues.png"
                alt="Tow truck handling a car"
                fill
                className="object-contain"  // ensures full image is visible
                quality={90}
              />
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default OurCoreValuesSection;
