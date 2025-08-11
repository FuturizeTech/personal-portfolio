'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import Logo from '@/public/trace.svg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = ['about', 'experience', 'skills', 'education', 'projects'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-colors duration-300 ${scrolled
        ? 'bg-black bg-opacity-40 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-[#16f2b3] text-2xl font-bold flex items-center">
            {/* <svg width="200" height="50" viewBox="0 5 300 100" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(20, 20)">
                <rect x="0" y="0" width="30" height="50" rx="5" fill="white" />
                <circle cx="15" cy="25" r="8" fill="#2D2E52" />
                <rect x="10" y="30" width="10" height="15" fill="#2D2E52" />
              </g>
              <text x="60" y="55" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#EC4899">
                Futurize
                <tspan fill="#00D1FF">Tech</tspan>
              </text>
            </svg> */}
            <Image
              src={Logo}
              height={50}
              width={50}
              alt=""
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((section) => (
            <li key={section}>
              <Link
                href={`/#${section}`}
                className="text-sm text-white transition duration-300 hover:text-pink-500 hover:drop-shadow-[0_0_8px_#ec4899] drop-shadow-[0_0_6px_#ffffffaa]" // glowing effects
              >
                {section.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-3">
            {navItems.map((section) => (
              <li key={section}>
                <Link
                  href={`/#${section}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-pink-500 transition duration-300 hover:drop-shadow-[0_0_8px_#ec4899] drop-shadow-[0_0_6px_#ffffffaa]" // glowing
                >
                  {section.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
