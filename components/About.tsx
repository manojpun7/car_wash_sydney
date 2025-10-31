"use client";

import React from "react";
import { Truck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const PRIMARY_BLUE = "#044E9E";
const ACCENT_YELLOW = "#fdb813";
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

const About: React.FC = () => {
  return (
    <section className="relative bg-white min-h-[75vh]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/howImg.png"
          alt="About background"
          fill
          priority
          className="object-cover object-center opacity-15"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="w-full flex flex-col lg:flex-row items-start gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          {/* Left Content (Text + Cards) */}
          <div className="flex-1">
            {/* Section Title */}
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

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-left mb-6"
              style={{ color: HEADING_COLOR }}
            >
              WE HAVE{" "}
              <span className="inline-block relative z-10" style={{ color: PRIMARY_BLUE }}>
                20 YEARS
                <span
                  className="absolute left-0 right-0 -z-10"
                  style={{ backgroundColor: ACCENT_YELLOW, height: "14px", bottom: "8px" }}
                ></span>
              </span>{" "}
              OF EXPERIENCE
              <br />
              IN TOWING SERVICE.
            </h1>

            {/* Paragraph */}
            <p className="text-black text-lg mb-10 text-left max-w-3xl">
              We’re a Sydney-based, family-run business dedicated to providing reliable,
              eco-conscious, and fast car removal solutions. With years of experience, Sam and Jay
              have helped thousands of Sydney residents clear space, earn cash, and recycle
              responsibly. Our mission is to make vehicle removal stress-free and beneficial for
              both our customers and the environment.
            </p>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5">
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
                title="Professional Team"
                icon={Truck}
                bgColorClass="bg-gray-50"
                iconColorClass="text-[#d88907]"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-[0.45] hidden md:block lg:block relative h-[400px] md:h-[450px] lg:h-[550px] overflow-hidden">
            <Image
              src="/truck.png"
              alt="Truck"
              fill
              className="object-contain scale-110 translate-x-1 translate-y-1"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
