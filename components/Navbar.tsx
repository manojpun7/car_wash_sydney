"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const navigation: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Service areas', href: '#areas' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
];

const NavItem: React.FC<{ item: NavLink; isActive: boolean; className: string; onClick?: () => void }> = ({
  item,
  isActive,
  className,
  onClick,
}) => {
  return (
    <a
      href={item.href}
      className={`relative ${className} after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#0c55a6] after:transition-all after:duration-300 after:ease-out ${
        isActive ? 'after:w-full' : 'after:w-0'
      }`}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {item.name}
    </a>
  );
};


const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');

  useEffect(() => {
    const sections = navigation.map((link) => document.querySelector(link.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.6 } // trigger when 60% visible
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  const desktopLinkClasses =
    "text-gray-700 hover:text-[#0c55a6] font-medium text-base transition duration-150 relative group py-2";
  const mobileLinkClasses =
    "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0c55a6] transition duration-150";

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
          <div className="hidden md:flex md:items-center space-x-8">
            {navigation.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                isActive={activeSection === item.href}
                className={desktopLinkClasses}
              />
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-4xl shadow-sm text-white bg-[#0c55a6] hover:bg-[#07468f] transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone size={16} className="mr-2" />
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-100 p-2 rounded-lg text-gray-700 hover:text-[#0c55a6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0c55a6]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <div key={item.name} onClick={() => setIsMobileMenuOpen(false)}>
                <NavItem item={item} isActive={activeSection === item.href} className={mobileLinkClasses} />
              </div>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-[#0c55a6] hover:bg-[#07468f] transition duration-200"
            >
              <Phone size={18} className="mr-2" />
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
