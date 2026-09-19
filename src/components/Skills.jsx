import React from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Server, GitBranch, Palette, Network } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Skills = () => {
  const { skills } = portfolioData;

  const renderIcon = (type) => {
    switch (type) {
      case "react":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" fill="currentColor" r="2.05"></circle>
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <ellipse rx="11" ry="4.2"></ellipse>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
            </g>
          </svg>
        );
      case "node":
        return <Server className="w-6 h-6" />;
      case "express":
        return <Network className="w-6 h-6" />;
      case "mongo":
        return <Database className="w-6 h-6" />;
      case "tailwind":
        return <Palette className="w-6 h-6" />;
      case "git":
        return <GitBranch className="w-6 h-6" />;
      default:
        return <Terminal className="w-6 h-6" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="w-full bg-[#060e20]/60 py-20 lg:py-28 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-container-high text-primary font-code text-xs font-semibold tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>TECH STACK &amp; CAPABILITIES</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
            Core Technologies I Work With Daily
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant">
            Hand-picked tools honed to build fast, fault-tolerant, modern full-stack web products.
          </p>
        </motion.div>

        {/* Skills Cards Grid (6 Tech Pillars) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-7 rounded-2xl bg-surface-container/90 border border-white/5 shadow-md hover:bg-surface-container-high/90 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${skill.iconBg} ${skill.iconColor}`}
                >
                  {renderIcon(skill.type)}
                </div>
                <span className={`font-code text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wider ${skill.levelColor}`}>
                  {skill.category || skill.level}
                </span>
              </div>

              <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                {skill.desc}
              </p>

              <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                {skill.tags.map((tag, tIdx) => (
                  <React.Fragment key={tIdx}>
                    <span className="text-xs font-code text-outline">{tag}</span>
                    {tIdx < skill.tags.length - 1 && (
                      <span className="text-xs text-outline/40">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
