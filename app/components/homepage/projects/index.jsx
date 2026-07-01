'use client';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { translations } from '@/utils/translations';
import { motion } from 'framer-motion';

const Projects = () => {
  const featuredProject = projectsData.find((project) => project.name.toLowerCase().includes('shopbix')) || projectsData[0];
  const otherProjects = projectsData.filter((project) => project.id !== featuredProject.id);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="relative z-50 my-10 py-4 md:my-16 lg:py-8">
      <div className="absolute -top-6 left-4 h-24 w-24 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute -bottom-10 right-8 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="flex flex-col items-center px-4 py-4 md:py-6">
        <div className="section-heading">{translations.projects.title}</div>
        <p className="mt-4 max-w-2xl text-center text-sm leading-7 text-slate-400 sm:text-base">
          A curated showcase of modern web experiences, including a featured marketplace project built for classifieds, local listings, and business discovery.
        </p>
      </div>

      <div className="mx-auto mt-6 w-full max-w-7xl space-y-8 lg:space-y-10 px-4">
        <motion.div
          className="grid gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
        >
          <motion.div variants={itemVariants} className="grid gap-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_35px_100px_rgba(2,6,23,0.24)] backdrop-blur-xl">
              <div className="pointer-events-none absolute -top-10 right-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-6 left-8 h-28 w-28 rounded-full bg-pink-500/10 blur-3xl" />
              <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 opacity-90" />

              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                    Featured Marketplace
                  </span>
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">{featuredProject.name}</h2>
                  <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tools.slice(0, 5).map((tool) => (
                      <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-200 shadow-sm shadow-cyan-500/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_24px_60px_rgba(2,6,23,0.22)]">
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Marketplace Snapshot</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    <li>• Classified ads and local business listings in one platform</li>
                    <li>• Google Maps-based discovery and category search</li>
                    <li>• Firebase auth and AWS-backed services</li>
                    <li>• Third-party API-driven business directories and commerce flows</li>
                  </ul>
                </div>
              </div>
            </div>
            <ProjectCard project={featuredProject} />
          </motion.div>

          <motion.div variants={itemVariants} className="overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
            <div className="flex gap-6 min-w-max px-2 sm:px-0">
              {otherProjects.map((project) => (
                <div key={project.id} className="flex-shrink-0 w-[320px] sm:w-[360px] snap-center">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
