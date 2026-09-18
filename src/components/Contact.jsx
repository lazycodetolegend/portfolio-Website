import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "custom-app",
    budget: "300-1k",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(null);

  const scopeLabels = {
    "custom-app": "Custom Full Stack Web App",
    "ecommerce": "E-Commerce / Industrial ERP",
    "ai-integration": "AI Pipeline & Speech Tech",
    "bug-fixes": "Bug Fixes / Improvements to Existing Site",
  };

  const budgetLabels = {
    "under-300": "Under $300 (Small task / quick fix)",
    "300-1k": "$300 - $1,000 (Business website / landing page)",
    "1k-3k": "$1,000 - $3,000 (Full stack web app)",
    "discuss": "Let's discuss",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scopeText = scopeLabels[formData.scope] || formData.scope;
    const budgetText = budgetLabels[formData.budget] || formData.budget;

    // 1. Build WhatsApp message and URL
    const whatsappMessage =
      `*New Project Enquiry - Sayam Mutha*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Work Email:* ${formData.email}\n` +
      `🎯 *Project Scope:* ${scopeText}\n` +
      `💰 *Budget Bracket:* ${budgetText}\n\n` +
      `📝 *Project Details & Goals:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/918999543058?text=${encodeURIComponent(whatsappMessage)}`;

    // 2. Build Mailto link
    const mailSubject = `New Project Brief from ${formData.name} (${scopeText})`;
    const mailBody =
      `Hi Sayam,\n\nI submitted a new project brief via your portfolio:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Work Email: ${formData.email}\n` +
      `• Project Scope: ${scopeText}\n` +
      `• Budget Bracket: ${budgetText}\n\n` +
      `Project Details & Goals:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`;

    const mailtoUrl = `mailto:sayamutha@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    setLastSubmission({
      whatsappUrl,
      mailtoUrl,
    });

    // 3. Send email in background to sayamutha@gmail.com via AJAX form endpoint
    try {
      await fetch("https://formsubmit.co/ajax/sayamutha@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: mailSubject,
          name: formData.name,
          email: formData.email,
          scope: scopeText,
          budget: budgetText,
          message: formData.message,
        }),
      });
    } catch (err) {
      console.log("Background email submission handled:", err);
    }

    // 4. Open WhatsApp directly in new tab with the prefilled message
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      scope: "custom-app",
      budget: "300-1k",
      message: "",
    });
  };

  return (
    <section id="contact" className="w-full py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-container-high text-primary font-code text-xs font-semibold tracking-wider">
            <Mail className="w-4 h-4" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
            Let's Build Something Exceptional Together
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant">
            Whether you need an MVP built from scratch, an existing enterprise portal overhauled, or a dedicated MERN contractor.
          </p>
        </motion.div>

        {/* 2-Column Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Channels & Reachability */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3 sm:space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${personal.email}`}
                className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/90 hover:bg-surface-container border border-white/5 hover:border-primary/40 flex items-center gap-4 shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-variant text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-[#003731] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-code text-xs text-outline uppercase tracking-wider">Direct Email</p>
                  <p className="font-headline text-sm sm:text-base font-bold text-on-surface truncate group-hover:text-primary transition-colors">
                    {personal.email}
                  </p>
                </div>
              </a>

              {/* Phone / WhatsApp Card */}
              <a
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/90 hover:bg-surface-container border border-white/5 hover:border-secondary/40 flex items-center gap-4 shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-variant text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-[#001f26] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-code text-xs text-outline uppercase tracking-wider">Phone / WhatsApp (IST)</p>
                  <p className="font-headline text-sm sm:text-base font-bold text-on-surface truncate group-hover:text-secondary transition-colors">
                    {personal.phone}
                  </p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/90 hover:bg-surface-container border border-white/5 hover:border-tertiary/40 flex items-center gap-4 shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-variant text-tertiary flex items-center justify-center shrink-0 group-hover:bg-tertiary group-hover:text-[#00354a] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-code text-xs text-outline uppercase tracking-wider">Professional Network</p>
                  <p className="font-headline text-sm sm:text-base font-bold text-on-surface truncate group-hover:text-tertiary transition-colors">
                    www.linkedin.com/in/sayam-mutha-b697b0434
                  </p>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/90 hover:bg-surface-container border border-white/5 hover:border-primary-fixed/40 flex items-center gap-4 shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-variant text-primary-fixed flex items-center justify-center shrink-0 group-hover:bg-primary-fixed group-hover:text-[#00201c] transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-code text-xs text-outline uppercase tracking-wider">Public Repositories</p>
                  <p className="font-headline text-sm sm:text-base font-bold text-on-surface truncate group-hover:text-primary-fixed transition-colors">
                    github.com/lazycodetolegend
                  </p>
                </div>
              </a>
            </div>

            {/* Timezone & Availability Callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-container-high/90 border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Clock className="w-4 h-4" />
                <span className="font-headline text-xs sm:text-sm font-bold text-on-surface">Timezone &amp; Availability</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {personal.timezoneNote}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contract Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-low/90 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                  Send a Project Brief
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-code text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  <span>24h Response</span>
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="font-body text-xs sm:text-sm font-medium text-on-surface" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm font-body text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="font-body text-xs sm:text-sm font-medium text-on-surface" htmlFor="contact-email">
                      Work Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm font-body text-xs sm:text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="font-body text-xs sm:text-sm font-medium text-on-surface" htmlFor="contact-type">
                      Project Scope
                    </label>
                    <select
                      id="contact-type"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm font-body text-xs sm:text-sm transition-colors"
                    >
                      <option value="custom-app">Custom Full Stack Web App</option>
                      <option value="ecommerce">E-Commerce / Industrial ERP</option>
                      <option value="ai-integration">AI Pipeline &amp; Speech Tech</option>
                      <option value="bug-fixes">Bug Fixes / Improvements to Existing Site</option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-1.5">
                    <label className="font-body text-xs sm:text-sm font-medium text-on-surface" htmlFor="contact-budget">
                      Budget Bracket
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm font-body text-xs sm:text-sm transition-colors"
                    >
                      <option value="under-300">Under $300 (Small task / quick fix)</option>
                      <option value="300-1k">$300 - $1,000 (Business website / landing page)</option>
                      <option value="1k-3k">$1,000 - $3,000 (Full stack web app)</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-body text-xs sm:text-sm font-medium text-on-surface" htmlFor="contact-message">
                    Project Details &amp; Goals
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline your timeline, deliverables, and requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm font-body text-xs sm:text-sm transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-surface font-headline text-sm sm:text-base font-bold transition-all duration-200 transform hover:opacity-95 shadow-[0_4px_24px_rgba(20,184,166,0.35)] disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Dispatching Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Success Notification Banner */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 sm:p-5 rounded-2xl bg-surface-container-high border border-primary/40 text-on-surface space-y-3 font-body text-xs sm:text-sm shadow-xl"
                  >
                    <div className="flex items-start gap-3 text-primary">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-headline font-bold text-sm sm:text-base text-primary">
                          Project Brief Dispatched!
                        </p>
                        <p className="text-on-surface-variant text-xs sm:text-sm mt-1 leading-relaxed">
                          WhatsApp has been launched with your brief prefilled for <strong className="text-on-surface">8999543058</strong>, and an email inquiry was sent to <strong className="text-on-surface">sayamutha@gmail.com</strong>.
                        </p>
                      </div>
                    </div>

                    {lastSubmission && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                        <a
                          href={lastSubmission.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/15 text-secondary border border-secondary/30 font-code text-xs font-semibold hover:bg-secondary/25 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Chat on WhatsApp</span>
                        </a>
                        <a
                          href={lastSubmission.mailtoUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/15 text-primary border border-primary/30 font-code text-xs font-semibold hover:bg-primary/25 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Email App</span>
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
