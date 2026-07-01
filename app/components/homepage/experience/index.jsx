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
    <section id="experience" className="relative my-10 py-4 md:my-16 lg:py-8">
      <div className="absolute inset-0 -z-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-transparent" />

      <div className="flex justify-center px-4 py-4 md:py-6">
        <div className="section-heading">{translations.experience.title}</div>
      </div>

      <div className="mx-auto mt-4 flex max-w-3xl justify-center px-4">
        <GlowCard identifier="total-experience">
          <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-5 py-4 text-center shadow-[0_20px_60px_rgba(2,6,23,0.25)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Total Experience</p>
            <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
              {totalExperience.years} Years {totalExperience.months} Months
            </p>
          </div>
        </GlowCard>
      </div>

      <div className="mt-6 px-2 py-3 md:py-6 lg:px-0">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 flex min-h-[260px] items-center justify-center lg:order-1 lg:min-h-[420px]">
            <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-900/60 p-4 shadow-[0_30px_70px_rgba(2,6,23,0.25)] backdrop-blur-xl">
              <AnimationLottie animationPath={experience} width="100%" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-4 sm:gap-5">
              {experiences.map((exp, index) => (
                <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_20px_55px_rgba(2,6,23,0.2)] transition duration-500 hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-[0_24px_65px_rgba(244,114,182,0.18)]"
                  >
                    <Image src="/blur-23.svg" alt="Blur overlay" width={1080} height={200} className="absolute bottom-0 opacity-80" />

                    <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                      <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-300">
                        <BsPersonWorkspace size={24} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {exp.id === 3 && <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-300">Training</span>}
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">{exp.duration}</p>
                        </div>
                        <p className="mt-2 text-base font-semibold uppercase tracking-[0.16em] text-white sm:text-lg">
                          {exp.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-300">{exp.company}</p>
                      </div>
                    </div>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
