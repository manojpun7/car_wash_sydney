"use client";

import { motion } from "framer-motion";

const PRIMARY_BLUE = "#0c55a6";
const HEADING_COLOR = "#1e1e1e";
const SECTION_BG = "#F0EFEE";

const serviceAreas = [
  "Manly",
  "South Sydney",
  "Willoughby",
  "Kogarah",
  "Hunters Hill",
  "Canterbury",
  "Rockdale",
  "Parramatta",
  "Liverpool",
  "Penrith",
  "Blacktown",
  "Gosford",
  "Northern Beaches",
  "Western Sydney",
  "Eastern Suburbs",
  "Inner West",
];

interface CityCardProps {
  cityName: string;
  index: number;
}

const CityCard: React.FC<CityCardProps> = ({ cityName, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-3xl p-4 flex items-center justify-center text-center
        shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer
        h-20 border border-gray-50"
    >
      <span className="text-lg sm:text-xl font-semibold" style={{ color: HEADING_COLOR }}>
        {cityName}
      </span>
    </motion.div>
  );
};

const ServiceAreaSection: React.FC = () => {
  return (
    <section id="service-areas" className="py-20 md:py-28" style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16">
          <div className="flex items-center mb-3">
            <h3 className="text-md font-semibold uppercase tracking-widest relative mr-4" style={{ color: PRIMARY_BLUE }}>
              SERVICE AREAS
            </h3>
            <div className="w-full h-0.5 bg-gray-300 max-w-lg"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mt-4" style={{ color: HEADING_COLOR }}>
            SERVING ALL REGIONS ACROSS {" "}
            <br className="lg:hidden" />
            <span className="inline-block relative z-10 text-[#044E9E]">
              SYDNEY

              <span
                className="absolute left-0 right-0 -z-10"
              
              ></span>
            </span>{" "}
          </h2>
        </div>

        {/* Service Area Cards Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {serviceAreas.map((area, index) => (
            <CityCard key={index} cityName={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
