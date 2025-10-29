import React from 'react';
import Image from 'next/image';
import { Dot } from 'lucide-react';
import heroImg from '../public/heroImg.png';

const HeroSection: React.FC = () => {
    return (
        <section
            className="relative w-full pt-0 pb-12 lg:py-32 flex items-center justify-start text-white overflow-hidden"
        >
            {/* Background Image */}
            <Image
                src={heroImg}
                alt="Tow truck removing a car"
                fill
                priority
                className="z-0 object-cover"
                quality={85}
            />

            {/* Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(90.44deg, rgba(4, 78, 158, 0.8) 0.4%, rgba(0, 0, 0, 0.4) 99.66%)',
                }}
            ></div>

            {/* Content Container - Animated from left */}
            <div className="max-w-7xl mr-auto px-4 sm:px-6 lg:px-8 text-left z-10 animate-slide-in-left">
                <div className="max-w-3xl">
                    {/* Small "Cash For Cars" tag */}
                    <div className="flex items-center text-[#5eead4] text-sm font-medium mt-12 mb-4">
                        <Dot size={20} className="text-[#5eead4] -ml-2" />
                        <span style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>CASH FOR CARS</span>
                    </div>

                    {/* Main Title */}
                    <h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6"
                        style={{ fontFamily: 'Cabinet Grotesk, sans-serif', color: '#f0f4f8' }}
                    >
                        100% Free Car Removal –<br />
                        Damaged or Not, Running or Not
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="text-lg sm:text-xl mb-8 max-w-xl leading-normal"
                        style={{ fontFamily: 'Cabinet Grotesk, sans-serif', color: '#dbe7ee' }}
                    >
                        Instant Cash Paid From $200 to $9,999 for Cars, Trucks, Vans & 4WDs We Tow It Away Anywhere in Sydney – 7 Days a Week
                    </p>

                    {/* CTA Button */}
                    <a
                        href="#get-quote"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-4xl shadow-lg text-black bg-[#fdb813] hover:bg-[#e6a200] transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                        style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
                    >
                        <Dot size={24} className="-ml-1" />
                        Get Instant Quote
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
