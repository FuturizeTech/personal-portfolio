'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingRocket = () => {
  const [positions, setPositions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Generate random positions for rocket to fly to
    const generatePositions = () => {
      const newPositions = [];
      for (let i = 0; i < 10; i++) {
        newPositions.push({
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 0),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 0),
          rotate: Math.random() * 360,
        });
      }
      setPositions(newPositions);
    };

    generatePositions();

    // Change to next position every 8 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 10);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (positions.length === 0) return null;

  const currentPos = positions[currentIndex];

  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
      }}
      animate={{
        x: currentPos ? currentPos.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0) : 0,
        y: currentPos ? currentPos.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0) : 0,
      }}
      transition={{
        duration: 8,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        animate={{
          rotate: currentPos ? currentPos.rotate : 0,
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
        }}
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
      >
        {/* Rocket SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rocket Body */}
          <rect x="35" y="10" width="30" height="60" rx="5" fill="#FF6B6B" opacity="0.8" />
          
          {/* Rocket Window */}
          <circle cx="50" cy="25" r="6" fill="#FFD93D" opacity="0.9" />
          
          {/* Rocket Nose */}
          <path d="M 35 10 L 50 0 L 65 10" fill="#FF0000" opacity="0.9" />
          
          {/* Left Wing */}
          <path d="M 35 45 L 20 60 L 30 50" fill="#FF8C42" opacity="0.8" />
          
          {/* Right Wing */}
          <path d="M 65 45 L 80 60 L 70 50" fill="#FF8C42" opacity="0.8" />
          
          {/* Left Flame */}
          <path d="M 40 70 Q 35 85 38 95" stroke="#FFD93D" strokeWidth="3" opacity="0.9" />
          
          {/* Middle Flame */}
          <path d="M 50 70 Q 50 90 50 100" stroke="#FF6B6B" strokeWidth="4" opacity="0.9" />
          
          {/* Right Flame */}
          <path d="M 60 70 Q 65 85 62 95" stroke="#FFD93D" strokeWidth="3" opacity="0.9" />
          
          {/* Glow Effect */}
          <circle cx="50" cy="50" r="35" fill="none" stroke="#FFD93D" strokeWidth="1" opacity="0.3" />
        </svg>

        {/* Glow gradient background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-500/20 blur-2xl -z-10" />
      </motion.div>
    </motion.div>
  );
};

export default FloatingRocket;
