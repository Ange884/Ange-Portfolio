"use client";

import { motion } from "framer-motion";

export default function ShootingStarsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-950 z-0">
      {/* Static stars */}
      <div className="w-full h-full bg-[radial-gradient(white,transparent)] [background-size:2px_2px] opacity-50" />

      {/* Shooting stars */}
      <motion.div
        className="absolute top-0 left-0 w-0.5 h-16 bg-white opacity-80"
        animate={{ x: ["0vw", "100vw"], y: ["0vh", "50vh"], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
      />
      <motion.div
        className="absolute top-0 left-20 w-0.5 h-12 bg-white opacity-70"
        animate={{ x: ["0vw", "100vw"], y: ["0vh", "60vh"], opacity: [1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
      />
      {/* You can add more shooting stars with different positions, durations, and sizes */}
    </div>
  );
}
