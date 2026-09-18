import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageSquare, Copy, Check, Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Hero = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(JSON.stringify(personal.terminalProfile, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-36 pb-20 lg:pb-28 flex flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
          {/* Live Status Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high/90 border border-white/10 shadow-md backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="font-code text-xs text-on-surface tracking-tight font-medium">
              {personal.statusBadge}
            </span>
          </motion.div>

          {/* Headline & Designation */}
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="font-code text-xs sm:text-sm text-primary tracking-wider uppercase font-semibold block">
              {personal.role}
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
              Architecting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
                Scalable Code
              </span>{" "}
              &amp; Modern Web Systems.
            </h1>
          </motion.div>

          {/* Subtitle Narrative */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-surface font-headline text-sm sm:text-base font-bold transition-all duration-200 transform hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(20,184,166,0.35)] hover:shadow-[0_8px_32px_rgba(20,184,166,0.5)]"
            >
              <span>Explore Featured Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container-high/90 text-on-surface font-headline text-sm sm:text-base font-semibold border border-white/10 hover:border-primary/40 hover:bg-surface-bright transition-all duration-200 shadow-sm hover:text-primary"
            >
              <MessageSquare className="w-4 h-4 text-primary" />
              <span>Let's Connect</span>
            </a>
          </motion.div>


        </div>

        {/* Right Interactive Code Terminal Visual */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 w-full mt-4 lg:mt-0"
        >
          <div className="rounded-2xl bg-[#060e20]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl transition-all duration-300 hover:border-primary/30">
            {/* Terminal Title Bar */}
            <div className="px-4 py-3 bg-[#131b2e] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#4cd7f6]/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#4fdbc8]/80 inline-block"></span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-outline" />
                <span className="font-code text-xs text-outline tracking-wider">
                  sayam-dev ~ zsh
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-code text-[11px] text-primary px-2 py-0.5 rounded bg-surface-container border border-primary/20">
                  MERN v4.19
                </span>
                <button
                  onClick={copyCode}
                  className="p-1 rounded text-outline hover:text-primary hover:bg-white/5 transition-colors"
                  title="Copy Profile JSON"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Code Snippet Body */}
            <div className="p-4 sm:p-5 font-code text-xs sm:text-[13px] space-y-2 overflow-x-auto leading-relaxed">
              <div className="flex items-center gap-2 text-outline">
                <span className="text-primary font-bold">λ</span>
                <span>cat engineer_profile.json</span>
              </div>
              <pre className="text-on-surface whitespace-pre">
                <code>
                  <span className="text-[#4cd7f6]">{"{"}</span>
                  {"\n"}  <span className="text-[#7bd0ff]">"developer"</span>: <span className="text-[#4fdbc8]">"{personal.terminalProfile.developer}"</span>,
                  {"\n"}  <span className="text-[#7bd0ff]">"location"</span>: <span className="text-[#4fdbc8]">"{personal.terminalProfile.location}"</span>,
                  {"\n"}  <span className="text-[#7bd0ff]">"role"</span>: <span className="text-[#4fdbc8]">"{personal.terminalProfile.role}"</span>,
                  {"\n"}  <span className="text-[#7bd0ff]">"stack"</span>: [
                  {personal.terminalProfile.stack.map((item, i) => (
                    <span key={i}>
                      {"\n"}    <span className="text-[#71f8e4]">"{item}"</span>
                      {i < personal.terminalProfile.stack.length - 1 ? "," : ""}
                    </span>
                  ))}
                  {"\n"}  ],
                  {"\n"}  <span className="text-[#7bd0ff]">"specialties"</span>: {"{"}
                  {"\n"}    <span className="text-[#acedff]">"architecture"</span>: <span className="text-on-surface-variant">"Microservices &amp; REST"</span>,
                  {"\n"}    <span className="text-[#acedff]">"aiPipelines"</span>: <span className="text-on-surface-variant">"Whisper + Montreal FA"</span>,
                  {"\n"}    <span className="text-[#acedff]">"devOps"</span>: <span className="text-on-surface-variant">"Docker, Render, Vercel CI"</span>
                  {"\n"}  {"}"},
                  {"\n"}  <span className="text-[#7bd0ff]">"status"</span>: <span className="text-[#4fdbc8]">"Available for Contract"</span>
                  {"\n"}<span className="text-[#4cd7f6]">{"}"}</span>
                </code>
              </pre>
              <div className="pt-2 flex items-center gap-2 text-primary">
                <span>❯</span>
                <span className="h-4 w-2 bg-primary inline-block animate-pulse"></span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
