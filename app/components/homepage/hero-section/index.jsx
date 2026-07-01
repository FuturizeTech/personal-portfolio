// @flow strict
'use client';
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import TiltCard from "@/app/components/helper/TiltCard";
import { translations } from "@/utils/translations";
import { useEffect, useState } from "react";

function HeroSection({ onLoad }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (onLoad) onLoad();
    setIsLoaded(true);
  }, [onLoad]);

  return (
    <section className="relative isolate overflow-hidden py-6 md:py-10 lg:py-12" style={{ minHeight: '680px' }}>
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1572}
        height={795}
        priority={true}
        loading="eager"
        className="absolute inset-x-0 top-0 -z-10 opacity-70"
        style={{ contain: 'layout style paint' }}
      />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-center pb-6"
        >
          <div className="section-heading mb-6">
            <span className="h-2 w-2 rounded-full bg-pink-400" />
            Available for impactful product work
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl" style={{ contain: 'layout style paint' }}>
            {translations.hero.greeting}{' '}
            {translations.hero.introduction}{' '}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              {personalData.name}
            </span>
            <br />
            <span className="mt-3 block min-h-[1.8em] text-[1.1rem] font-semibold text-emerald-300 sm:text-[1.35rem] lg:min-h-[2.2em]">
              <Typewriter
                options={{
                  strings: translations.hero.roles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            {translations.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full border border-pink-400/30 bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_45px_rgba(244,114,182,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(244,114,182,0.3)]"
            >
              <span className="flex items-center gap-2">
                <RiContactsFill size={16} />
                {translations.hero.workTogether}
              </span>
            </Link>
            <Link
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-100 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              target="_blank"
              href={personalData.resume}
            >
              <MdDownload size={16} />
              {translations.hero.getResume}
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <Link href={personalData.github} target="_blank" className="rounded-full border border-white/10 bg-white/5 p-3 text-pink-300 transition duration-300 hover:scale-110 hover:border-pink-400/40 hover:text-pink-200">
              <BsGithub size={22} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="rounded-full border border-white/10 bg-white/5 p-3 text-cyan-300 transition duration-300 hover:scale-110 hover:border-cyan-400/40 hover:text-cyan-200">
              <BsLinkedin size={22} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute inset-0 -translate-y-4 rounded-[2rem] bg-gradient-to-r from-pink-500/20 to-cyan-400/20 blur-3xl" />
          <TiltCard className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-2 shadow-[0_30px_70px_rgba(2,6,23,0.5)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                <span>Core stack</span>
                <span className="text-emerald-300">• available now</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {['Laravel', 'Next.js', 'Node.js'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center text-sm font-semibold text-slate-200">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.25rem] border border-cyan-400/20 bg-[#040816] p-4 font-mono text-[0.75rem] leading-6 text-slate-200 sm:text-sm">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-1">
                  <div><span className="text-pink-400">const</span> <span className="text-white">builder</span> = {'{'}</div>
                  <div className="pl-4"><span className="text-white">name:</span> <span className="text-amber-300">"Sarabjeet Singh"</span>,</div>
                  <div className="pl-4"><span className="text-white">focus:</span> <span className="text-cyan-300">"full-stack product development"</span>,</div>
                  <div className="pl-4"><span className="text-white">impact:</span> <span className="text-emerald-300">"fast, scalable, polished"</span></div>
                  <div>{'};'}</div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
