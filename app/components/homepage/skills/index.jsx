// @flow strict
'use client';
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Floating background glow */}
      <div className="w-[100px] h-[100px] bg-[#16f2b3]/20 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 animate-pulse-slow"></div>

      {/* Decorative horizontal line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent w-full" />
        </div>
      </div>

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Marquee with skill cards */}
      <div className="w-full my-12 relative">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative cursor-pointer"
              key={id}
            >
              {/* Card with glow on hover */}
              <div className="relative h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none group-hover:shadow-[0_0_20px_#16f2b3] transition-all duration-500">
                {/* Top horizontal gradient line */}
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent" />
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-col items-center justify-center gap-3 p-6 relative z-10">
                  {/* Icon */}
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>

                  {/* Skill name */}
                  <p className="text-white text-sm sm:text-lg">{skill}</p>

                  {/* Floating sparkles on hover */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span
                        key={i}
                        className="absolute bg-[#16f2b3] rounded-full opacity-50 group-hover:opacity-100 animate-floating-fast"
                        style={{
                          width: `${2 + Math.random() * 4}px`,
                          height: `${2 + Math.random() * 4}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes floating-fast {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-20px) scale(1); opacity: 0; }
        }
        .animate-floating-fast {
          animation: floating-fast infinite ease-in-out;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.35; }
        }
        .animate-pulse-slow {
          animation: pulse-slow infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Skills;
