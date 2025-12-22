// @flow strict
"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2 relative">
          <div className="relative">
            {/* Solar system circles */}
            <div className="absolute inset-0 rounded-full border-2 border-[#16f2b3] opacity-50 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border-2 border-[#d50c0c] opacity-50 animate-spin-reverse"></div>
            <Image
              src={personalData.profile}
              width={200}
              height={200}
              alt="Sarabjeet Singh"
              unoptimized
              className="rounded-3xl transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer clip-path-[polygon(0%_0%,100%_0%,100%_85%,95%_90%,90%_85%,85%_95%,80%_90%,75%_100%,70%_90%,65%_95%,60%_85%,55%_90%,50%_80%,45%_85%,40%_75%,35%_80%,30%_70%,25%_75%,20%_65%,15%_70%,10%_60%,5%_65%,0%_55%)]"
            />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
}

export default AboutSection;
