'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./footer";
import ScrollToTop from "./helper/scroll-to-top";
import Navbar from "./navbar";
import FloatingRocket from "./helper/floating-rocket";

import Loader from './loader';

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="font-sans bg-gray-900 text-white">
        <Loader />
      </div>
    );
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
      <FloatingRocket />
      <main className="min-h-screen relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white bg-gray-900">
        <Navbar />
        {children}
        <ScrollToTop />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
