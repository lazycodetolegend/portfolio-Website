import React from "react";
import { motion } from "framer-motion";
import { Globe, Layers, Wrench, Server, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Services = () => {
  const { services } = portfolioData;

  const iconMap = {
    Globe: Globe,
    Layers: Layers,
    Wrench: Wrench,
    Server: Server,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="w-full py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-container-high text-primary font-code text-xs font-semibold tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>SERVICES &amp; SOLUTIONS</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
              What You Can Hire Me For
            </h2>
            <p className="font-body text-sm sm:text-base text-on-surface-variant">
              From high-converting responsive business websites to custom full-stack web applications and internal tools.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-code text-primary hover:text-primary-fixed transition-colors group self-start md:self-auto"
          >
            <span>Discuss your custom requirements</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* 4 Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 rounded-2xl bg-surface-container-low/90 border border-white/10 hover:border-primary/40 shadow-lg hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.7),0_0_24px_-2px_rgba(20,184,166,0.15)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent}`} />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#003731] transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-code text-xs text-outline/60 font-medium">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature / Technology Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-surface-container-high border border-white/5 text-on-surface-variant text-xs font-code flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-primary/80" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={`#contact?scope=${service.scopeValue}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const contactEl = document.getElementById("contact");
                      if (contactEl) {
                        contactEl.scrollIntoView({ behavior: "smooth" });
                        const selectEl = document.getElementById("contact-type");
                        if (selectEl) {
                          selectEl.value = service.scopeValue;
                          selectEl.dispatchEvent(new Event("change", { bubbles: true }));
                        }
                      }
                    }}
                    className="inline-flex items-center gap-1.5 font-code text-xs font-semibold text-primary hover:text-primary-fixed-dim transition-colors"
                  >
                    <span>Start with this service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="font-code text-[11px] text-outline">
                    Fixed or Milestone
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
