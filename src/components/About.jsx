import React from "react";
import { motion } from "framer-motion";
import { Fingerprint, Gauge, Layers, Cloud, Rocket, Database, Server } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const About = () => {
  const { about } = portfolioData;

  const iconMap = {
    Layers: Layers,
    Server: Server,
    Cloud: Cloud,
    Zap: Rocket,
    Database: Database,
  };

  return (
    <section id="about" className="w-full bg-[#060e20]/60 py-20 lg:py-28 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start space-y-3 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-container-high text-primary font-code text-xs font-semibold tracking-wider">
            <Fingerprint className="w-4 h-4" />
            <span>{about.badge}</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
            {about.title}
          </h2>
        </motion.div>

        {/* Narrative & Competencies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="font-body text-base sm:text-lg text-on-surface leading-relaxed">
              {about.p1}
            </p>
            <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {about.p2}
            </p>

            {/* Client Impact Callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-container-high/90 border border-white/10 shadow-lg flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-surface flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(20,184,166,0.3)]">
                <Gauge className="w-6 h-6 text-[#003731]" />
              </div>
              <div>
                <h4 className="font-headline text-base sm:text-lg font-bold text-on-surface">
                  {about.impactCallout.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                  {about.impactCallout.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Competency Matrix Bento Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {about.competencies.map((comp, idx) => {
              const IconComponent = iconMap[comp.icon] || Layers;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface-container/90 border border-white/5 shadow-md hover:bg-surface-container-high/90 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <IconComponent className={`w-5 h-5 ${comp.color}`} />
                  </div>
                  <h3 className="font-headline text-sm sm:text-base font-bold text-on-surface">
                    {comp.title}
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
