'use client';

import SaleProjectCard from './sale-project-card';
import { saleProjects } from '@/utils/data/sale-projects';

const ProjectsForSale = () => {
  return (
    <div id="projects-for-sale" className="relative z-50 my-12 lg:my-24">

      {/* STICKY HEADER */}
      <div className="sticky top-10 z-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 blur-3xl opacity-30" />

        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 text-white px-5 py-3 text-xl rounded-md">
            PROJECTS FOR SALE
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-24">
        <div className="flex flex-col gap-10">
          {saleProjects.map((project, index) => (
            <div
              key={index}
              id={`sale-sticky-card-${index + 1}`}
              className="sticky w-full mx-auto max-w-[85%]"
            >
              <SaleProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectsForSale;
