import React from 'react';
import { Mail, MapPin, Phone, Clock, } from 'lucide-react';
import logoImg from '../public/logo.png';   
import Image from 'next/image';

// --- Design Constants ---
const PRIMARY_BLUE = '#0c55a6'; // Deep blue for the copyright strip
const DARK_FOOTER_BG = '#101d2d'; // Dark blue/black for the main footer section
const ACCENT_YELLOW = '#fdb813'; // Yellow for social icons and highlights
const TEXT_COLOR = '#f0f4f8'; // Off-white for general text
const LIGHT_BLUE = '#5eead4'; // Light accent blue for technology credit link

// --- Navigation Data ---
const supportLinks = [
    { name: "FAQ's", href: "#faq" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Term & Conditions", href: "#terms" },
];

const serviceLinks = [
    { name: "Car Towing", href: "#car-towing" },
    { name: "Tyre Replacement", href: "#tyre" },
    { name: "Motorcycle Towing", href: "#motorcycle-towing" },
    { name: "Luxury Car Towing", href: "#luxury-towing" },
    { name: "Roadside Assistance", href: "#roadside" },
    { name: "Battery Replacement", href: "#battery" },
];

// --- Social Icon Component ---
const SocialIcon: React.FC<{ icon: React.ElementType }> = ({ icon: Icon }) => (
    <a
        href="#" // Placeholder link
        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
        style={{ backgroundColor: ACCENT_YELLOW }}
    >
        <Icon size={18} className="text-black" />
    </a>
);


// --- Main Footer Component ---
const Footer: React.FC = () => {

    // Placeholder image URL for the background (blurred city road at night)
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1549487421-2794358a98f1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <footer className="w-full">

            {/* Top Section: Links, Contact, and Newsletter */}
            <div
                className="relative py-16 md:py-20 overflow-hidden"
                style={{ backgroundColor: DARK_FOOTER_BG }}
            >
                {/* Background Image/Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${backgroundImageUrl}')`,
                        backgroundPosition: 'center 75%', // Move background up slightly to show road
                        opacity: 0.35, // Adjust opacity to match the dark overlay in the image
                        filter: 'brightness(0.7) blur(2px)' // Add filter to darken and blur the image
                    }}
                ></div>

                {/* Dark Blue Overlay (to deepen the overall color) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'rgba(16, 29, 45, 0.7)', // Slightly transparent version of the main dark color
                    }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

                        {/* COLUMN 1: Logo & Description */}
                        <div className="col-span-2 lg:col-span-1">

                            {/* Logo: Updated to use the /public/logo.png image */}
                            <div className="flex items-center mb-6">
                                <span className="text-xl font-bold uppercase tracking-wider" style={{ color: TEXT_COLOR }}>
                                    {/* Wrapper for the logo image to apply the yellow background and spacing */}
                                    <span 
                                        className="inline-block px-1 rounded-sm mr-2 shrink-0" 
                                        style={{ backgroundColor: ACCENT_YELLOW }}
                                    >
                                        {/* Using standard <img> tag with the public path */}
                                        <Image 
                                            src={logoImg} 
                                            alt="Sydney Car Removal Logo Icon" 
                                            // h-5 is 20px, keeping it consistent with the previous icon size
                                            className="h-10 w-auto inline-block text-black -mt-1" 
                                        />
                                    </span>
                                    
                                </span>
                            </div>

                            <p className="text-sm leading-relaxed mb-8 max-w-xs" style={{ color: TEXT_COLOR }}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                            </p>

                            {/* Social Icons (using Facebook, Instagram, Twitter, and another generic icon to match the count) */}
                            <div className="flex space-x-3">
                                <SocialIcon icon={({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>} />
                                <SocialIcon icon={({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>} />
                                <SocialIcon icon={({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 1 11.4 1 7.2c2.4 2 5.2 3.2 8 3.3C7 6 7 2 9.5 2c2.4 0 4.2 1.6 5 3.5 1.5-.2 3-.7 4.5-1.3C19 4.6 20.5 5 22 4z"></path></svg>} />
                            </div>
                        </div>

                        {/* COLUMN 2: Support Links */}
                        <div className="lg:col-span-1">
                            <h4 className="text-lg font-bold mb-6" style={{ color: ACCENT_YELLOW }}>
                                Support
                            </h4>
                            <ul className="space-y-3">
                                {supportLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm transition-colors duration-200 hover:text-white" style={{ color: TEXT_COLOR }}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COLUMN 3: Our Services Links */}
                        <div className="lg:col-span-1">
                            <h4 className="text-lg font-bold mb-6" style={{ color: ACCENT_YELLOW }}>
                                Our Services
                            </h4>
                            <ul className="space-y-3">
                                {serviceLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm transition-colors duration-200 hover:text-white" style={{ color: TEXT_COLOR }}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COLUMN 4: Contact & Newsletter */}
                        <div className="lg:col-span-1">
                            <h4 className="text-lg font-bold mb-6" style={{ color: ACCENT_YELLOW }}>
                                Contact
                            </h4>

                            {/* Contact Details List */}
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start text-sm" style={{ color: TEXT_COLOR }}>
                                    <Clock size={18} className="shrink-0 mr-3 mt-1" style={{ color: ACCENT_YELLOW }} />
                                    <span>24 Hours</span>
                                </li>
                                <li className="flex items-start text-sm" style={{ color: TEXT_COLOR }}>
                                    <Phone size={18} className="shrink-0 mr-3 mt-1" style={{ color: ACCENT_YELLOW }} />
                                    <span className="block">
                                        +0402887766, +0450747474
                                    </span>
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

                            {/* Email Subscription/Newsletter Input */}
                            <form className="flex mt-8">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full p-3 rounded-l-lg border-none focus:ring-0 text-gray-800"
                                    style={{ outline: 'none' }}
                                />
                                <button
                                    type="submit"
                                    className="p-3 rounded-r-lg flex items-center justify-center transition-colors duration-200"
                                    style={{ backgroundColor: ACCENT_YELLOW }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black transform rotate-45"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div
                className="py-4 text-center text-sm"
                style={{ backgroundColor: PRIMARY_BLUE, color: TEXT_COLOR }}
            >
                &copy; 2025 Sydney Car Removal and Towing Services. All Rights Reserved. Crafted by
                <a href="#" className="ml-1 transition-colors duration-200" style={{ color: LIGHT_BLUE, textDecoration: 'underline' }}>
                    Murphys Technology
                </a>
            </div>
        </footer>
    );
};

export default Footer;
