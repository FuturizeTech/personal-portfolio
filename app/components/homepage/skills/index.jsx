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
    <section id="skills" className="relative z-50 my-10 py-4 md:my-16 lg:py-8">
      <div className="absolute left-1/2 top-8 h-24 w-24 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="flex justify-center px-4 py-4 md:py-6">
        <div className="section-heading">{translations.skills.title}</div>
      </div>

      <div className="mx-auto mt-4 w-full max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/50 p-4 shadow-[0_25px_70px_rgba(2,6,23,0.2)] backdrop-blur-xl sm:p-5 lg:p-6">
        <Marquee gradient={false} speed={80} pauseOnHover pauseOnClick delay={0} play direction="left">
          {skillsData.map((skill, id) => (
            <div
              className="group m-3 flex h-fit w-36 min-w-fit cursor-pointer flex-col items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/5 p-3 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.08] hover:border-pink-400/40 hover:bg-pink-500/10 sm:m-4"
              key={id}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 p-2">
                <Image src={skillsImage(skill)?.src} alt={skill} width={40} height={40} className="h-full w-auto rounded-lg object-contain" />
              </div>
              <p className="text-center text-sm font-semibold text-slate-100 sm:text-base">{skill}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;