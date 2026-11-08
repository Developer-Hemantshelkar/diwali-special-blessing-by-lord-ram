"use client";

import React from "react";
import { Linkedin, Github, Twitter, Mail, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-amber-500/20 text-stone-300 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-64 w-[600px] rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-10 border-b border-stone-800">
          {/* Brand & Dedication */}
          <div className="md:col-span-5 space-y-3.5">
            <h3 className="text-xl font-bold font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500">
              RAMAYANA
            </h3>
            <p className="text-xs text-stone-400 font-sans leading-relaxed max-w-sm">
              An interactive digital tribute to Maharshi Valmiki&apos;s timeless epic. Dedicated to sharing immortal virtues of Dharma, truth, loyalty, and selfless humility with seekers across the globe.
            </p>
            <div className="p-3 sm:p-3.5 rounded-xl border border-amber-500/20 bg-stone-950/80 text-xs font-serif text-amber-200/90 italic leading-relaxed">
              &ldquo;मङ्गलं कोसलालेन्द्राय महनीयगुणाब्धये । चक्रवर्तितनूजाय सार्वभौमाय मङ्गलम् ॥&rdquo;
            </div>
          </div>

          {/* Life Lessons Overview */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-serif font-semibold uppercase tracking-wider text-amber-300">
              Immortal Archetypes
            </h4>
            <ul className="text-xs space-y-1.5 text-stone-400 font-serif">
              <li>Lord Rama — Dharma & Integrity</li>
              <li>Mata Sita — Dignity & Fortitude</li>
              <li>Lord Hanuman — Ego-less Devotion</li>
              <li>Lakshmana — Vigilant Brotherhood</li>
              <li>Bharata — Detached Stewardship</li>
              <li>Vibhishana — Moral Courage</li>
              <li>Jatayu — Supreme Valor</li>
              <li>Ravana — The Cautionary Ego</li>
            </ul>
          </div>

          {/* Developer Attribution & Professional Profiles */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <p className="text-[11px] sm:text-xs font-serif font-semibold uppercase tracking-widest text-amber-400">
                Created & Curated By
              </p>
              <h4 className="text-lg sm:text-xl font-bold font-serif text-amber-100 mt-0.5">
                Hemant Shelkar
              </h4>
              <p className="text-xs text-stone-400 mt-1 font-sans leading-relaxed">
                Software Engineer & Digital Experience Architect. Built with profound reverence, modern web VFX, and love for timeless wisdom.
              </p>
            </div>

            {/* Social Media Links with Touch Friendly Targets (min 44px) */}
            <div>
              <span className="text-[11px] font-sans uppercase tracking-wider text-stone-400 block mb-2 font-medium">
                Connect on Professional Profiles
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <a
                  href="https://www.linkedin.com/in/hemant-shelkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-300 hover:border-amber-400 hover:bg-stone-800 active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Hemant Shelkar LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href="https://github.com/hemantshelkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-300 hover:border-amber-400 hover:bg-stone-800 active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Hemant Shelkar GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href="https://x.com/hemantshelkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-300 hover:border-amber-400 hover:bg-stone-800 active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Hemant Shelkar Twitter / X Profile"
                >
                  <Twitter className="h-4 w-4" />
                </a>

                <a
                  href="mailto:hemantshelkar799@gmail.com"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-300 hover:border-amber-400 hover:bg-stone-800 active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Email Hemant Shelkar"
                >
                  <Mail className="h-4 w-4" />
                </a>

                <a
                  href="https://hemantshelkar.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-300 hover:border-amber-400 hover:bg-stone-800 active:scale-95 transition-all shadow-sm cursor-pointer"
                  aria-label="Hemant Shelkar Portfolio Website"
                >
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Mobile Friendly Stacking) */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-stone-400 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            <span>Developed with reverence by</span>
            <strong className="text-amber-300 font-serif">Hemant Shelkar</strong>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="block sm:inline">Valmiki Ramayana Verses</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-stone-400">© 2026 Ramayana Digital</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-stone-400 hover:text-amber-300 active:scale-95 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
