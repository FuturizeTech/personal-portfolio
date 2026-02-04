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
    <div id="experience" className="relative">
      {/* Background section image */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />


      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-5 relative z-20">
        <div className="flex items-center gap-4">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            {translations.experience.title}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Total experience (centered under heading) */}
      <div className="flex justify-center my-3 relative z-10 mt-2">
        <GlowCard identifier="total-experience">
          <div className="p-3 text-center">
            <p className="text-sm text-[#16f2b3]">Total Experience</p>
            <p className="text-lg font-bold text-white">
              {totalExperience.years} Years {totalExperience.months} Months
            </p>
          </div>
        </GlowCard>
      </div>

      <div className="py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Lottie animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>


          {/* Experience cards */}
          <div>
            <div className="flex flex-col gap-8">
              {experiences.map((exp) => (
                <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: exp.id * 0.1 }}
                    className="relative p-3 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg"
                  >
                    {/* Blur overlay for depth */}
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />

                    {/* Experience info */}
                    <div className="flex justify-center mt-2">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">{exp.duration}</p>
                    </div>
                    <div className="flex items-center gap-x-6 px-3 py-5 relative z-10">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>

                      <div>
                        <p className="text-base sm:text-xl mb-2 font-bold uppercase">
                          {exp.title}
                        </p>
                        <p className="text-sm sm:text-base">{exp.company}</p>
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
