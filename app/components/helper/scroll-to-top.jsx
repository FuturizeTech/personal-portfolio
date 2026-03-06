"use client";

import { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Optimize: Use requestAnimationFrame for smoother scroll handling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const btnCls = isVisible ? DEFAULT_BTN_CLS : DEFAULT_BTN_CLS + " hidden";

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
