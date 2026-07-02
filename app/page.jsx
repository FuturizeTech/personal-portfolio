"use client";

import { useEffect } from "react";

import TagCloudComponent from "./components/TagCloudComponent";
import HeroSection from "./components/homepage/hero-section";
import Experience from "./components/homepage/experience";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";
import AboutSection from "./components/homepage/about";

export default function Home() {
  // Prevent hydration issues from client-only animation/lottie components
  useEffect(() => {}, []);

  return (
    <div suppressHydrationWarning className="pt-24 pb-12 md:pb-16 lg:pb-20">
      <TagCloudComponent />
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}

