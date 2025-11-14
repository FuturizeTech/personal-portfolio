// @flow strict
"use client";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { useState } from "react";

// PROJECT LIST
const saleProjects = [
    {
        id: 1,
        name: "School Management - Full System",
        description:
            "A complete School Management System including student dashboard, login system, teacher access, attendance, and profile management.",

        images: [
            "/project/login-screen.png",
            "/project/student-dashboard.png",
            "/project/student-profile.png",
            "/project/students-access.png",
            "/project/teachers-access.png",
        ],
        contact: "tel:7307472724",
    },
];

const ProjectsForSale = () => {
    return (
        <div
            id="projects-for-sale"
            className="min-h-screen w-full bg-[#080011] py-12 px-4 sm:px-8 lg:px-20"
        >
            <h1 className="text-4xl lg:text-5xl font-bold text-center text-[#16f2b3] mb-12">
                Projects For Sale
            </h1>

            <div className="w-full flex justify-center">
                <div className="w-full max-w-6xl">
                    {saleProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="relative group bg-gradient-to-tr from-[#0d1224] to-[#0a0d37] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(22,242,179,0.3)] transition-all duration-500">

            {/* IMAGE SLIDER - NOW ALWAYS VISIBLE ABOVE ALL BLOCKS */}
            <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center justify-center bg-black">

                {/* FIXED: z-[99999] to force top priority */}
                <div className="absolute inset-0 z-[99999] flex items-center justify-center">
                    <Image
                        src={project.images[index]}
                        alt={project.name}
                        width={1600}
                        height={900}
                        priority
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* PREVIOUS BUTTON */}
                <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/40 text-white p-3 sm:p-4 text-xl rounded-full hover:bg-black/70 transition z-[100000]"
                >
                    ❮
                </button>

                {/* NEXT BUTTON */}
                <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/40 text-white p-3 sm:p-4 text-xl rounded-full hover:bg-black/70 transition z-[100000]"
                >
                    ❯
                </button>

                {/* DOTS */}
                <div className="absolute bottom-6 w-full flex justify-center gap-3 z-[100000]">
                    {project.images.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === i ? "bg-[#16f2b3] scale-125" : "bg-white/40"
                                }`}
                        ></div>
                    ))}
                </div>
            </div>

            {/* PROJECT INFO */}
            <div className="p-6 space-y-4">
                <h2 className="text-3xl font-semibold text-[#EFF3F4]">{project.name}</h2>

                <p className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                </p>

                <p className="text-[#16f2b3] font-bold text-xl">
                    {/* Price: {project.price} */}
                </p>
                <p className="text-gray-400 text-sm italic">
                    For complete details or customization requests, please contact me. I’d be happy to walk you through the full system.
                </p>


                <a
                    href={project.contact}
                    className="inline-flex items-center justify-center gap-3 w-full py-3 mt-4 text-black font-semibold bg-[#16f2b3] rounded-xl hover:bg-[#11c9a6] transition-all duration-300"
                >
                    <FaPhone /> Contact to Buy
                </a>
            </div>
        </div>
    );
};

export default ProjectsForSale;
