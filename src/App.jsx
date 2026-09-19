import React from "react";
import { AmbientBackground } from "./components/AmbientBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { HowIWork } from "./components/HowIWork";
import { Pricing } from "./components/Pricing";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface text-on-surface selection:bg-primary/20 selection:text-primary">
      {/* Background Ambience (Zero performance hit, CSS/Framer blend) */}
      <AmbientBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <About />
        <Services />
        <Projects />
        <HowIWork />
        <Pricing />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
