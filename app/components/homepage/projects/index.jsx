'use client';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      {/* Sticky Title */}
      <div className="sticky top-10 z-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Timeline Project Cards */}
      <div className="pt-24 relative">
        {/* vertical connecting line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-pink-600 z-0"></div>

        <div className="flex flex-col items-center gap-20 relative z-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative min-h-[75vh] w-full max-w-2xl flex flex-col items-center"
            >
              {/* Sticky Card */}
              <div className="sticky top-24 z-10">
                <ProjectCard project={project} />
              </div>

              {/* Dot connector below card */}
              <div className="mt-6 flex flex-col items-center">
                <div className="w-3 h-3 bg-pink-500 rounded-full border-4 border-white shadow-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
