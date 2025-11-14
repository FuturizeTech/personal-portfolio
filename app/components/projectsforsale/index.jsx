// @flow strict
'use client';
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

const saleProjects = [
    {
        id: 1,
        name: "Portfolio Template",
        description: "A modern, responsive portfolio template built with Next.js and Tailwind CSS.",
        price: "$99",
        image: "/projects/project1.jpg",
        contact: "tel:+911234567890"
    },
    {
        id: 2,
        name: "E-Commerce Website",
        description: "A fully functional e-commerce website with cart, checkout and payment integration.",
        price: "$199",
        image: "/projects/project2.jpg",
        contact: "tel:+911234567891"
    },
    {
        id: 3,
        name: "Landing Page Pack",
        description: "5 different landing page templates with animations and responsive layout.",
        price: "$79",
        image: "/projects/project3.jpg",
        contact: "tel:+911234567892"
    },
];

const ProjectsForSale = () => {
    return (
        
        <div id="projects-for-sale" className="min-h-screen bg-[#080011] py-12 px-6 lg:px-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-center text-[#16f2b3] mb-12">
                Projects For Sale
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {saleProjects.map((project) => (
                    <div
                        key={project.id}
                        className="relative group bg-gradient-to-tr from-[#0d1224] to-[#0a0d37] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                    >
                        {/* Project Image */}
                        <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={500}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Project Info */}
                        <div className="p-6 space-y-3">
                            <h2 className="text-xl lg:text-2xl font-semibold text-[#EFF3F4]">
                                {project.name}
                            </h2>
                            <p className="text-gray-300 text-sm lg:text-base">
                                {project.description}
                            </p>
                            <p className="text-[#16f2b3] font-bold text-lg lg:text-xl">
                                Price: {project.price}
                            </p>

                            {/* Call-to-action button */}
                            <a
                                href={project.contact}
                                className="inline-flex items-center justify-center gap-2 w-full py-3 mt-4 text-white font-semibold bg-[#16f2b3] rounded-lg hover:bg-[#11c9a6] transition-all duration-300"
                            >
                                <FaPhone /> Call to Buy
                            </a>
                        </div>

                        {/* Decorative overlay effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#00000080] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsForSale;
