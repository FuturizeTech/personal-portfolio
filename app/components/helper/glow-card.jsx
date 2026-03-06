// app/components/GlowCard.jsx
"use client";

import { useEffect, useRef, useCallback } from 'react';

const GlowCard = ({ children, identifier, className = "" }) => {
  const timeoutRef = useRef(null);
  
  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    // Optimize: Throttle function to limit how often the handler runs
    const throttle = (func, limit) => {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      }
    }

    const UPDATE = throttle((event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', 1);
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty('--start', ANGLE + 90);
      }
    }, 50); // Limit to once every 50ms

    // Optimize: Use passive event listener for better scroll performance
    document.body.addEventListener('pointermove', UPDATE, { passive: true });

    const RESTYLE = () => {
      CONTAINER?.style.setProperty('--gap', CONFIG.gap);
      CONTAINER?.style.setProperty('--blur', CONFIG.blur);
      CONTAINER?.style.setProperty('--spread', CONFIG.spread);
      CONTAINER?.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    RESTYLE();
    UPDATE({ x: 0, y: 0 }); // Initialize with default values

    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
    <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer transition-all duration-300 relative text-gray-200 rounded-xl w-full ${className}`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
