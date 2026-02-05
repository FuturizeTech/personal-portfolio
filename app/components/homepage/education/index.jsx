// @flow strict
'use client';
import dynamic from "next/dynamic";
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";

const GlowCard = dynamic(() => import("@/app/components/helper/glow-card"), { ssr: false });

function Education() {
  return (
    <div id="education" className="relative z-50 my-12 md:my-16 lg:my-20">
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
            {translations.education.title}
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
        </div>
      </div>

      <div className="py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Lottie animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Education cards */}
          <div>
            <div className="flex flex-col gap-8">
              {educations.map((edu) => (
                <GlowCard key={edu.id} identifier={`education-${edu.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: edu.id * 0.1 }}
                    className="relative p-3 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg bg-gradient-to-tr from-[#0d1224] to-[#0a0d37]"
                  >

                    {/* Blur overlay */}
                    <Image
                      src="/blur-23.svg"
                      alt="Blur overlay"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 rounded-xl"
                    />

                    {/* Duration */}
                    <div className="flex justify-center mt-2">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">{edu.duration}</p>
                    </div>

                    {/* Info */}
                    <div className="flex items-center gap-x-6 px-3 py-5 relative z-10">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-bold uppercase">{edu.title}</p>
                        <p className="text-sm sm:text-base">{edu.institution}</p>
                      </div>
                    </div>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation for particles */}
      <style jsx>{`
        @keyframes floating {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-15px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-40px) scale(1); opacity: 0; }
        }
        .animate-floating {
          animation: floating infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Education;
