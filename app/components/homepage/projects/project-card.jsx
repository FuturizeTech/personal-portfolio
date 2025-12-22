'use client';
// @flow strict
import Image from 'next/image';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

function ProjectCard({ project }) {
  const { name, description, tags, demo, code, image } = project;
  const isRealEstate = name === 'Real Estate Listing Portal';

  return (
    <div className="relative w-full mx-auto rounded-xl border border-[#1a1443] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] group transition-all duration-500 hover:border-[#16f2b3] hover:shadow-[0_0_30px_#16f2b3] overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-pink-500 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-violet-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute bottom-1/2 right-1/2 w-0.5 h-0.5 bg-violet-500 rounded-full opacity-20 animate-pulse"></div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>

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
        {isRealEstate && (
          <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-md text-xs font-bold">
            Property Portal
          </div>
        )}
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
        {demo && (
          <a
            href={demo}
            target="_blank"
            className={`flex items-center justify-center ${isRealEstate ? 'px-4 py-2 rounded-md' : 'w-12 h-12 rounded-full'} border-2 border-[#EFF3F4] text-[#EFF3F4] hover:outline hover:outline-2 hover:outline-[#16f2b3] transition-all duration-300`}
          >
            {isRealEstate ? 'Explore Listings' : <FaPlay size={18} />}
          </a>
        )}

        {code && (
          <a
            href={code}
            target="_blank"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] hover:outline hover:outline-2 hover:outline-[#16f2b3] transition-all duration-300"
          >
            <FaCode size={18} />
          </a>
        )}
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
