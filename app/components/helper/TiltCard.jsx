// @flow strict
'use client';
import { useRef, useState } from 'react';

function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const calculateTilt = (clientX, clientY) => {
    if (!cardRef.current) return { x: 0, y: 0 };
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = clientX - centerX;
    const mouseY = clientY - centerY;
    const tiltX = (mouseY / (rect.height / 2)) * 10; 
    const tiltY = -(mouseX / (rect.width / 2)) * 10;
    return { x: tiltX, y: tiltY };
  };

  const handleMouseMove = (e) => {
    setTilt(calculateTilt(e.clientX, e.clientY));
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    setTilt(calculateTilt(touch.clientX, touch.clientY));
  };

  const handleTouchEnd = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export default TiltCard;