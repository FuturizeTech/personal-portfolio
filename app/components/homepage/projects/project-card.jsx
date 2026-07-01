// @flow strict

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { translations } from '@/utils/translations';

function ProjectCard({ project }) {
  const images = project.images?.length ? project.images : project.image ? [project.image] : [];
  const hasImages = images.length > 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(hasImages);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const isFeatured = project.name.toLowerCase().includes('shopbix');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (images && images.length > 1 && isVisible) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4200);
      return () => clearInterval(interval);
    }
  }, [images, isVisible]);

  return (
    <div ref={cardRef} className="group relative h-full flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_35px_100px_rgba(2,6,23,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-400/40 hover:shadow-[0_35px_110px_rgba(244,114,182,0.22)]">
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 opacity-80" />
        {hasImages ? (
          <>
            {isImageLoading && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-800 to-slate-950" />}
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              onLoad={() => setIsImageLoading(false)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-900 px-6 text-center text-sm uppercase tracking-[0.24em] text-slate-400 sm:text-base">
            Preview coming soon
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-slate-950/70 p-2 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-slate-950/70 p-2 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-6 bg-pink-500' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="relative px-5 py-5 sm:px-6 lg:px-7 lg:py-6">
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-200 shadow-[0_10px_30px_rgba(56,189,248,0.12)]">
          {isFeatured ? 'Marketplace' : 'Case Study'}
        </div>

        <div className="relative space-y-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-base font-semibold uppercase tracking-[0.22em] text-emerald-300 sm:text-lg">{project.name}</p>
            <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] ${isFeatured ? 'bg-pink-500/15 text-pink-300 border border-pink-500/20' : 'bg-white/10 text-slate-100 border border-white/10'}`}>
              {isFeatured ? 'Featured' : 'Live'}
            </span>
          </div>

          <p className="text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tools?.slice(0, 4).map((tool) => (
              <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-200">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent px-5 py-4 sm:px-6 lg:px-7 lg:py-5">
        <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-500">
          <span className="h-2 w-2 rounded-full bg-pink-500" /> Idea & impact
        </div>
        <code className="block rounded-3xl bg-slate-950/90 p-4 text-xs leading-6 text-slate-200 sm:text-sm">
          <div><span className="text-pink-500">const</span> <span className="text-white">project</span> <span className="text-pink-500">=</span> <span className="text-slate-400">{'{'}</span></div>
          <div className="ml-4"><span className="text-white">tools:</span> <span className="text-cyan-400">[{project.tools?.slice(0, 3).map((tool) => `"${tool}"`).join(', ')}]</span></div>
          <div className="ml-4"><span className="text-white">role:</span> <span className="text-amber-300">"{project.role}"</span></div>
          <div className="ml-4"><span className="text-white">impact:</span> <span className="text-emerald-300">"high quality delivery"</span></div>
          <div><span className="text-slate-400">{' };'}</span></div>
        </code>
      </div>

      <div className="flex flex-wrap gap-3 border-t border-white/10 px-5 py-4 sm:px-6 lg:px-7">
        {project.code && (
          <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 min-w-[140px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-100 transition duration-300 hover:border-slate-400/50 hover:bg-white/10">
            <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            <span className="hidden sm:inline">{translations.projects.viewCode}</span><span className="sm:hidden">Code</span>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 min-w-[140px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:shadow-[0_10px_30px_rgba(244,114,182,0.22)]">
            <span className="hidden sm:inline">{translations.projects.viewLiveDemo}</span><span className="sm:hidden">Demo</span>
            <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
