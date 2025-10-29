"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const PRIMARY_BLUE = "#0c55a6";
const ACCENT_YELLOW = "#fdb813";
const HEADING_COLOR = "#1e1e1e";
const SECTION_BG = "#F0EFEE";

const faqs = [
  {
    id: 1,
    question: "Do I have to pay for towing?",
    answer:
      "Not at all! Our towing and car removal services are completely free throughout Sydney. You won't have to worry about any hidden fees or call-out charges. Whether your car is parked in your driveway, garage, or roadside, our professional team handles the entire removal process at no cost to you.",
  },
  {
    id: 2,
    question: "How much cash can I get?",
    answer:
      "We offer instant cash payments ranging from $200 up to $9,999, depending on your vehicle's make, model, age, and condition. Even if your car is old, damaged, or no longer running, we guarantee the best possible offer in the market and pay you on the spot during pickup.",
  },
  {
    id: 3,
    question: "What documents do I need?",
    answer:
      "You'll only need a valid ID (such as a driver's license) and proof of vehicle ownership (like registration papers). Once those are verified, our team takes care of the rest — from paperwork to towing. We make the process smooth, fast, and hassle-free, from paperwork to towing. We make the process smooth, fast, and hassle-free.",
  },
  {
    id: 4,
    question: "How soon can you pick up my car?",
    answer:
      "In most Sydney suburbs, we can arrange same-day car removal — often within just a few hours of your call. Our team operates 7 days a week, including weekends, to ensure maximum convenience. You choose the pickup time, and we'll be there right on schedule.",
  },
];

interface FaqCardProps {
  faq: typeof faqs[0];
  index: number;
}

const FaqCard: React.FC<FaqCardProps> = ({ faq, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white rounded-4xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
    >
      <div className="flex items-start mb-4">
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1"
          style={{ backgroundColor: ACCENT_YELLOW }}
        >
          <HelpCircle size={18} className="text-white" />
        </div>
        <h3 className="text-xl font-bold leading-snug" style={{ color: HEADING_COLOR }}>
          {faq.question}
        </h3>
      </div>
      <p className="text-gray-700 text-base leading-relaxed pl-12 lg:pl-12">
        {faq.answer}
      </p>
    </motion.div>
  );
};

const FaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/howImg.png')",
          opacity: 0.2,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16">
          <div className="flex items-center mb-4">
            <h3
              className="text-md font-semibold uppercase tracking-[0.2em] relative mr-4"
              style={{ color: PRIMARY_BLUE }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <div className="w-full h-0.5 bg-gray-300 max-w-lg"></div>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight mt-4"
            style={{ color: HEADING_COLOR }}
          >
            GET QUICK {" "}
             <span className="inline-block relative z-10 text-[#044E9E]">
              ANSWERS

              <span
                className="absolute left-0 right-0 -z-10"
                style={{
                  backgroundColor: ACCENT_YELLOW,
                  height: "14px",
                  bottom: "8px",
                }}
              ></span>
            </span>{" "}
          </h2>
        </div>

        {/* FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <FaqCard key={faq.id} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
