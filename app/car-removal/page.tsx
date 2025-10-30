"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

const services = [
    {
        title: "Car Towing",
        desc: "Fast and safe car towing service across Sydney at competitive rates.",
        img: "/service/carTowing.jpg",
        link: "/car-towing",
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

const CarRemovalPage: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const router = useRouter();

    // Auto-slide every 3.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % services.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-[#002043] text-white overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <Image
                        src="/service/carRemoval.jpg"
                        alt="Car Removal"
                        fill
                        className="object-cover z-0"
                    />
                </div>

                <div
                    className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
          flex flex-col md:flex-row items-center justify-center md:justify-between 
          h-[60vh] md:h-[76vh] text-center md:text-left"
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
                            className="inline-flex items-center px-6 py-3 rounded-4xl bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition duration-200"
                        >
                            <Phone size={18} className="mr-2" />
                            Contact Us
                        </motion.a>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        className="hidden md:block md:w-1/2 relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-xl"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <Image
                            src="/service/carRemoval.jpg"
                            alt="Car Removal"
                            fill
                            className="object-cover transform transition-transform duration-500 hover:scale-105 opacity-70"
                        />
                    </motion.div>
                </div>
            </section>

            <WhyChooseUsSection />

            <HowItWorksSection />

            {/* Other Services Carousel */}
            <section className="py-20 bg-white relative overflow-hidden">
                <h2 className="text-4xl font-bold text-center mb-14 text-black">
                    Explore Our Other Services
                </h2>

                <div className="relative w-full overflow-hidden">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15, duration: 0.6 },
                            },
                        }}
                        className="flex justify-center flex-wrap gap-6 px-6"
                    >
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => router.push(service.link)}
                                className="min-w-[260px] sm:min-w-[300px] max-w-[320px] cursor-pointer 
            bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 
            hover:border-[#fdb813] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        fill
                                        className="object-cover transform transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-2 text-black">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
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
                        Ready to Remove Your Car?
                    </motion.h2>
                    <motion.p
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Call us now or fill out the online form and get your car removed
                        quickly and hassle-free.
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

export default CarRemovalPage;
