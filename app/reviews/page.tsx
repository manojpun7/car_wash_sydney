"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Design Constants ---
const PRIMARY_BG = '#F0EFEE'; // light background
const TEXT_COLOR = '#0A1931'; // dark text
const SUBTLE_GRAY = '#333333cc'; // dark gray with slight transparency
const CARD_BG = 'rgba(255,255,255,0.8)'; // slightly transparent card over light bg
const ACCENT_YELLOW = "#fdb813";
const SECONDARY_BLUE = "#044E9E";

// --- Testimonials Data ---
const testimonials = [
  { id: 1, quote: "Lorem ipsum dolor sit amet...orem ipsum dolor sit amet...orem ipsum dolor sit amet...", name: "Sophie Moore", title: "DESIGNER AT BRIX TEMPLATES" },
  { id: 2, quote: "orem ipsum dolor sit amet...orem ipsum dolor sit amet...orem ipsum dolor sit amet... commodo ligula eget dolor...", name: "John Carter", title: "MARKETING LEAD AT BRIX TEMPLATES" },
  { id: 3, quote: "Donec quam orem ipsum dolor sit amet...orem ipsum dolor sit amet...orem ipsum dolor sit amet..., ultricies nec...", name: "Michael Chen", title: "VP OF DESIGN AT BRIX TEMPLATES" },
  { id: 4, quote: "Nullam orem ipsum dolor sit amet...orem ipsum dolor sit amet...orem ipsum dolor sit amet... felis eu pede mollis...", name: "Jane Smith", title: "SENIOR DEVELOPER" },
  { id: 5, quote: "Nullam orem ipsum dolor sit amet...orem ipsum dolor sit amet...orem ipsum dolor sit amet... felis eu pede mollis...", name: "Jane Smith", title: "SENIOR DEVELOPER" },
  { id: 6, quote: "Nullam orem ipsum dolor sit amet...orem ipsum dolor sit amet...orem ipsum dolor sit amet... felis eu pede mollis...", name: "Jane Smith", title: "SENIOR DEVELOPER" },
];

// --- Testimonial Card ---
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  isLeft: boolean;
}
// --- Testimonial Card ---
const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
    className="w-full lg:w-[calc(50%-2rem)] p-6 md:p-8 rounded-xl shadow-lg"
    style={{ backgroundColor: CARD_BG }}
  >
    <Quote size={24} style={{ color: ACCENT_YELLOW }} className="mb-4 opacity-80" />
    <p className="text-base italic leading-relaxed" style={{ color: TEXT_COLOR }}>{quote}</p>
    <div className="flex items-center space-x-4 mt-6 border-t pt-4" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
      <div>
        <p className="font-bold text-lg" style={{ color: TEXT_COLOR }}>{name}</p>
        <p className="text-xs uppercase tracking-wider font-medium" style={{ color: TEXT_COLOR }}>{title}</p>
      </div>
    </div>
  </motion.div>
);

// --- Main Reviews Component ---
const AlternatingReviewPage: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineFillHeight, setLineFillHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const { top, height } = timelineRef.current.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - top) / (height + window.innerHeight)));
      setLineFillHeight(progress * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-24 relative" style={{ backgroundColor: PRIMARY_BG }}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="max-w-2xl mb-12 md:mb-16 text-center mx-auto relative z-10">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: TEXT_COLOR }}>
            WHAT OUR <span className="inline-block relative z-10" style={{ color: SECONDARY_BLUE }}>
              CLIENT
              <span className="absolute left-0 right-0 -z-10" style={{ backgroundColor: ACCENT_YELLOW, height: "15px", bottom: "1px" }}></span>
            </span> SAY
          </h2>
          <p className="mt-4 text-xl" style={{ color: SUBTLE_GRAY }}>
            Hear from the professionals who trust our commitment to attention to detail and excellence.
          </p>
          <div className="w-24 h-1 mt-8 mx-auto rounded-full" style={{ backgroundColor: ACCENT_YELLOW, opacity: 0.8 }} />
        </header>

        {/* Testimonials Timeline */}
        <div className="relative z-10" ref={timelineRef}>
          <div className="absolute hidden lg:block left-1/2 w-1 h-full -ml-0.5" style={{ backgroundColor: ACCENT_YELLOW, opacity: 0.2 }} />
          <motion.div
            className="absolute hidden lg:block left-1/2 w-1 -ml-0.5"
            style={{ top: 0, backgroundColor: ACCENT_YELLOW }}
            animate={{ height: `${lineFillHeight}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />

          <div className="space-y-6 lg:space-y-0">
            {testimonials.map((testimonial, index) => {
              const isLeft = index % 2 === 0;
              const alignClass = isLeft ? 'justify-start' : 'justify-end';
              return (
                <div key={testimonial.id} className={`flex ${alignClass} w-full relative py-4 lg:py-0`}>
                  <TestimonialCard {...testimonial} isLeft={isLeft} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AlternatingReviewPage;
