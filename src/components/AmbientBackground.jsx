import React from "react";
import { motion } from "framer-motion";

export const AmbientBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Deep gradient background mesh */}
      <div className="absolute inset-0 bg-[#0b1326]" />

      {/* Subtle glowing animated orbs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[34rem] h-[34rem] bg-[#14b8a6]/10 rounded-full blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[35%] -right-40 w-[36rem] h-[36rem] bg-[#4cd7f6]/10 rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-10 left-[15%] w-[38rem] h-[38rem] bg-[#7bd0ff]/5 rounded-full blur-[160px]"
      />

      {/* Subtle micro grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `radial-gradient(rgba(218, 226, 253, 0.8) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};
