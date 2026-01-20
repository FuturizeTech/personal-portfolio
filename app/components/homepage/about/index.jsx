// @flow strict
"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { translations } from "@/utils/translations";

function AboutSection() {
  return (
    <div id="about" className="my-1 mb-3 relative">
      {/* SIDE LABEL */}
      <div className="hidden lg:flex flex-col items-center absolute top-8 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          {translations.about.title}
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* TEXT */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            {translations.about.question}
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>

        {/* IMAGE + ORBITS */}
        <div className="flex justify-center order-1 lg:order-2">
          {/* 👇 group added ONLY for hover detection */}
          <div className="relative w-[260px] h-[260px] flex items-center justify-center overflow-visible group">

            {/* BACK ORBIT */}
            <div className="orbit-wrapper orbit-back">
              <div className="orbit animate-spin-slow orbit-purple" />
            </div>

            {/* INNER BACK ORBIT */}
            <div className="orbit-wrapper orbit-back orbit-inner">
              <div className="orbit animate-spin-reverse orbit-pink" />
            </div>

            {/* IMAGE */}
            <Image
              src={personalData.profile}
              width={200}
              height={200}
              alt="Sarabjeet Singh"
              unoptimized
              className="relative z-10 rounded-3xl transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
            />

            {/* FRONT ORBIT */}
            <div className="orbit-wrapper orbit-front">
              <div className="orbit animate-spin-slow orbit-purple" />
            </div>

            {/* INNER FRONT ORBIT */}
            <div className="orbit-wrapper orbit-front orbit-inner">
              <div className="orbit animate-spin-reverse orbit-pink" />
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

        /* ================= Orbit System (UNCHANGED) ================= */
        .orbit-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          margin-left: -150px;
          margin-top: -100px;
          transform: rotateX(65deg);
          transform-origin: center;
          pointer-events: none;
        }

        .orbit-inner {
          width: 300px;
          height: 300px;
          margin-left: -150px;
          margin-top: -80px;
        }

        .orbit {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          transition:
            border-width 0.4s ease,
            filter 0.4s ease,
            opacity 0.4s ease;
        }

        .orbit-purple {
          border: 2px solid #9b5de5;
        }

        .orbit-pink {
          border: 2px solid #f15bb5;
        }

        /* ================= DEPTH ================= */
        .orbit-back {
          z-index: 0;
          opacity: 0.35;
          filter: blur(0.4px);
        }

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

        /* ================= HOVER GLOW (NO POSITION CHANGE) ================= */

        .group:hover .orbit-purple {
          border-width: 4px; /* wider ring */
          filter:
            drop-shadow(0 0 10px #9b5de5)
            drop-shadow(0 0 20px rgba(155,93,229,0.8));
          opacity: 1;
        }

        .group:hover .orbit-pink {
          border-width: 4px; /* wider ring */
          filter:
            drop-shadow(0 0 10px #f15bb5)
            drop-shadow(0 0 20px rgba(241,91,181,0.8));
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default AboutSection;