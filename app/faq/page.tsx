"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";

const PRIMARY_BLUE = "#0A1931";
const SECONDARY_BLUE = "#044E9E";


interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How quickly can you remove my car?",
    answer:
      "In most cases, we can pick up your car the same day you call us — usually within a few hours. Our team operates 7 days a week for your convenience.",
  },
  {
    question: "Do I need to have registration papers?",
    answer:
      "No worries if you’ve misplaced your rego papers. We only require proof of ownership, such as an ID and any related documents showing the vehicle belongs to you.",
  },
  {
    question: "Is there any towing fee or hidden charges?",
    answer:
      "Absolutely not! Our towing and car removal service is 100% free. We pay you cash on the spot without any extra or hidden fees.",
  },
  {
    question: "Do you buy cars that are not running or damaged?",
    answer:
      "Yes, we buy cars in any condition — old, damaged, not running, or even completely wrecked. You’ll still receive a fair cash offer.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We offer car removal and towing services throughout Sydney and surrounding suburbs. Whether you’re in Parramatta, Liverpool, or Penrith — we’ll come to you.",
  },
];

const AccordionItem: React.FC<{
  faq: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => (
  <div
    className="border-b border-white/20 py-4 cursor-pointer transition-all"
    onClick={onClick}
  >
    <div className="flex justify-between items-center">
      <h3 className="text-lg sm:text-xl font-semibold text-white">
        {faq.question}
      </h3>
      <ChevronDown
        className={`w-6 h-6 text-white transition-transform duration-300 ${
          isOpen ? "rotate-180 text-[#fdb813]" : ""
        }`}
      />
    </div>
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-white/80 leading-relaxed">{faq.answer}</p>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Existing FAQ Hero Section */}
      <FaqSection />

      {/* Accordion Section */}
      <section
        style={{ backgroundColor: PRIMARY_BLUE }}
        className="py-12 md:py-16 px-4 sm:px-8 lg:px-16 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 uppercase tracking-wide">
            Frequently Asked <span className="text-[#fdb813]">Questions</span>
          </h2>

          <div
            style={{ backgroundColor: SECONDARY_BLUE }}
            className="rounded-2xl shadow-lg p-6 sm:p-8 space-y-4"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>


      <BlogSection/>
    </>
  );
};

export default FAQ;
