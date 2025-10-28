"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import vector1 from '../public/service/vector1.svg';
import vector2 from '../public/service/vector2.svg';
import vector6 from '../public/service/vector6.svg';

const PRIMARY_BLUE = '#0c55a6';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
  animationDirection?: "left" | "right";
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, isHighlighted = false, animationDirection = "left" }) => (
  <motion.div
    initial={{ opacity: 0, x: animationDirection === "left" ? -100 : 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
    className={`
      group/card flex flex-col items-center text-center p-6 rounded-lg shadow-lg 
      ${isHighlighted
        ? 'bg-linear-to-br from-[#fdb813] to-[#ffdb58] text-gray-900'
        : 'bg-transparent text-gray-200'
      }
      h-full
      transition-all duration-300 ease-in-out
      ${isHighlighted
        ? 'transform scale-105 shadow-xl'
        : 'hover:bg-[#d1b783] hover:shadow-xl' 
      }
    `}
  >
    <div className={`p-4 rounded-full mb-4
      ${isHighlighted
        ? 'bg-transparent text-gray-900'
        : 'bg-transparent text-[#fdb813] group-hover/card:text-gray-900'
      }
      transition-colors duration-300
    `}>
      {Icon}
    </div>

    <h3 className={`text-xl font-bold mb-2 
      ${isHighlighted
        ? 'text-gray-900'
        : 'text-white group-hover/card:text-gray-900'
      }`}
    >
      {title}
    </h3>

    <p className={`text-sm mb-4 
      ${isHighlighted
        ? 'text-gray-800'
        : 'text-gray-300 group-hover/card:text-gray-800' 
      }`}
    >
      {description}
    </p>

    <button className={`
      mt-auto px-4 py-2 rounded-full border-2 
      ${isHighlighted
        ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
        : 'border-[#fdb813] text-[#fdb813] group-hover/card:border-gray-900 group-hover/card:text-gray-900 hover:bg-[#fdb813] hover:text-gray-900'
      }
      text-xs font-semibold uppercase tracking-wider
      transition-all duration-300 ease-in-out
    `}>
      READ MORE
    </button>
  </motion.div>
);

const ServicesSection: React.FC = () => {
  const ICON_WIDTH = 93.75;
  const ICON_HEIGHT = 71.875;

  const Vector1Icon = (
    <Image src={vector1} alt="Car Removal Icon" width={ICON_WIDTH} height={ICON_HEIGHT} className="text-[#fdb813]" />
  );
  const Vector2Icon = (
    <Image src={vector2} alt="Car Towing Icon" width={ICON_WIDTH} height={ICON_HEIGHT} className="text-[#fdb813]" />
  );
  const Vector6Icon = (
    <Image src={vector6} alt="Used Car Icon" width={ICON_WIDTH} height={ICON_HEIGHT} className="text-[#fdb813]" />
  );

  const servicesData = [
    { title: "Car Removal", description: "We offer 100% free car removal across Sydney...", icon: Vector1Icon, animationDirection: "left" },
    { title: "Car Towing", description: "We safely remove scrap and rusted cars...", icon: Vector2Icon, animationDirection: "right" },
    { title: "Old Car Removal", description: "Sell your used car quickly without hassle...", icon: Vector1Icon, animationDirection: "left" },
    { title: "Junk Car Removal", description: "Need a reliable tow? Our Sydney towing service...", icon: Vector1Icon, animationDirection: "right" },
    { title: "Unwanted Cars", description: "Need a reliable tow? Our Sydney towing service...", icon: Vector1Icon, animationDirection: "left" },
    { title: "Used Car", description: "We buy and dismantle old trucks professionally...", icon: Vector6Icon, animationDirection: "right" },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/serviceImg.png"
          alt="Background of towing services"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="z-0"
        />
        <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(0, 32, 67, 0.6)' }}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-3 relative pb-2 inline-block text-gray-300">
            SERVICES
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-0.5 z-10" style={{ backgroundColor: PRIMARY_BLUE }}></span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-600 z-0"></span>
          </h3>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white mt-4">
            RELIABLE & QUICK SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              animationDirection={service.animationDirection as "left" | "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
