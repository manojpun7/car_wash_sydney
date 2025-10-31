"use client";

import React from "react";
import { Truck } from "lucide-react";
import { motion } from "framer-motion";
import RequestQuoteForm from "./RequestQuoteForm";

const PRIMARY_BLUE = "#044E9E";
const HEADING_COLOR = "#1e1e1e";

interface ServiceCardProps {
  title: string;
  icon: React.ElementType;
  bgColorClass: string;
  iconColorClass: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon: Icon,
  bgColorClass,
  iconColorClass,
}) => (
  <div className="flex flex-col items-center p-4 rounded-xl shadow-md border border-gray-100 bg-white min-h-[100px] transition-shadow duration-300 hover:shadow-2xl">
    <div className={`p-4 rounded-xl mb-3 ${bgColorClass} ${iconColorClass} shadow-sm`}>
      <Icon size={30} />
    </div>
    <p className="text-sm font-semibold text-gray-800 text-center leading-snug">{title}</p>
  </div>
);

const AboutUsSection: React.FC = () => {
  return (
    <section className="relative bg-white py-15 min-h-[75vh] overflow-visible">

      {/* Absolute form for LG/XL - Animated from right when in viewport */}
      <motion.div
        className="absolute top-[-70px] right-6 lg:right-15 z-20 hidden lg:block"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <RequestQuoteForm />
      </motion.div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Flex for SM/MD, Grid for LG/XL */}
        <div className="flex flex-col md:flex-col lg:grid lg:grid-cols-12 items-start gap-0">

          {/* LEFT COLUMN - Animated from left when in viewport */}
          <motion.div
            className="w-full flex flex-col items-center lg:items-start mb-6 lg:mb-0 lg:col-span-8"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full md:w-full lg:max-w-3xl">
              {/* Header */}
              <div className="mb-1">
                <h3
                  className="text-md font-semibold uppercase tracking-widest mb-8 relative pb-2 inline-block"
                  style={{ color: PRIMARY_BLUE }}
                >
                  ABOUT US
                  <span
                    className="absolute left-0 bottom-0 w-16 h-0.5 z-10"
                    style={{ backgroundColor: PRIMARY_BLUE }}
                  ></span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-200 z-0"></span>
                </h3>

                <h1
                  className="text-5xl sm:text-5xl font-bold leading-tight tracking-tight text-left lg:text-left"
                  style={{ color: HEADING_COLOR }}
                >
                  WE HAVE{" "}
                  <span className="inline-block relative z-10" style={{ color: PRIMARY_BLUE }}>
                    20 YEARS
                    <span
                      className="absolute left-0 right-0 -z-10"
                     
                    ></span>
                  </span>{" "}
                  OF
                  {" "}
                  <br className="lg:hidden" />
                  EXPERIENCE IN TOWING {" "}
                  <br className="lg:hidden" />
                  SERVICE.
                </h1>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg mb-5 mt-5 text-center lg:text-justify w-full">
                We’re a Sydney-based, family-run business dedicated to providing reliable,
                eco-conscious, and fast car removal solutions. With years of experience, Sam and
                Jay have helped thousands of Sydney residents clear space, earn cash, and recycle
                responsibly.
              </p>

              {/* Service Cards */}
              <div className="grid grid-cols-3  md:grid-cols-3 sm:grid-cols-1 gap-5 w-full">
                <ServiceCard
                  title="24/7 Towing Service"
                  icon={Truck}
                  bgColorClass="bg-gray-50"
                  iconColorClass="text-[#d88907]"
                />
                <ServiceCard
                  title="24/7 Assistance"
                  icon={Truck}
                  bgColorClass="bg-[#fdb813]"
                  iconColorClass="text-[#0c55a6]"
                />
                <ServiceCard
                  title="24/7 Towing Service"
                  icon={Truck}
                  bgColorClass="bg-gray-50"
                  iconColorClass="text-[#d88907]"
                />
              </div>
            </div>
          </motion.div>

          {/* FORM COLUMN for SM/MD only - Animated from right when in viewport */}
          <motion.div
            className="w-full flex justify-center mt-6 lg:hidden"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full md:w-full ">
              <RequestQuoteForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
