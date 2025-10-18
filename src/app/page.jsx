'use client';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Home  from "@/Home/page";

export default function Page() {
  return (
    <>
      <Navbar />
        <Home/>
    </>
  );
}