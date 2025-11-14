// @flow strict
'use client';
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const GlowCard = dynamic(() => import("../../helper/glow-card"), { ssr: false });

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background section image */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
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
                    {/* Subtle animated background particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <span
                          key={i}
                          className="absolute bg-[#16f2b3] rounded-full opacity-50 animate-floating"
                          style={{
                            width: `${4 + Math.random() * 6}px`,
                            height: `${4 + Math.random() * 6}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                          }}
                        />
                      ))}
                    </div>

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
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
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

export default Experience;
