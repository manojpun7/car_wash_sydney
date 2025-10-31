"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const PRIMARY_BLUE = "#0c55a6";
const HEADING_COLOR = "#1e1e1e";
const FEATURE_BUTTON_COLOR = "#2ec4b6";

const AboutWhyChoose: React.FC = () => {
  const features = [
    { title: "Instant Cash On The Spot", description: "Get paid immediately when we pick up your vehicle. No waiting, no hassle." },
    { title: "Free Sydney-Wide Removal", description: "We offer free vehicle removal anywhere across Sydney, no hidden charges." },
    { title: "Eco-Friendly Recycling", description: "All vehicles are recycled responsibly to minimize environmental impact." },
    { title: "7 Days A Week Service", description: "Our team is available every day of the week to suit your schedule." },
    { title: "Friendly Local Experts", description: "Our team is knowledgeable, approachable, and always ready to help." },
    { title: "All Vehicles Accepted", description: "Cars, trucks, motorcycles – we accept all types of vehicles, working or not." },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !featuresRef.current) return;

      const featuresRect = featuresRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When top of features reaches top of viewport
      const start = 0; // featuresRect.top <= 0
      const end = featuresRect.height - windowHeight; // total scrollable distance for features

      let progress = (windowHeight - featuresRect.top) / (featuresRect.height);
      progress = Math.min(Math.max(progress, 0), 1);

      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">

          {/* Left Column: Sticky Text */}
          <div className="w-full lg:w-1/2 lg:relative">
            <div className="lg:sticky lg:top-28">
              <h3 className="text-md font-semibold uppercase tracking-widest mb-3 relative pb-2 inline-block" style={{ color: PRIMARY_BLUE }}>
                WHY CHOOSE US ?
                <span className="absolute left-0 bottom-0 w-16 h-0.5 z-10" style={{ backgroundColor: PRIMARY_BLUE }}></span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-200 z-0"></span>
              </h3>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mt-4 mb-6" style={{ color: HEADING_COLOR }}>
                TRUSTED, <span className="inline-block relative z-10" style={{ color: PRIMARY_BLUE }}>FAST</span> & HASSLE-FREE
              </h2>

              <p className="text-gray-600 text-lg mb-8 text-justify">
                At Sydney Car Removal and Towing Services, we are all about making the process
                simple, quick, and stress-free. Whether your vehicle is old, damaged, or
                unwanted, our friendly local team ensures you get the best value, instant cash,
                and free pickup anywhere in Sydney — all in one smooth experience.
              </p>
            </div>
          </div>

          {/* Vertical Progress Line */}
          <div className="hidden lg:block w-1 bg-gray-300 relative">
            <motion.div
              className="absolute left-0 top-0 w-1 bg-primary-blue"
              style={{ backgroundColor: PRIMARY_BLUE }}
              animate={{ height: `${lineHeight}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </div>

          {/* Right Column: Features Cards */}
          <div ref={featuresRef} className="w-full lg:w-1/2 flex flex-col gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-xl font-medium mb-2" style={{ backgroundColor: FEATURE_BUTTON_COLOR }}>
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature.title}
                </div>
                <p className="text-gray-600 text-lg text-justify ml-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
