// @flow strict
'use client';
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { translations } from "@/utils/translations";
import { useEffect } from "react";

function Skills({ onLoad }) {
  useEffect(() => {
    if (onLoad) onLoad();
  }, [onLoad]);
  return (
    <div id="skills" className="relative z-50 my-12 md:my-16 lg:my-20">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center my-6 md:my-8 lg:my-10 relative z-20">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></span>
          <span className="bg-gradient-to-r from-pink-600 to-violet-600 w-fit text-white p-2 px-4 sm:px-5 text-base sm:text-xl font-bold rounded-md">
            {translations.skills.title}
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
        </div>
      </div>

      <div className="w-full my-5">
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
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;