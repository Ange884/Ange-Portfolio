'use client';

import Navbar from "@/components/Navbar";
import HomeSection from "@/Home/page";
import AboutSection from "@/About/page";
import SkillsSection from "@/Skills/page";
import ProjectsSection from "@/Projects/page";
import ContactSection from "@/Contact/page";
import ProjectCollab from "@/Action/page";
import "./globals.css";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <section id="home">
        <HomeSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>
       
       <section >
        <ProjectCollab/>
       </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
