'use client';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Home  from "@/Home/page";
import AboutSection from "@/About/page";
import './globals.css'

export default function Page() {
  return (
    <>
      <Navbar />
        <Home/>
        <AboutSection/>
    </>
  );
}