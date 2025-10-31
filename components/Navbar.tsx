"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

interface ServiceOption {
  title: string;
  description: string;
  href: string;
}

const navigation: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Service areas", href: "/areas" },
  { name: "Reviews", href: "/reviews" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const services: ServiceOption[] = [
  { title: "Car Removal", description: "We offer 100% free car removal across Sydney, no matter the make or condition.", href: "/car-removal" },
  { title: "Car Towing", description: "We safely remove scrap and rusted cars from your property", href: "/car-towing" },
  { title: "Old Car Removal", description: "Sell your used car quickly without the hassle of private listings or negotiations", href: "/old-car-removal" },
  { title: "Junk Car Removal", description: "Need a reliable tow? Our Sydney towing service.", href: "/junk-car-removal" },
  { title: "Cash for Truck", description: "Need a reliable tow? Our Sydney towing service operates 7 days", href: "/cash-for-truck" },
  { title: "Car Wreckers", description: "We buy and dismantle old trucks professionally.", href: "/car-wreckers" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();

  const desktopLinkClasses =
    "text-black hover:text-[#0c55a6] font-semibold text-base transition duration-150 relative group py-2 flex items-center cursor-pointer";
  const mobileLinkClasses =
    "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0c55a6] transition duration-150 cursor-pointer";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Sydney Car Removal and Towing Services Logo"
              width={220}
              height={40}
              priority
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              if (item.name === "Services") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`${desktopLinkClasses} relative ${isActive ? "text-[#0c55a6]" : ""
                        }`}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                      {isActive && (
                        <span className="absolute left-1/2 -bottom-1 h-2 w-2 bg-[#0c55a6] rounded-full transform -translate-x-1/2"></span>
                      )}
                    </button>

                    {isServicesOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg z-50">
                        {services.map((service) => (
                          <button
                            key={service.title}
                            onClick={() => {
                              setIsServicesOpen(false);
                              router.push(service.href);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors duration-200 rounded-md"
                          >
                            <p className="font-semibold text-black">{service.title}</p>
                            <p className="text-sm text-gray-500">{service.description}</p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => router.push(item.href)}
                  className={`${desktopLinkClasses} relative ${isActive ? "text-[#0c55a6]" : ""
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-1 h-2 w-2 bg-[#0c55a6] rounded-full transform -translate-x-1/2"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={() => router.push("/contact")}
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium  shadow-sm text-white bg-[#0c55a6] hover:bg-[#07468f] transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone size={16} className="mr-2" />
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-100 p-2 rounded-lg text-gray-700 hover:text-[#0c55a6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0c55a6]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              if (item.name === "Services") {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`${mobileLinkClasses} flex justify-between items-center w-full ${isActive ? "text-[#0c55a6]" : ""
                        }`}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>

                    {isServicesOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {services.map((service) => {
                          const isServiceActive = pathname === service.href;
                          return (
                            <button
                              key={service.title}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                router.push(service.href);
                              }}
                              className={`block px-3 py-2 rounded-md text-left text-gray-700 hover:bg-gray-200 transition-colors duration-200 ${isServiceActive ? "text-[#0c55a6]" : ""
                                }`}
                            >
                              <p className="font-semibold">{service.title}</p>
                              <p className="text-sm text-gray-500">{service.description}</p>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push(item.href);
                  }}
                  className={`${mobileLinkClasses} ${isActive ? "text-[#0c55a6]" : ""}`}
                >
                  {item.name}
                </button>
              );
            })}

            {/* Contact Button (Mobile) */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push("/contact");
              }}
              className="mt-4 inline-flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#0c55a6] hover:bg-[#07468f] transition duration-200"
            >
              <Phone size={18} className="mr-2" />
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
