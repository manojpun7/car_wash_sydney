import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';

// --- Assets ---
import logoImg from '../public/logo.png';
import whatsapp from '../public/footer/whatsapp.svg';
import facebook from '../public/footer/facebook.svg';
import instagram from '../public/footer/instagram.svg';
import twitter from '../public/footer/twitter.svg';

// --- Design Constants ---
const PRIMARY_BLUE = '#0c55a6';
const DARK_FOOTER_BG = '#101d2d';
const ACCENT_YELLOW = '#fdb813';
const TEXT_COLOR = '#f0f4f8';
const LIGHT_BLUE = '#5eead4';

// --- Data ---
const supportLinks = [
  { name: "FAQ's", href: '#faq' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Terms & Conditions', href: '#terms' },
];

const serviceLinks = [
  { name: 'Car Towing', href: '#car-towing' },
  { name: 'Tyre Replacement', href: '#tyre' },
  { name: 'Motorcycle Towing', href: '#motorcycle-towing' },
  { name: 'Luxury Car Towing', href: '#luxury-towing' },
  { name: 'Roadside Assistance', href: '#roadside' },
  { name: 'Battery Replacement', href: '#battery' },
];

// --- Social Icon Component ---
interface SocialIconProps {
  src: string;
  alt: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
    style={{ backgroundColor: ACCENT_YELLOW }}
  >
    <Image src={src} alt={alt} width={18} height={18} className="object-contain" />
  </a>
);

// --- Main Footer Component ---
const Footer: React.FC = () => {
  const backgroundImageUrl =
    'https://images.unsplash.com/photo-1549487421-2794358a98f1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3';

  return (
    <footer className="w-full">
      {/* Top Section */}
      <div
        className="relative py-16 md:py-20 overflow-hidden"
        style={{ backgroundColor: DARK_FOOTER_BG }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundImageUrl}')`,
            backgroundPosition: 'center 75%',
            opacity: 0.35,
            filter: 'brightness(0.7) blur(2px)',
          }}
        ></div>

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(16, 29, 45, 0.7)',
          }}
        ></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {/* --- COLUMN 1: Logo & Description --- */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <Image src={logoImg} alt="Sydney Car Removal Logo" className="h-10 w-auto" />
              </div>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xs"
                style={{ color: TEXT_COLOR }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-3">
                <SocialIcon src={facebook} alt="Facebook" href="https://facebook.com" />
                <SocialIcon src={instagram} alt="Instagram" href="https://instagram.com" />
                <SocialIcon src={twitter} alt="Twitter" href="https://twitter.com" />
                <SocialIcon src={whatsapp} alt="WhatsApp" href="https://wa.me/61450747474" />
              </div>
            </div>

            {/* --- COLUMN 2: Support Links --- */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold mb-6" style={{ color: ACCENT_YELLOW }}>
                Support
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name} className="group relative w-fit">
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: TEXT_COLOR }}
                    >
                      {link.name}
                    </a>
                    <span
                      className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#fdb813] transition-all duration-300 ease-in-out group-hover:w-full"
                    ></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- COLUMN 3: Our Services --- */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold mb-6" style={{ color: ACCENT_YELLOW }}>
                Our Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.name} className="group relative w-fit">
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: TEXT_COLOR }}
                    >
                      {link.name}
                    </a>
                    <span
                      className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#fdb813] transition-all duration-300 ease-in-out group-hover:w-full"
                    ></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- COLUMN 4: Contact --- */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold mb-6" style={{ color: ACCENT_YELLOW }}>
                Contact
              </h4>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-sm" style={{ color: TEXT_COLOR }}>
                  <Clock size={18} className="shrink-0 mr-3 mt-1" style={{ color: ACCENT_YELLOW }} />
                  <span>24 Hours</span>
                </li>
                <li className="flex items-start text-sm" style={{ color: TEXT_COLOR }}>
                  <Phone size={18} className="shrink-0 mr-3 mt-1" style={{ color: ACCENT_YELLOW }} />
                  <span className="block">+0402887766, +0450747474</span>
                </li>
                <li className="flex items-start text-sm" style={{ color: TEXT_COLOR }}>
                  <Mail size={18} className="shrink-0 mr-3 mt-1" style={{ color: ACCENT_YELLOW }} />
                  <span>sydneycarremoval@gmail.com</span>
                </li>
                <li className="flex items-start text-sm" style={{ color: TEXT_COLOR }}>
                  <MapPin size={18} className="shrink-0 mr-3 mt-1" style={{ color: ACCENT_YELLOW }} />
                  <span>Sydney, Australia</span>
                </li>
              </ul>

              {/* Newsletter */}
              <form className="flex mt-8">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full p-3 rounded-l-2xl border-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-500"
                  style={{
                    backgroundColor: '#ffffff',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  className="p-3 rounded-r-xl flex items-center justify-center transition-colors duration-200 hover:bg-yellow-400"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black transform rotate-45"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div
        className="py-4 text-center text-sm"
        style={{ backgroundColor: PRIMARY_BLUE, color: TEXT_COLOR }}
      >
        &copy; 2025 Sydney Car Removal and Towing Services. All Rights Reserved. Crafted by
        <a
          href="#"
          className="ml-1 transition-colors duration-200 underline"
          style={{ color: LIGHT_BLUE }}
        >
          Murphys Technology
        </a>
      </div>
    </footer>
  );
};

export default Footer;
