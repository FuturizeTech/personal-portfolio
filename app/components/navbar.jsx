'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import Logo from '@/public/trace.svg';
import { motion } from 'framer-motion';
import { translations } from '@/utils/translations';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'about', label: translations.navbar.about },
    { id: 'experience', label: translations.navbar.experience },
    { id: 'skills', label: translations.navbar.skills },
    { id: 'education', label: translations.navbar.education },
    { id: 'projects', label: translations.navbar.projects },
    { id: 'projects-for-sale', label: translations.navbar.projectsForSale },
    { id: 'contact', label: translations.navbar.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300
      ${scrolled ? 'bg-black bg-opacity-70 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      
      <div className="relative z-20 flex items-center justify-between px-6 py-4 lg:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center relative group">
          <div className="relative w-12 h-12">
            <Image src={Logo} width={48} height={48} alt="Logo" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((section) => (
            <li key={section.id} className="relative group">
              <Link
                href={`/#${section.id}`}
                className="text-white text-sm font-medium uppercase relative transition-all duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500"
              >
                {section.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white z-30" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="md:hidden fixed top-0 right-0 w-64 h-full bg-black bg-opacity-90 backdrop-blur-lg shadow-lg z-20 px-6 py-8 flex flex-col gap-6"
      >
        <ul className="flex flex-col gap-4">
          {navItems.map((section) => (
            <li key={section.id}>
              <Link
                href={`/#${section.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg font-semibold uppercase hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 transition-colors duration-300"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      <style jsx>{`
        .animate-pulse {
          animation: pulse 1.8s infinite ease-in-out;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
