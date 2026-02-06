// @flow strict

import * as React from 'react';
import { useState, useEffect } from 'react';
import { translations } from '@/utils/translations';

function ProjectCard({ project }) {
  const images = project.images || [project.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="group h-full flex flex-col glow-container glow-card from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-br to-[#0a0d37] hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 hover:border-pink-500/50 transform hover:-translate-y-2">
      {/* Image Container */}
      {images && images.length > 0 && (
        <div className="relative overflow-hidden rounded-t-xl bg-gray-800 aspect-video">
          {isImageLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse"></div>
          )}
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            onLoad={() => setIsImageLoading(false)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

          {/* Image Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
                }}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-pink-600 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev + 1) % images.length);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-pink-600 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
              >
                ›
              </button>

              {/* Indicator dots */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentImageIndex
                      ? 'bg-pink-500 w-6'
                      : 'bg-gray-400 hover:bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Border divider */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
      </div>

      {/* Header with window controls */}
      <div className="px-4 sm:px-5 lg:px-6 py-3 lg:py-4 relative border-b border-gray-700/50">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 lg:h-3 lg:w-3 rounded-full bg-red-400 shadow-lg shadow-red-500/50"></div>
          <div className="h-3 w-3 lg:h-3 lg:w-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-500/50"></div>
          <div className="h-3 w-3 lg:h-3 lg:w-3 rounded-full bg-green-400 shadow-lg shadow-green-500/50"></div>
        </div>
      </div>

      {/* Project name */}
      <div className="px-4 sm:px-5 lg:px-6 py-2 lg:py-3">
        <p className="text-center text-[#16f2b3] text-base sm:text-lg lg:text-xl font-bold group-hover:text-pink-400 transition-colors duration-300">
          {project.name}
        </p>
      </div>

      {/* Code content */}
      <div className="flex-1 overflow-auto border-t border-indigo-900/50 px-4 sm:px-5 lg:px-6 py-4 lg:py-6 bg-gradient-to-b from-transparent to-violet-900/5">
        <code className="font-mono text-xs sm:text-sm lg:text-base leading-relaxed">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div className="ml-3 sm:ml-4 lg:ml-6">
            <span className="text-white">name:</span>
            <span className="text-gray-400">{` "`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`",`}</span>
          </div>
          <div className="ml-3 sm:ml-4 lg:ml-6">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{` [`}</span>
            {project.tools && project.tools.map((tool, i) => (
              <span key={i}>
                <span className="text-cyan-400">{`"${tool}"`}</span>
                {i < project.tools.length - 1 && <span className="text-gray-400">{', '}</span>}
              </span>
            ))}
            <span className="text-gray-400">{`],`}</span>
          </div>
          <div className="ml-3 sm:ml-4 lg:ml-6">
            <span className="text-white">role:</span>
            <span className="text-orange-400">{` "${project.role}"`}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-3 sm:ml-4 lg:ml-6">
            <span className="text-white">description:</span>
            <span className="text-cyan-400">{` "${project.description.substring(0, 60)}..."`}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`}`}</span></div>
        </code>
      </div>

      {/* Action Buttons */}
      <div className="px-4 sm:px-5 lg:px-6 pb-4 lg:pb-6 flex flex-wrap gap-3 border-t border-gray-700/50">
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold text-xs sm:text-sm py-2 px-3 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 transform hover:scale-105"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="hidden sm:inline">{translations.projects.viewCode}</span>
            <span className="sm:hidden">Code</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-violet-600 text-white font-semibold text-xs sm:text-sm py-2 px-3 rounded-lg hover:from-pink-700 hover:to-violet-700 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 transform hover:scale-105"
          >
            <span className="hidden sm:inline">{translations.projects.viewLiveDemo}</span>
            <span className="sm:hidden">{translations.projects.viewDemo}</span>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;