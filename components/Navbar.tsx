"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

// Define the structure for a navigation link
interface NavLink {
	name: string;
	href: string; // hash links for SPA sections
	current: boolean;
}

// Navigation links
const navigation: NavLink[] = [
	{ name: 'Home', href: '#home', current: true },
	{ name: 'Services', href: '#services', current: false },
	{ name: 'About', href: '#about', current: false },
	{ name: 'Service areas', href: '#areas', current: false },
	{ name: 'Reviews', href: '#reviews', current: false },
	{ name: 'FAQ', href: '#faq', current: false },
];

// NavItem component
const NavItem: React.FC<{ item: NavLink; className: string; onClick?: () => void }> = ({ item, className, onClick }) => {
	const activeIndicator = item.current ? (
		<span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1.5 h-1.5 bg-[#0c55a6] rounded-full" />
	) : null;

	return (
		<a
			href={item.href}
			className={className}
			aria-current={item.current ? 'page' : undefined}
			onClick={onClick} // Close mobile menu on click
		>
			{item.name}
			{activeIndicator}
		</a>
	);
};

// Navbar component
const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
							<NavItem key={item.name} item={item} className={desktopLinkClasses} />
						))}
					</div>

					{/* Contact Button */}
					<div className="hidden md:block">
						<a
							href="#contact"
							className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#0c55a6] hover:bg-[#07468f] transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
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
								<NavItem item={item} className={mobileLinkClasses} />
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
