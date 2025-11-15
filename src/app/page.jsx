'use client';

import Navbar from "@/components/Navbar";
import Home from "@/Home/page";
import AboutSection from "@/About/page";
import "./globals.css";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Home />
      <AboutSection />
    </div>
  );
}
