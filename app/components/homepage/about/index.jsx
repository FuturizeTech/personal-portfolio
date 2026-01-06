// @flow strict
"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-1 mb-3 relative">
      {/* SIDE LABEL */}
      <div className="hidden lg:flex flex-col items-center absolute top-8 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* TEXT */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>

        {/* IMAGE + TILTED ORBITS */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative w-[260px] h-[260px] flex items-center justify-center overflow-visible">

            {/* BACK ORBIT */}
            <div className="orbit-wrapper orbit-back">
              <div className="orbit animate-spin-slow border-purple-500" />
            </div>

            {/* INNER BACK ORBIT */}
            <div className="orbit-wrapper orbit-back orbit-inner">
              <div className="orbit animate-spin-reverse border-pink-500" />
            </div>

            {/* IMAGE */}
            <Image
              src={personalData.profile}
              width={200}
              height={200}
              alt="Sarabjeet Singh"
              unoptimized
              className="relative z-10 rounded-3xl transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105"
            />

            {/* FRONT ORBIT */}
            <div className="orbit-wrapper orbit-front">
              <div className="orbit animate-spin-slow border-purple-500 orbit-purple" />
            </div>

            {/* INNER FRONT ORBIT */}
            <div className="orbit-wrapper orbit-front orbit-inner">
              <div className="orbit animate-spin-reverse border-pink-500 orbit-pink" />
            </div>

          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        /* ================= Animations ================= */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        /* ================= Orbit System ================= */

        /* Wrapper = TILT (3D illusion) */
        .orbit-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px; /* elliptical height */
          margin-left: -150px; /* half width */
          margin-top: -100px;  /* half height */
          transform: rotateX(65deg); /* tilt orbit */
          transform-origin: center;
          pointer-events: none;
        }

        /* INNER orbit = smaller ellipse */
        .orbit-inner {
          width: 300px;
          height:300px;
          margin-left: -150px;
          margin-top: -80px;
        }

        /* Actual orbit ring = border only, rotation handled by animation */
        .orbit {
          position: absolute;
          inset: 0;
          border: 2px solid #9b5de5;
          border-radius: 50%;
        }
.orbit-purple {
  border: 2px solid #9b5de5; /* purple */
}

.orbit-pink {
  border: 2px solid #f15bb5; /* pink */
}


        /* Back half */
        .orbit-back {
          z-index: 0;
          opacity: 0.35;
          filter: blur(0.4px);
        }

        /* Front half = mask */
        .orbit-front {
          z-index: 20;
          opacity: 0.75;
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 45%,
            black 55%,
            black 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 45%,
            black 55%,
            black 100%
          );
        }
      `}</style>
    </div>
  );
}

export default AboutSection;
