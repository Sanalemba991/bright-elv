'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show full navbar when scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Products', href: '#', hasDropdown: true },
    { name: 'Customized Solution', href: '/customised-solution', hasDropdown: true },
    { name: 'ELV Solution', href: '/elv-solution', hasDropdown: true },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900 bg-opacity-95 backdrop-blur-md shadow-lg py-4' 
        : 'bg-gradient-to-b from-slate-900 to-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-400">
              <span className="text-white">N</span>link
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 transition-all duration-300 ${
            isScrolled ? 'gap-6' : 'gap-8'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-white font-semibold hover:text-blue-400 transition-colors text-sm ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                {link.name} {link.hasDropdown && '▼'}
              </Link>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className={`hidden lg:flex items-center gap-6 text-white text-sm transition-all duration-300 ${
            isScrolled ? 'gap-4 text-xs' : 'gap-6'
          }`}>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+971 565022960</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💬</span>
              <span>+971 508813801</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>sales@brightelv.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white hover:text-blue-400 transition-colors font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}