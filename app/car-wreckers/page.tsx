"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Truck } from "lucide-react";


const CarWreckersPage: React.FC = () => {
  return (
    <div className="w-full bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-[#002043] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/30 z-10"></div>
          <Image
            src="/service/carWreckers.png"
            alt="Car Wreckers"
            fill
            className="object-cover z-0"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between 
                    h-[76vh] md:h-auto text-center md:text-left">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Car Wreckers Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              We buy and dismantle old trucks and cars professionally, providing cash and environmentally-friendly disposal.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-4xl bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition duration-200"
            >
              <Phone size={18} className="mr-2" />
              Contact Us
            </motion.a>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative h-80 md:h-96 mb-8 md:mb-0 overflow-hidden rounded-2xl shadow-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/service/carWreckers.png"
              alt="Car Wreckers"
              fill
                            className="object-cover transform transition-transform duration-500 hover:scale-105 opacity-70"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 -left-24 w-96 h-96 bg-yellow-200/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#0c55a6]/20 rounded-full filter blur-3xl animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800">
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-linear-to-r from-[#0c55a6] to-[#fdb813]">
            Why Choose Our Car Wreckers Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Truck, title: "Fast & Easy Sale", desc: "Get cash for your old car or truck quickly and without hassle." },
              { icon: Truck, title: "Professional Dismantling", desc: "We dismantle vehicles professionally, recycling parts responsibly." },
              { icon: Truck, title: "Eco-Friendly", desc: "All car dismantling and disposal follows environmentally-friendly methods." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08, boxShadow: "0px 25px 50px rgba(12,85,166,0.2)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center cursor-pointer border-t-8 border-linear-to-r from-[#0c55a6] via-[#0c55a6]/70 to-[#fdb813] transition-all"
              >
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-linear-to-tr from-[#0c55a6]/20 to-[#fdb813]/20 rounded-full">
                  <feature.icon size={40} className="text-[#0c55a6]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 -right-24 w-96 h-96 bg-yellow-300/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-[#0c55a6]/20 rounded-full filter blur-3xl animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-linear-to-r from-[#0c55a6] to-[#fdb813]">
            How Car Wreckers Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative">
            {[
              { step: 1, title: "Request Evaluation", desc: "Submit your vehicle details and get an instant quote." },
              { step: 2, title: "We Collect Vehicle", desc: "Our team arrives to collect and dismantle your vehicle safely." },
              { step: 3, title: "Receive Cash", desc: "Get payment on the spot as your vehicle is removed and dismantled." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
                className="text-center flex flex-col items-center relative cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-linear-to-tr from-[#0c55a6] to-[#fdb813] text-white rounded-full text-2xl font-bold shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>

                {idx < 2 && (
                  <div className="hidden md:block absolute top-12 right-[-50%] w-full h-2 rounded-full shadow-md"
                       style={{ background: 'linear-gradient(to right, #0c55a6, #fdb813)' }}>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-[#0c55a6] text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Sell Your Vehicle?
          </motion.h2>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Call us now or submit a request and we’ll handle your car or truck professionally.
          </motion.p>
          <motion.a
            href="tel:+0402887766"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-4xl bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition duration-200"
          >
            <Phone size={18} className="mr-2" />
            Call Now
          </motion.a>
        </div>
      </section>

    </div>
  );
};

export default CarWreckersPage;
