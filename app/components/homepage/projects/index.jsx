'use client';
import { projectsData } from '@/utils/data/projects-data';
import { translations } from '@/utils/translations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BsGithub, BsArrowUpRight } from 'react-icons/bs';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="relative z-50 my-10 py-4 md:my-16 lg:py-8">
      <div className="absolute -top-6 left-4 h-24 w-24 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute -bottom-10 right-8 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="flex flex-col items-center px-4 py-4 md:py-6">
        <div className="section-heading">{translations.projects.title}</div>
        <p className="mt-4 max-w-2xl text-center text-sm leading-7 text-slate-400 sm:text-base">
          Showcasing innovative web solutions and modern applications built with cutting-edge technologies.
        </p>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl px-4">
        <motion.div
          className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/80 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                
                {/* Gradient Background */}
                <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />
                <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl transition-all duration-500 group-hover:bg-pink-500/20" />

                {/* Image Container */}
                {project.images && project.images.length > 0 && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-800 sm:h-56">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                )}

                {/* Content Container */}
                <div className="relative p-5 sm:p-6">
                  {/* Badge */}
                  <div className="mb-4">
                    <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                      {project.role}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-white line-clamp-2 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-6 text-slate-400 line-clamp-3 group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-all duration-300 group-hover:border-pink-400/30 group-hover:bg-pink-500/10 group-hover:text-pink-300"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                        +{project.tools.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-200"
                      >
                        <BsArrowUpRight className="h-3.5 w-3.5" />
                        Demo
                      </Link>
                    )}
                    {project.code && (
                      <Link
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-pink-300 transition-all duration-300 hover:bg-pink-500/20 hover:border-pink-400/50 hover:text-pink-200"
                      >
                        <BsGithub className="h-3.5 w-3.5" />
                        Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
