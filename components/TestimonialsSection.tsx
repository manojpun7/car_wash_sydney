"use client";

import React, { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TEXT_COLOR = "#ffffff";
const ACCENT_YELLOW = "#fdb813";
const PRIMARY_BLUE = "#0A1931";
const SECONDARY_BLUE = "#044E9E";
const HEADING_COLOR = "#ffffff";

interface TestimonialData {
  quote: string;
  author: string;
  rating: number;
}

interface StarRatingProps {
  count: number;
}

const StarRating: React.FC<StarRatingProps> = ({ count }) => (
  <div className="flex space-x-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={20}
        fill={i < count ? ACCENT_YELLOW : "rgba(255, 255, 255, 0.3)"}
        strokeWidth={0}
        style={{ color: ACCENT_YELLOW }}
      />
    ))}
  </div>
);

const testimonials: TestimonialData[] = [
  {
    quote:
      "Super quick and professional service! They arrived within an hour and paid cash on the spot. Made getting rid of my old car stress-free.",
    author: "Jessica M., Parramatta",
    rating: 5,
  },
  {
    quote:
      "Highly recommend! The team was friendly, efficient, and offered a great price for my old truck.",
    author: "Michael T., Sydney",
    rating: 5,
  },
  {
    quote:
      "Excellent service! Called them in the morning and by afternoon my car was gone and I had cash in hand.",
    author: "Priya K., Liverpool",
    rating: 5,
  },
  {
    quote:
      "Very easy process and fast response. Definitely the best car removal service I’ve used.",
    author: "Daniel W., Blacktown",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  // --- Autoplay logic ---
  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        handleNext();
      }, 3000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, isPaused]);


  const testimonial = testimonials[index];

  return (
    <section
      className="py-10 md:py-16 lg:py-20 select-none"
      style={{ backgroundColor: PRIMARY_BLUE, color: TEXT_COLOR }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* --- Left Column: Heading --- */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="max-w-md">
              <h3 className="text-md font-semibold uppercase tracking-widest mb-4 relative pb-2 inline-block text-white/80">
                TESTIMONIALS
                <span className="absolute left-0 bottom-0 w-16 h-0.5 z-10 bg-white"></span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white/20 z-0"></span>
              </h3>

              <h2
                className="text-4xl sm:text-5xl lg:text-[49px] uppercase font-extrabold leading-tight tracking-tight mt-4 mb-6"
                style={{ color: HEADING_COLOR }}
              >
                WHAT OUR{" "}
                <span
                  className="inline-block relative z-10"
                  style={{ color: ACCENT_YELLOW }}
                >
                  CLIENT
                  <span
                    className="absolute left-0 right-0 -z-10"
                  ></span>
                </span>{" "}
                SAYS
              </h2>

              <p className="text-white/70 text-lg">
                Real experiences from people just like you who used our free car
                removal and towing services.
              </p>
            </div>
          </motion.div>

          {/* --- Right Column: Carousel --- */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="p-8 sm:p-12 rounded-3xl shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between relative"
              style={{ backgroundColor: SECONDARY_BLUE }}
            >
              {/* Quotation background mark */}
              <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-9xl font-extrabold opacity-10 select-none text-white/5 pointer-events-none">
                &ldquo;
              </div>

              {/* Animated testimonial content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex flex-col justify-between h-full"
                >
                  <p className="text-xl sm:text-[24px] font-bold italic leading-[1.3] mb-8 text-white">
                    {testimonial.quote}
                  </p>
                  <div>
                    <StarRating count={testimonial.rating} />
                    <p
                      className="text-lg font-bold"
                      style={{ color: ACCENT_YELLOW }}
                    >
                      - {testimonial.author}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-6 absolute bottom-6 left-0 right-0">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-[#fdb813]" : "bg-white/30"
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
