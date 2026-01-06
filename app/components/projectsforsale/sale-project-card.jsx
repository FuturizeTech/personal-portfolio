// @flow strict
import SaleSingleProjects from './sale-single-project';

const SaleProjectCard = ({ project }) => {
    return (
        <div className="relative rounded-xl border border-[#1f223c]
      bg-gradient-to-br from-[#0d1224] to-[#0a0d37]
      shadow-[0_0_30px_rgba(0,0,0,0.35)]
      transition-all duration-500
      hover:border-violet-500
      hover:shadow-[0_0_45px_rgba(139,92,246,0.35)]">

            {/* TOP BAR */}
            <div className="flex">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-pink-500" />
                <div className="h-[1px] w-full bg-gradient-to-r from-pink-500 to-transparent" />
            </div>

            {/* TITLE BAR */}
            <div className="relative px-6 lg:px-10 py-4">
                <div className="flex gap-2 absolute top-1/2 -translate-y-1/2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-orange-400" />
                    <span className="h-3 w-3 rounded-full bg-green-300" />
                </div>

                <p className="text-center text-[#16f2b3] text-lg lg:text-2xl">
                    {project.name}
                </p>
            </div>

            {/* CONTENT */}
            <div className="border-t border-indigo-900">
                <SaleSingleProjects project={project} />
            </div>
        </div>
    );
};

export default SaleProjectCard;
