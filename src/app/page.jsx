'use client';

import Navbar from "@/components/Navbar";
import HomeSection from "@/Home/page";
import AboutSection from "@/About/page";
import SkillsSection from "@/Skills/page";
import ProjectsSection from "@/Projects/page";
import ContactSection from "@/Contact/page";
import ProjectCollab from "@/Action/page";
import ReviewsSection from "@/Reviews/page";
import HistoricalBackground from "@/History/HistoricalBg";
import CustomCursor from "@/Custom/customCursor";
import "./globals.css";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
        {/*Custome cursor */}
        <CustomCursor/>

      <Navbar />

      <section id="home">
        <HomeSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section >
        <HistoricalBackground/>
       </section>
       

      <section id="skills">
        <SkillsSection />
      </section>

       <section >
        <ProjectCollab/>
       </section>
       
      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="reviews">
        <ReviewsSection/>
      </section>

       
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
