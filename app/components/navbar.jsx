'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
// import Logo from '@/public/trace.svg';
import { translations } from '@/utils/translations';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
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

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  const navItems = [
    { id: 'about', label: translations.navbar.about },
    { id: 'experience', label: translations.navbar.experience },
    { id: 'skills', label: translations.navbar.skills },
    { id: 'education', label: translations.navbar.education },
    { id: 'projects', label: translations.navbar.projects },
    { id: 'contact', label: translations.navbar.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 z-[9999] w-full px-3 pt-3 transition-all duration-300 sm:px-4 md:px-6 lg:px-8 ${scrolled ? 'pt-2' : 'pt-3'}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 px-3 py-2.5 shadow-[0_12px_50px_rgba(2,6,23,0.35)] backdrop-blur-2xl transition-all duration-300 sm:px-4 ${scrolled ? 'bg-slate-950/80' : 'bg-slate-950/55'}`}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-pink-400/30 bg-gradient-to-br from-pink-500/20 via-fuchsia-500/10 to-cyan-400/20 transition duration-300 group-hover:scale-110">
            <Image src="/dp2.png" width={32} height={32} alt="Logo" priority className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.25em] text-white uppercase">Sarabjeet</p>
            <p className="text-[10px] uppercase tracking-[0.32em] text-slate-400">Developer</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((section) => (
            <li key={section.id}>
              <Link
                href={`/#${section.id}`}
                className="rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="z-50 rounded-full border border-white/10 bg-white/5 p-2 text-white transition-all duration-300 hover:border-pink-400/40 hover:bg-pink-500/10 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-20 z-30 bg-slate-950/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            ref={menuRef}
            className="fixed left-0 right-0 top-20 z-40 border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col divide-y divide-white/10">
              {navItems.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`/#${section.id}`}
                    onClick={handleLinkClick}
                    className="block px-6 py-4 text-base font-semibold uppercase tracking-[0.2em] text-slate-200 transition-all duration-300 hover:bg-white/10 hover:pl-8"
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