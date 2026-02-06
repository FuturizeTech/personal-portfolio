'use client';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { translations } from '@/utils/translations';
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div id='projects' className="relative z-50 my-12 md:my-16 lg:my-20">
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
      <div className="flex items-center justify-start relative overflow-hidden pb-4">
        <span className="bg-gradient-to-r from-pink-600 to-violet-600 text-white px-4 sm:px-5 py-2 sm:py-3 text-lg sm:text-xl font-bold rounded-md flex-shrink-0">
          {translations.projects.title}
        </span>
        <span className="w-full h-[2px] ml-4 bg-gradient-to-r from-pink-500 via-violet-500 to-transparent"></span>
      </div>

      <div className="pt-12 lg:pt-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`h-full ${
                index === 2
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;