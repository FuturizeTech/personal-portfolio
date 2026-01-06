// @flow strict
'use client';
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import TiltCard from "@/app/components/helper/TiltCard";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-10 lg:py-20 overflow-hidden">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 opacity-80 animate-pulse"
      />

      {/* Gradient ring glow effect */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl top-20 right-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-3xl bottom-0 left-10"></div>

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10"
        >
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, 👋<br />
            I’m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
              {personalData.name}
            </span>
            <br />
            <span className="text-[#16f2b3]">
              <Typewriter
                options={{
                  strings: [
                    "Laravel Developer",
                    "API Integration Expert",
                    "Backend Specialist",
                    "Node Js Enthusiast",
                    "Full-Stack Developer",
                    "SEO Conscious Coder",
                    "Problem Solver",
                    "Freelancer on a Mission 🚀"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-sm md:text-base max-w-lg">
            I build high-quality Laravel applications with modern APIs,
            secure backends, and lightning-fast performance — helping
            businesses scale efficiently.
          </p>

          {/* Social Icons */}
          <div className="my-10 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-4 md:px-8 py-3 bg-[#0d1224] rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2 hover:gap-3">
                <span>Let’s Work Together</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 md:px-8 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:scale-105"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT CODE BLOCK CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] shadow-xl hover:shadow-pink-500/20 transition-all duration-300"
        >
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          <TiltCard className="class-card-tilt order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">Sarabjeet Singh</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">Laravel</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Yii</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Next js</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Node Js</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MySql</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Supabase</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">AWS</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{'() {'}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                <div><span className="text-gray-400">{`};`}</span></div>
              </code>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
