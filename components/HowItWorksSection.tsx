"use client";

import React from "react";
import { Phone, FileText, Truck } from "lucide-react";
import { motion } from "framer-motion";

const PRIMARY_BLUE = "#E2F0FF";
const ACCENT_YELLOW = "#fdb813";
const HEADING_COLOR = "#1e1e1e";
const DARK_CONTRAST = "#0c55a6";

const steps = [
  { number: 1, title: "GET A QUOTE", description: "Call us or use the form to get an instant, non-obligatory quote.", icon: Phone },
  { number: 2, title: "ACCEPT THE OFFER", description: "We agree on a price and schedule a free pickup time that suits you.", icon: FileText },
  { number: 3, title: "WE TOW & PAY YOU", description: "Our team arrives, pays you cash on the spot, and tows your car away.", icon: Truck },
];

interface StepProps {
  step: typeof steps[0];
  isLast: boolean;
  index: number;
}

const Step: React.FC<StepProps> = ({ step, isLast, index }) => {
  const IconComponent = step.icon;
  const fromDirection = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative flex-1 flex flex-col items-center z-20 min-w-[180px] sm:min-w-[200px]"
    >
      {/* Circle and Icon */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full flex items-center justify-center relative shadow-xl" style={{ backgroundColor: ACCENT_YELLOW }}>
          <IconComponent size={36} style={{ color: DARK_CONTRAST }} />
        </div>

        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold shadow-md border-2 border-white"
          style={{ backgroundColor: PRIMARY_BLUE, color: DARK_CONTRAST }}
        >
          {step.number}
        </div>
      </div>

      {/* Content */}
      <div className="text-center mt-2 max-w-[200px]">
        <h4 className="text-xl font-bold uppercase mb-2" style={{ color: ACCENT_YELLOW }}>{step.title}</h4>
        <p className="text-lg leading-relaxed" style={{ color: HEADING_COLOR }}>{step.description}</p>
      </div>

      {/* Connector */}
      {!isLast && (
        <div
          className="absolute top-1/2 left-[50%] lg:top-12 lg:left-auto lg:right-0 w-[calc(100%-120px)] h-0.5 border-t-2 border-dashed z-10 hidden lg:block"
          style={{ borderColor: ACCENT_YELLOW, marginRight: "-60px" }}
        ></div>
      )}
    </motion.div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/howImg.png')` }}
    >
      <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(226, 240, 255, 0.65)" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h3 className="text-md font-semibold uppercase tracking-widest mb-4 relative pb-2 inline-block" style={{ color: DARK_CONTRAST }}>
            HOW IT WORKS
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-0.5 z-10" style={{ backgroundColor: ACCENT_YELLOW }}></span>
          </h3>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mt-4" style={{ color: HEADING_COLOR }}>
            SIMPLE,{" "}
            <span className="inline-block relative z-10 text-[#044E9E]">
              FAST

              <span
                className="absolute left-0 right-0 -z-10"
              
              ></span>
            </span>{" "}
            & STRESS-FREE
          </h2>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10">
          {steps.map((step, index) => (
            <Step key={step.number} step={step} isLast={index === steps.length - 1} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
