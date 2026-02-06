'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import Logo from '@/public/trace.svg';
import { translations } from '@/utils/translations';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: translations.navbar.about },
    { id: 'experience', label: translations.navbar.experience },
    { id: 'skills', label: translations.navbar.skills },
    { id: 'education', label: translations.navbar.education },
    { id: 'projects', label: translations.navbar.projects },
    { id: 'contact', label: translations.navbar.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300
      ${scrolled ? 'bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-90 backdrop-blur-xl shadow-xl shadow-pink-500/10' : 'bg-gradient-to-r from-black/50 via-gray-900/40 to-black/50 backdrop-blur-lg'}`}>
      
      <div className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 md:py-4 lg:py-4 w-full">
        {/* Logo with enhanced animations */}
        <Link href="/" className="flex items-center flex-shrink-0 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-all duration-300 group-hover:drop-shadow-lg group-hover:drop-shadow-pink-500/50">
            <Image src={Logo} width={48} height={48} alt="Logo" priority />
          </div>
        </Link>

        {/* Desktop Menu - Enhanced */}
        <ul className="hidden md:flex space-x-2 lg:space-x-4 items-center">
          {navItems.map((section) => (
            <li key={section.id} className="relative group">
              <Link
                href={`/#${section.id}`}
                className="text-gray-200 text-xs md:text-sm lg:text-sm font-semibold uppercase relative transition-all duration-300 px-3 md:px-4 lg:px-5 py-2 rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-cyan-400/10"
              >
                <span className="relative z-10">{section.label}</span>
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/0 via-pink-500/0 to-cyan-400/0 group-hover:from-pink-500/20 group-hover:via-pink-500/10 group-hover:to-cyan-400/20 transition-all duration-300"></span>
                <span className="absolute left-4 md:left-5 lg:left-6 -bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-[calc(100%-32px)] md:group-hover:w-[calc(100%-40px)]"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2 hover:text-pink-500 hover:bg-pink-500/10 rounded-lg transition-all duration-300" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Fixed positioning */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop - Click to close */}
          <div 
            className="md:hidden fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div 
            ref={menuRef}
            className="md:hidden fixed top-16 right-0 left-0 max-h-[calc(100vh-60px)] bg-gradient-to-b from-black via-gray-900 to-black/90 backdrop-blur-xl z-40 border-b border-pink-500/20 overflow-y-auto"
          >
            <ul className="flex flex-col divide-y divide-gray-700/30">
              {navItems.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`/#${section.id}`}
                    onClick={handleLinkClick}
                    className="block text-gray-200 text-base sm:text-lg font-semibold uppercase hover:text-white transition-all duration-300 px-6 py-4 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-cyan-400/10 hover:pl-8"
                  >
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;