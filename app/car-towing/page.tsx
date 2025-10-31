"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import OurCoreValuesSection from "@/components/OurCoreValuesSection";

const CarTowingPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  // Auto-slide every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Car Removal",
      desc: "Fast and safe car towing service across Sydney at competitive rates.",
      img: "/service/carRemoval.jpg",
      link: "/car-removal",
    },
    {
      title: "Cash for Trucks",
      desc: "We pay top cash for trucks of all models and conditions.",
      img: "/service/cashTruck.jpg",
      link: "/cash-for-truck",
    },
    {
      title: "Old Car Removal",
      desc: "Free pickup and instant cash for your old or unwanted vehicles.",
      img: "/service/oldCarRemoval.png",
      link: "/old-car-removal",
    },
    {
      title: "Car Wreckers",
      desc: "Eco-friendly car dismantling and recycling services in Sydney.",
      img: "/service/carWreckers.png",
      link: "/car-wreckers",
    },
    {
      title: "Junk Car Removal",
      desc: "Quick and hassle-free removal of junk or damaged cars for free.",
      img: "/service/junkCarRemoval.png",
      link: "/junk-car-removal",
    },
  ];

  return (
    <div className="w-full bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-[#002043] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/30 z-10"></div>
          <Image
            src="/service/carTowing.jpg"
            alt="Car Towing"
            fill
            className="object-cover z-0"
          />
        </div>

         <div
                            className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
            flex flex-col md:flex-row items-center justify-center md:justify-between 
            h-[60vh] sm:h-[70vh] lg:h-screen text-center md:text-left"
                        >
        
                            {/* Text Content */}
                            <motion.div
                                className="md:w-1/2 space-y-6 flex flex-col justify-center items-center md:items-start"
                                initial={{ opacity: 0, y: -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
                                    Sydney Car Removal Services
                                </h1>
                                <p className="text-lg sm:text-xl text-gray-200 max-w-lg">
                                    We offer 100% free car removal across Sydney, no matter the make
                                    or condition. Quick, safe, and hassle-free.
                                </p>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center px-6 py-3 rounded-4xl bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition "
                                >
                                    {/* Vibrating Phone Icon */}
                                    <motion.div
                                        className="mr-2"
                                        animate={{ x: [0, -1.5, 1.5, -1, 1, 0] }}
                                        transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.3 }}
                                    >
                                        <Phone size={18} />
                                    </motion.div>
                                    Contact Us
                                </motion.a>
        
        
                            </motion.div>
                            {/* Hero Image */}
                            <motion.div
                                className="md:w-1/2 relative h-80 md:h-96 mb-8 md:mb-0 overflow-hidden rounded-2xl shadow-xl"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.2 }}
                            >
                                <Image
                                    src="/service/carTowing.jpg"
                                    alt="Old Car Removal"
                                    fill
                                    className="object-cover transform transition-transform duration-500 hover:scale-105 opacity-70"
                                />
                            </motion.div>
                        </div>
      </section>

      <WhyChooseUsSection />
      <OurCoreValuesSection/>

      <HowItWorksSection />

      {/* Other Services Section with Sticky Left Column and Animations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left Column (Sticky) */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:sticky md:top-28 flex flex-col justify-start space-y-6">
              <h2 className="text-4xl font-semibold text-black uppercase leading-relaxed">
                Explore Our<br />Other Services
              </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-prose text-justify">
                We offer a range of professional and customizable car services
                designed to meet your unique needs and keep your vehicle in top condition.
              </p>

              {/* New Section: Ready to Get Service */}
              <motion.div
                className="flex items-center text-[#0c55a6] font-semibold cursor-pointer space-x-2"
                animate={{ x: [0, -3, 3, -3, 3, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
              >
                <Phone size={20} />
                <span>Ready to get our service?</span>
              </motion.div>
            </div>
          </motion.div>


          {/* Right Column (Animated Scrollable Services) */}
          <div className="md:col-span-2 flex flex-col space-y-20">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-8 group"
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full md:w-1/3 h-60 rounded-2xl overflow-hidden shadow-md"
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transform transition-transform duration-500 hover:scale-110 cursor-pointer"
                    onClick={() => router.push(service.link)}
                  />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 flex flex-col h-60 justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-black uppercase mb-2">
                      {service.title}
                    </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-prose text-justify">
                      {service.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => router.push(service.link)}
                    className="text-[#0c55a6] text-sm uppercase font-semibold tracking-wide relative w-max after:content-[''] after:block after:h-0.5 after:bg-[#0c55a6] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full"
                  >
                    View Details →
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


    </div>
  );
};

export default CarTowingPage;
