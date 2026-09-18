import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#060e20] py-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Side Tagline */}
        <div className="flex flex-col gap-1">
          <p className="font-body text-xs sm:text-sm text-on-surface-variant">
            &copy; {new Date().getFullYear()} {personal.name} &bull; Full Stack MERN Engineer. All rights reserved.
          </p>
          <p className="font-code text-xs text-outline">
            Crafted with precision in Maharashtra, India
          </p>
        </div>

        {/* Center/Right Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-code text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-code text-xs text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={personal.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-code text-xs text-on-surface-variant hover:text-tertiary transition-colors flex items-center gap-1.5"
          >
            <Twitter className="w-4 h-4" />
            <span>Twitter/X</span>
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-bright transition-colors ml-2"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
