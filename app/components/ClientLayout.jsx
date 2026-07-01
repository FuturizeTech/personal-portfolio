'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Footer from "./footer";
import ScrollToTop from "./helper/scroll-to-top";
import Navbar from "./navbar";
import Loader from './loader';
import phpLogo from "../assets/svg/skills/php.svg";
import gitLogo from "../assets/svg/skills/git.svg";
import nextLogo from "../assets/svg/skills/nextJS.svg";
import yiiLogo from "../assets/svg/skills/yii.svg";

const nodeSvg = (
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <polygon points="128 16 240 80 240 176 128 240 16 176 16 80" fill="#339933" />
    <text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="72" fontFamily="Arial, sans-serif" fontWeight="700">N</text>
  </svg>
);

const vercelSvg = (
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <polygon points="128 24 232 232 24 232" fill="#ffffff" />
  </svg>
);

const floatingTechLogos = [
  { id: 'php', alt: 'PHP', src: phpLogo, className: 'ambient-logo-1' },
  { id: 'next', alt: 'Next.js', src: nextLogo, className: 'ambient-logo-2' },
  { id: 'git', alt: 'Git', src: gitLogo, className: 'ambient-logo-3' },
  { id: 'node', alt: 'Node.js', svg: nodeSvg, className: 'ambient-logo-4' },
  { id: 'vercel', alt: 'Vercel', svg: vercelSvg, className: 'ambient-logo-5' },
  { id: 'yii', alt: 'Yii', src: yiiLogo, className: 'ambient-logo-6' },
];

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 10000 }}
      />
      <div className="ambient-layer" aria-hidden="true">
        {floatingTechLogos.map(({ id, src, svg, alt, className }) => (
          <div key={id} className={`ambient-logo ${className}`}>
            {src ? (
              <Image
                src={src.src ?? src}
                alt={alt}
                width={40}
                height={40}
                className="ambient-logo-img"
              />
            ) : svg}
          </div>
        ))}
      </div>
      <Navbar />
      <main className="relative min-h-screen w-full overflow-x-hidden text-white">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 md:px-8 lg:px-10">
          {children}
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </ThemeProvider>
  );
}
