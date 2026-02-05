// @flow strict
'use client';
import { experiences } from "@/utils/data/experience";
import { calculateTotalExperience } from "@/utils/calculate-experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useState, useEffect } from "react";

const GlowCard = dynamic(() => import("../../helper/glow-card"), { ssr: false });

function Experience({ onLoad }) {
  const [totalExperience, setTotalExperience] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const total = calculateTotalExperience(experiences);
    setTotalExperience(total);
  }, []);

  useEffect(() => {
    if (onLoad) onLoad();
  }, [onLoad]);

  return (
    <div id="experience" className="my-12 md:my-16 lg:my-20 relative">
      {/* Background section image */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />


      {/* Section title */}
      <div className="flex justify-center my-6 md:my-8 lg:my-10 relative z-20">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></span>
          <span className="bg-gradient-to-r from-pink-600 to-violet-600 w-fit text-white p-2 px-4 sm:px-5 text-base sm:text-xl font-bold rounded-md">
            {translations.experience.title}
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
        </div>
      </div>

      {/* Total experience (centered under heading) */}
      <div className="flex justify-center my-3 relative z-10 mt-2">
        <GlowCard identifier="total-experience">
          <div className="p-3 text-center">
            <p className="text-xs sm:text-sm text-[#16f2b3]">Total Experience</p>
            <p className="text-base sm:text-lg font-bold text-white">
              {totalExperience.years} Years {totalExperience.months} Months
            </p>
          </div>
        </GlowCard>
      </div>

      <div className="py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Lottie animation */}
          <div className="order-2 lg:order-1 flex justify-center items-center min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
            <div className="w-full h-full max-w-md">
              <AnimationLottie animationPath={experience} width="100%" />
            </div>
          </div>

          {/* Experience cards */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-4 sm:gap-6">
              {experiences.map((exp, index) => (
                <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative p-3 sm:p-4 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg"
                  >
                    {/* Blur overlay for depth */}
                    <Image
                      src="/blur-23.svg"
                      alt="Blur overlay"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />

                    {/* Experience info */}
                    <div className="flex justify-center items-center gap-2 mt-1">
                      {exp.id === 3 && <span className="px-2 py-1 bg-blue-500/30 text-blue-300 text-xs font-semibold rounded">Training</span>}
                      <p className="text-xs sm:text-sm text-[#16f2b3] font-semibold">{exp.duration}</p>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 px-2 sm:px-3 py-3 sm:py-4 relative z-10">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125 flex-shrink-0 mt-1">
                        <BsPersonWorkspace size={32} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base lg:text-lg mb-1 font-bold uppercase truncate">
                          {exp.title}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-300 truncate">{exp.company}</p>
                      </div>
                    </div>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
