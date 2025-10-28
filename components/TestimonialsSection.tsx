"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

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
  <div className="flex space-x-1 mb-6">
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

const TestimonialsSection: React.FC = () => {
  const testimonial: TestimonialData = {
    quote:
      "Super quick and professional service! They arrived within an hour of my call, handled everything efficiently, and paid cash on the spot. Made getting rid of my old car completely stress-free.",
    author: "Jessica M., Parramatta",
    rating: 5,
  };

  return (
    <section
      className="py-5 md:py-8 lg:py-10"
      style={{ backgroundColor: PRIMARY_BLUE, color: TEXT_COLOR }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading and Description */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="max-w-md">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 relative pb-2 inline-block text-white/80">
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
                  className="inline-block px-1"
                  style={{
                    color: PRIMARY_BLUE,
                    backgroundColor: ACCENT_YELLOW,
                    borderBottom: `4px solid ${ACCENT_YELLOW}`,
                  }}
                >
                  CLIENT
                </span>{" "}
                SAYS
              </h2>

              <p className="text-white/70 text-lg">
                Real experiences from people just like you who used our free car removal and towing services.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full"
          >
            <div
              className="p-8 sm:p-12 rounded-3xl relative shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-between"
              style={{ backgroundColor: SECONDARY_BLUE }}
            >
              <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-9xl font-extrabold opacity-10 select-none text-white/5 pointer-events-none">
                &ldquo;
              </div>

              <p className="text-xl sm:text-[24px] font-bold italic relative z-10 leading-[1.3] mb-8 text-white">
                {testimonial.quote}
              </p>

              <div className="relative z-10 mt-auto">
                <StarRating count={testimonial.rating} />
                <p className="text-lg font-bold" style={{ color: ACCENT_YELLOW }}>
                  - {testimonial.author}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
