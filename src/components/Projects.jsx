import React from "react";
import { motion } from "framer-motion";
import { Code2, CheckCircle2, ExternalLink, Github } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Projects = () => {
  const { projects } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="projects" className="w-full py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-container-high text-secondary font-code text-xs font-semibold tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>FEATURED PROJECTS</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
              Production Systems &amp; Real-World Solutions
            </h2>

          </motion.div>

        </div>

        {/* 2 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl bg-surface-container-low/90 border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                idx === 0
                  ? "hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(20,184,166,0.2)]"
                  : "hover:border-secondary/40 hover:shadow-[0_20px_45px_rgba(76,215,246,0.2)]"
              } group`}
            >
              <div className="p-6 sm:p-8 flex flex-col space-y-5">
                {/* Category and Status Badge */}
                <div className="flex items-center justify-between">
                  <span className={`font-code text-xs px-3 py-1 rounded-full uppercase font-medium tracking-wide ${project.badgeColor}`}>
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 font-code text-xs text-on-surface-variant">
                    <span className={`w-2 h-2 rounded-full ${project.statusDotColor} animate-pulse`}></span>
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Project Title & Intro */}
                <div>
                  <h3 className={`font-headline text-xl sm:text-2xl font-bold text-on-surface transition-colors ${
                    idx === 0 ? "group-hover:text-primary" : "group-hover:text-secondary"
                  }`}>
                    {project.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Visual Mockup Image */}
                <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden shadow-inner bg-surface-container-lowest border border-white/5">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent opacity-85"></div>
                  
                  {/* Floating Metric Badges over Mockup */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-code px-3 py-2 rounded-lg bg-[#060e20]/85 border border-white/10 backdrop-blur-md">
                    <span className="text-on-surface font-medium truncate mr-2">
                      {project.edgeBadge}
                    </span>
                    <span className={idx === 0 ? "text-primary font-semibold shrink-0" : "text-secondary font-semibold shrink-0"}>
                      {project.statBadge}
                    </span>
                  </div>
                </div>

                {/* Core Technical Highlights */}
                <div className="space-y-2 pt-1">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${idx === 0 ? "text-primary" : "text-secondary"}`} />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <motion.div
                  variants={tagContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {project.techStack.map((tech, tIdx) => (
                    <motion.span
                      key={tIdx}
                      variants={tagVariants}
                      className="px-3 py-1 rounded-md bg-surface-container-high/90 border border-white/5 text-on-surface text-xs font-code flex items-center gap-1.5"
                    >
                      {tech.dot && <span className={`w-1.5 h-1.5 rounded-full ${tech.dot}`}></span>}
                      {tech.name}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="p-6 sm:p-8 pt-0 flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg font-headline text-xs sm:text-sm font-bold transition-all duration-200 shadow-md ${
                    idx === 0
                      ? "bg-primary text-[#003731] hover:bg-primary-fixed-dim"
                      : "bg-secondary text-[#001f26] hover:bg-secondary-fixed-dim"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{idx === 0 ? "Live Application" : "Test Oratio Live"}</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-surface-container-high/90 text-on-surface font-headline text-xs sm:text-sm font-semibold border border-white/5 hover:border-white/20 hover:bg-surface-bright transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
