'use client';
// @flow strict
import Image from 'next/image';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

function ProjectCard({ project }) {
  const { name, description, tags, demo, code, image } = project;

  return (
    <div className="relative w-full max-w-5xl rounded-xl border border-[#1a1443] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] group transition-all duration-500 hover:border-[#16f2b3] hover:shadow-[0_0_30px_#16f2b3] overflow-hidden">

      {/* Card header with neon dots */}
      <div className="flex px-6 py-4 relative">
        <div className="absolute flex space-x-2 top-1/2 -translate-y-1/2">
          <span className="h-3 w-3 rounded-full bg-red-400"></span>
          <span className="h-3 w-3 rounded-full bg-orange-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-200"></span>
        </div>
        <p className="ml-12 text-[#16f2b3] text-lg lg:text-2xl text-center w-full font-semibold">
          {name}
        </p>
      </div>

      {/* Project image */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 relative px-6 py-6 lg:py-8 rounded-xl">
        <Image
          src={image?.src || placeholder}
          alt={name}
          width={1400}
          height={600}
          className="w-full h-72 lg:h-80 object-cover rounded-xl transition-all duration-700 group-hover:opacity-80"
        />

        {/* Project description overlay */}
        <p className="absolute top-0 left-0 w-[85%] p-6 bg-[#0f0b24]/90 text-[#EFF3F4] rounded-[0_25px_25px_0] text-sm md:text-base transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0">
          {description}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex justify-between px-8 py-4">
        <a
          href={demo}
          target="_blank"
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] hover:outline hover:outline-2 hover:outline-[#16f2b3] transition-all duration-300"
        >
          <FaPlay size={18} />
        </a>

        <a
          href={code}
          target="_blank"
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] hover:outline hover:outline-2 hover:outline-[#16f2b3] transition-all duration-300"
        >
          <FaCode size={18} />
        </a>
      </div>

      {/* Tags */}
      <div className="absolute bottom-6 right-0 flex flex-col gap-2 bg-[#0f0b24] rounded-l-lg p-4 translate-x-full group-hover:translate-x-0 transition-transform duration-500">
        {tags?.map((tag, id) => (
          <span key={id} className="text-sm font-medium text-[#EFF3F4]">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
