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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-12">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            {translations.projects.title}
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-500 to-violet-600 h-full"></div>
          <motion.div className="space-y-16" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {projectsData.slice(0, 4).map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex justify-center"
              >
                <div 
                  className={`w-full ${index % 2 === 0 ? 'transform -translate-x-12' : 'transform translate-x-12'}`}
                >
                  <ProjectCard project={project} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;