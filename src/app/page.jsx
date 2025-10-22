'use client';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Home  from "@/Home/page";
import AboutSection from "@/About/page";
import './globals.css'
import ShootingStarsBackground from "@/components/bg";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <ShootingStarsBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Home/>
        <AboutSection/>
      </div>
    </div>
  );
}
