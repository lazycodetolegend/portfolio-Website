import React from "react";
import { motion } from "framer-motion";
import { DollarSign, CheckCircle2, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Pricing = () => {
  const { pricing } = portfolioData;

  const selectScopeAndScroll = (scopeVal) => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      const selectEl = document.getElementById("contact-type");
      if (selectEl) {
        selectEl.value = scopeVal;
        selectEl.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  };

  return (
    <section id="pricing" className="w-full py-20 lg:py-28 relative">
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
            <DollarSign className="w-4 h-4" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
            Clear Starting Ranges
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant">
            Predictable starting rates for businesses and startups. No hidden fees or bloated agency overhead.
          </p>
        </motion.div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricing.tiers.map((tier, idx) => {
            const isPopular = tier.popular;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? "bg-surface-container/95 border-2 border-primary/50 shadow-[0_20px_45px_rgba(20,184,166,0.18)]"
                    : "bg-surface-container-low/90 border border-white/10 hover:border-white/20 shadow-md"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-[#003731] font-headline text-xs font-extrabold flex items-center gap-1 shadow-md uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Requested</span>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Tier Title and Price */}
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface">
                      {tier.name}
                    </h3>
                    <div className="mt-3">
                      <span className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface">
                        {tier.price}
                      </span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-2.5 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="pt-4 border-t border-white/5 space-y-2.5">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPopular ? "text-primary" : "text-secondary"
                          }`}
                        />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => selectScopeAndScroll(tier.projectScope)}
                    className={`w-full py-3 px-4 rounded-xl font-headline text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      isPopular
                        ? "bg-gradient-to-r from-primary to-secondary text-surface shadow-[0_4px_20px_rgba(20,184,166,0.35)] hover:opacity-95"
                        : "bg-surface-container-high text-on-surface hover:bg-surface-bright hover:text-primary border border-white/10"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Scope Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-4 sm:p-5 rounded-xl bg-surface-container-lowest/80 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2.5 text-outline">
            <HelpCircle className="w-4 h-4 shrink-0 text-primary" />
            <p className="font-code text-xs text-on-surface-variant">
              <span className="text-on-surface font-semibold">Scope Note:</span> {pricing.note}
            </p>
          </div>

          <a
            href="#contact"
            className="font-code text-xs text-primary hover:text-primary-fixed-dim whitespace-nowrap font-medium transition-colors"
          >
            Get a tailored quote &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};
