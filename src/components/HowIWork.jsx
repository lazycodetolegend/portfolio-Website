import React from "react";
import { motion } from "framer-motion";
import { GitCommit, Compass, Code, CheckSquare, Rocket } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const HowIWork = () => {
  const { howIWork } = portfolioData;

  const stepIcons = [Compass, Code, CheckSquare, Rocket];

  return (
    <section id="how-it-works" className="w-full py-16 lg:py-20 relative bg-[#060e20]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-container-high text-primary font-code text-xs font-semibold tracking-wider">
            <GitCommit className="w-4 h-4" />
            <span>SIMPLE 4-STEP PROCESS</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            How I Work
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-xl mx-auto">
            A clear, predictable workflow designed for transparency, fast turnaround, and zero surprises.
          </p>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {howIWork.map((item, idx) => {
            const Icon = stepIcons[idx] || GitCommit;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-5 sm:p-6 rounded-xl bg-surface-container-low/80 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-code text-xs font-bold text-primary px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
                      Step {item.step}
                    </span>
                    <Icon className="w-4 h-4 text-outline group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-on-surface leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {item.details && (
                  <p className="font-code text-[11px] text-outline mt-4 pt-3 border-t border-white/5">
                    {item.details}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
