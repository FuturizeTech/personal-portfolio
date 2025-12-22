'use client';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scales = [
    useTransform(scrollYProgress, [0, 0.12], [1, 0.95]),
    useTransform(scrollYProgress, [0.12, 0.24], [1, 0.95]),
    useTransform(scrollYProgress, [0.24, 0.36], [1, 0.95]),
    useTransform(scrollYProgress, [0.36, 0.48], [1, 0.95]),
    useTransform(scrollYProgress, [0.48, 0.60], [1, 0.95]),
    useTransform(scrollYProgress, [0.60, 0.72], [1, 0.95]),
  ];

  const ys = [
    useTransform(scrollYProgress, [0, 0.12], [0, -120]),
    useTransform(scrollYProgress, [0.12, 0.24], [0, -120]),
    useTransform(scrollYProgress, [0.24, 0.36], [0, -120]),
    useTransform(scrollYProgress, [0.36, 0.48], [0, -120]),
    useTransform(scrollYProgress, [0.48, 0.60], [0, -120]),
    useTransform(scrollYProgress, [0.60, 0.72], [0, -120]),
  ];

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24 w-full max-w-none -mx-6 sm:-mx-12" ref={containerRef}>
      {/* Section header */}
      <motion.div
        className="sticky top-10 z-20"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0.3])
        }}
      >
        <div className="w-20 h-20 bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </motion.div>

      {/* Projects Background */}
      <div className="pt-24 relative">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-14 w-2 h-2 bg-pink-500 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-violet-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-70 animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-violet-500 rounded-full opacity-30 animate-pulse"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,242,179,0.05),transparent_50%)] opacity-30"></div>

        {/* Sticky Header Bundle */}
        <motion.div
          className="sticky top-24 z-30 w-full max-w-4xl mx-auto mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: scrollYProgress > 0.1 ? 1 : 0,
            y: scrollYProgress > 0.1 ? 0 : -20
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-2 bg-[#0d1224]/95 backdrop-blur-md border border-[#1a1443] rounded-xl p-4 shadow-lg">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1443]/50 rounded-lg px-3 py-2"
                initial={{ scale: 0 }}
                animate={{ scale: scrollYProgress > 0.1 ? 1 : 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <p className="text-[#16f2b3] text-sm lg:text-base font-semibold">
                  {project.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wavy Thread Line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 z-5"
          style={{
            top: 'calc(24px + 200px)', // Start from bottom of first card
            height: `calc(100% - 24px - 200px - 100px)` // End at top of last card
          }}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <svg width="4" height="100%" viewBox="0 0 4 100%" className="overflow-visible">
            <motion.path
              d="M2 0 Q2 25 2 50 T2 100"
              stroke="url(#threadGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              animate={{
                d: [
                  "M2 0 Q2 25 2 50 T2 100",
                  "M2 0 Q1 25 3 50 T2 100",
                  "M2 0 Q3 25 1 50 T2 100",
                  "M2 0 Q2 25 2 50 T2 100"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <div className="flex flex-col items-center relative z-10">
          {projectsData.map((project, index) => {
            const scale = scales[index];
            const y = ys[index];

            return (
              <motion.div
                key={index}
                className="relative w-full flex flex-col items-center max-w-4xl mx-auto mb-6"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                style={{
                  scale,
                  y
                }}
              >
                {/* Project Card */}
                <ProjectCard project={project} />

                {/* Enhanced Thread Connector */}
                <motion.div
                  className="mt-4 flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: index * 0.08 + 0.2 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full shadow-2xl border-2 border-white/30 relative"
                    animate={{
                      scale: [1, 1.4, 1],
                      boxShadow: [
                        "0 0 25px rgba(236, 72, 153, 0.7)",
                        "0 0 35px rgba(139, 92, 246, 0.9)",
                        "0 0 25px rgba(6, 182, 212, 0.7)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Inner pulsing ring */}
                    <motion.div
                      className="absolute inset-1 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 rounded-full"
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.8, 0.4, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                  </motion.div>

                  {/* Floating energy particles */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-pink-400 rounded-full"
                      style={{
                        top: `${10 + i * 8}px`,
                        left: `${40 + Math.sin(i) * 15}px`
                      }}
                      animate={{
                        y: [0, -15, 0],
                        x: [0, Math.cos(i) * 10, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
