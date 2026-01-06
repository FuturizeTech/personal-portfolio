'use client';

import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';
import { useState } from 'react';

const SaleSingleProjects = ({ project }) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % project.images.length);
    const prev = () => setIndex((i) => (i - 1 + project.images.length) % project.images.length);

    return (
        <div className="p-6 lg:p-10 space-y-6">

            {/* IMAGE SLIDER */}
            <div className="relative w-full h-[420px] bg-black rounded-lg overflow-hidden">

                <Image
                    src={project.images[index]}
                    alt={project.name}
                    fill
                    className="object-contain"
                    priority
                />

                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2
          bg-black/60 text-white p-3 rounded-full hover:bg-black"
                >
                    ❮
                </button>

                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2
          bg-black/60 text-white p-3 rounded-full hover:bg-black"
                >
                    ❯
                </button>

                <div className="absolute bottom-4 w-full flex justify-center gap-3">
                    {project.images.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full cursor-pointer
              ${index === i ? 'bg-violet-500 scale-125' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>

            {/* INFO */}
            <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    {project.description}
                </p>

                <p className="text-gray-400 italic text-sm">
                    Full source code, setup support & customization available.
                </p>

                <a
                    href={project.contact}
                    className="flex items-center justify-center gap-3 w-full py-3
          bg-violet-500 text-black font-semibold rounded-xl
          hover:bg-violet-400 transition"
                >
                    <FaPhone /> Contact to Buy
                </a>
            </div>

        </div>
    );
};

export default SaleSingleProjects;
