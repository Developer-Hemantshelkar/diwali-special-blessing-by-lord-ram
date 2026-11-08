"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { RAMAYANA_CHAPTERS } from "@/lib/blessingsData";
import { audioEngine } from "@/lib/audioEngine";
import { ScrollText, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function InteractiveStoryChapters() {
  const [activeKandaIndex, setActiveKandaIndex] = useState(0);
  const activeKanda = RAMAYANA_CHAPTERS[activeKandaIndex];

  const handleSelectKanda = (idx: number) => {
    setActiveKandaIndex(idx);
    audioEngine.playTempleBell();
  };

  return (
    <section id="chapters" className="relative py-14 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 bg-stone-900/60 overflow-hidden border-t border-b border-amber-500/10">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] sm:text-xs font-serif tracking-widest uppercase mb-3">
            <ScrollText className="h-3.5 w-3.5" />
            <span>Sacred Chronology</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-amber-100 tracking-tight">
            The Seven Kandas of Ramayana
          </h2>
          <p className="mt-3 text-xs sm:text-base text-stone-300 font-sans leading-relaxed">
            Follow the transformative journey across the seven monumental books composed by Adi Kavi Maharshi Valmiki, uncovering the ethical milestones that shaped civilization.
          </p>
        </div>

        {/* Horizontal Timeline Tracker (Mobile Friendly Scroll) */}
        <div className="mb-8 sm:mb-12 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-amber-500/30">
          <div className="flex items-center justify-between min-w-[700px] relative px-4">
            {/* Background connecting rail */}
            <div className="absolute left-6 right-6 top-5 h-0.5 bg-stone-800 -z-0" />

            {RAMAYANA_CHAPTERS.map((item, index) => {
              const isActive = index === activeKandaIndex;
              const isPast = index < activeKandaIndex;

              return (
                <button
                  key={item.kanda}
                  onClick={() => handleSelectKanda(index)}
                  className="flex flex-col items-center group relative z-10 focus:outline-none cursor-pointer active:scale-95"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all font-serif text-xs font-bold ${
                      isActive
                        ? "border-amber-400 bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/30 scale-110"
                        : isPast
                        ? "border-amber-500/50 bg-stone-900 text-amber-300"
                        : "border-stone-700 bg-stone-950 text-stone-500 group-hover:border-stone-500 group-hover:text-stone-300"
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <span
                    className={`mt-2 text-xs font-serif tracking-wide transition-colors ${
                      isActive
                        ? "text-amber-200 font-bold"
                        : "text-stone-400 group-hover:text-stone-200"
                    }`}
                  >
                    {item.kanda.split(" ")[0]}
                  </span>
                  <span className="text-[10px] text-amber-400/70 font-sans">
                    {item.sanskrit}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Kanda Card Presentation */}
        <motion.div
          key={activeKanda.kanda}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl sm:rounded-3xl border border-amber-500/30 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-stone-800 pb-4 sm:pb-6 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-serif text-[11px] sm:text-xs">
                  Book 0{activeKandaIndex + 1} of 07
                </span>
                <span className="text-stone-400 text-xs font-sans tracking-wide">
                  Era: {activeKanda.era}
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold font-serif text-amber-100 mt-2 leading-tight">
                {activeKanda.kanda} — {activeKanda.title}
              </h3>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-lg sm:text-2xl font-serif text-amber-400/90 font-bold">
                {activeKanda.sanskrit}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div>
                <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300 font-serif mb-1.5">
                  The Epic Narrative
                </h4>
                <p className="text-sm sm:text-base lg:text-lg text-stone-300 font-sans leading-relaxed">
                  {activeKanda.summary}
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl border border-amber-500/20 bg-amber-950/20">
                <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300 font-serif mb-1 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                  Cosmic Significance
                </h4>
                <p className="text-xs sm:text-sm text-stone-200 font-serif italic leading-relaxed">
                  {activeKanda.symbolicMilestone}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl sm:rounded-2xl border border-stone-800 bg-stone-900/80 p-4 sm:p-5">
                <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300 font-serif mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  Eternal Lesson of this Chapter
                </h4>
                <p className="text-xs sm:text-sm text-stone-200 font-serif leading-relaxed font-medium">
                  &ldquo;{activeKanda.coreLesson}&rdquo;
                </p>
              </div>

              {/* Mobile Friendly Quick Navigation Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  disabled={activeKandaIndex === 0}
                  onClick={() => handleSelectKanda(activeKandaIndex - 1)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 min-h-[44px] rounded-xl text-xs font-medium border border-stone-800 bg-stone-900 text-stone-300 hover:text-amber-200 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous Kanda</span>
                </button>
                <button
                  disabled={activeKandaIndex === RAMAYANA_CHAPTERS.length - 1}
                  onClick={() => handleSelectKanda(activeKandaIndex + 1)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 min-h-[44px] rounded-xl text-xs font-medium border border-stone-800 bg-stone-900 text-stone-300 hover:text-amber-200 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  <span>Next Kanda</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
