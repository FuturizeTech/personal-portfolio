'use client';
import dynamic from "next/dynamic";
import { personalData } from "@/utils/data/personal-data";
import { useEffect, useState } from "react";

const TagCloudComponent = dynamic(() => import("./components/TagCloudComponent"), { ssr: false });
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data.filter(d => d?.cover_image).sort(() => Math.random() - 0.5);
}

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData().then(setBlogs).catch(console.error);
  }, []);

  return (
    <main className="pt-24">
      <div suppressHydrationWarning>
         <TagCloudComponent />
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ContactSection />
      </div>
    </main>
  );
}