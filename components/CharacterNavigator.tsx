"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { CHARACTERS } from "@/lib/charactersData";
import { audioEngine } from "@/lib/audioEngine";
import { BookOpen, Compass, ChevronLeft, ChevronRight, Award, ShieldCheck, HelpCircle, Bell } from "lucide-react";

interface CharacterNavigatorProps {
  onTriggerFlowerShower: () => void;
}

export default function CharacterNavigator({ onTriggerFlowerShower }: CharacterNavigatorProps) {
  const [selectedCharId, setSelectedCharId] = useState<string>("rama");

  const currentIndex = CHARACTERS.findIndex((c) => c.id === selectedCharId);
  const character = CHARACTERS[currentIndex] || CHARACTERS[0];

  const handleSelectCharacter = (id: string) => {
    setSelectedCharId(id);
    audioEngine.playTempleBell();
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % CHARACTERS.length;
    setSelectedCharId(CHARACTERS[nextIdx].id);
    audioEngine.playTempleBell();
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + CHARACTERS.length) % CHARACTERS.length;
    setSelectedCharId(CHARACTERS[prevIdx].id);
    audioEngine.playTempleBell();
  };

  return (
    <section id="characters" className="relative py-14 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 bg-stone-950 overflow-hidden">
      {/* Background Subtle Radiance */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-amber-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-orange-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] sm:text-xs font-serif tracking-widest uppercase mb-3">
            <Compass className="h-3.5 w-3.5" />
            <span>Character Navigation System</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-amber-100 tracking-tight">
            The Living Compass of the Ramayana
          </h2>
          <p className="mt-3 text-xs sm:text-base text-stone-300 font-sans leading-relaxed">
            Every character in this sacred epic represents an eternal pillar of human nature. Navigate through the immortal personas to absorb the foundational life lesson each figure symbolizes.
          </p>
        </div>

        {/* Character Quick Selection Strip (Mobile Touch Optimized Carousel) */}
        <div className="mb-6 sm:mb-10 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-amber-500/30">
          <div className="flex items-center justify-start lg:justify-center gap-2 min-w-max px-2">
            {CHARACTERS.map((char) => {
              const isSelected = char.id === selectedCharId;
              return (
                <button
                  key={char.id}
                  onClick={() => handleSelectCharacter(char.id)}
                  className={`flex items-center gap-2 px-3 sm:px-3.5 py-2 min-h-[44px] rounded-xl border text-xs sm:text-sm font-serif transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95 ${
                    isSelected
                      ? "border-amber-400 bg-gradient-to-r from-amber-500/25 to-amber-600/20 text-amber-100 shadow-md shadow-amber-900/30 ring-1 ring-amber-400/40"
                      : "border-stone-800 bg-stone-900/70 text-stone-400 hover:border-stone-700 hover:text-stone-200"
                  }`}
                >
                  <div className="relative h-6 w-6 rounded-full overflow-hidden border border-amber-500/40 shrink-0">
                    <Image
                      src={char.image}
                      alt={char.name}
                      fill
                      className="object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="font-semibold">{char.name}</span>
                  <span className="text-[10px] text-amber-400/70 font-sans hidden sm:inline">({char.sanskritName})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Character Detail Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={character.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl sm:rounded-3xl border border-amber-500/30 bg-gradient-to-b from-stone-900/95 via-stone-950 to-stone-900/95 p-4 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl shadow-black/80"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Left Column: Visual Portrait & Symbolism Badge */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[420px] sm:max-h-none w-full max-w-md mx-auto rounded-xl sm:rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-stone-950 group">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                  {/* Character Info Card Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-stone-100">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/25 border border-amber-400/40 text-amber-300 text-[10px] sm:text-[11px] font-serif uppercase tracking-wider mb-1.5 backdrop-blur-sm">
                      {character.role}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-bold font-serif text-amber-100 leading-tight">
                      {character.name}
                    </h3>
                    <p className="text-xs text-amber-200/90 font-serif italic mt-0.5">
                      {character.epithet}
                    </p>
                  </div>
                </div>

                {/* Symbolism Banner */}
                <div className="rounded-xl border border-amber-500/25 bg-amber-950/25 p-3.5 sm:p-4 text-xs sm:text-sm text-stone-200">
                  <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-400 font-serif mb-1">
                    What {character.name} Symbolizes:
                  </span>
                  <p className="font-serif italic text-amber-100 font-medium leading-snug">
                    &ldquo;{character.symbolizes}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: In-Depth Life Lesson & Modern Wisdom */}
              <div className="lg:col-span-7 space-y-5">
                {/* Main Text-Based Life Lesson Callout */}
                <div className="rounded-xl sm:rounded-2xl border-l-4 border-l-amber-400 border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-stone-900 to-stone-900 p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 font-serif mb-1.5">
                    <BookOpen className="h-4 w-4 shrink-0" />
                    <span>Core Life Lesson for Humanity</span>
                  </div>
                  <p className="text-sm sm:text-xl font-serif text-amber-100 font-semibold leading-relaxed">
                    &ldquo;{character.coreLesson}&rdquo;
                  </p>
                </div>

                {/* Philosophical Teaching & Modern Application */}
                <div className="space-y-3.5 text-xs sm:text-base text-stone-300 font-sans leading-relaxed">
                  <div>
                    <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300 font-serif mb-1 flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      The Deep Epic Principle
                    </h4>
                    <p className="text-stone-300">{character.inDepthTeaching}</p>
                  </div>

                  <div>
                    <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300 font-serif mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      Practical Application in Modern Life
                    </h4>
                    <p className="text-stone-300/90">{character.modernApplication}</p>
                  </div>
                </div>

                {/* Sacred Sanskrit Shloka */}
                <div className="rounded-xl border border-stone-800 bg-stone-950/70 p-3.5 sm:p-5">
                  <p className="text-xs sm:text-base font-serif text-amber-200 font-medium whitespace-pre-line leading-relaxed break-words">
                    {character.shloka.sanskrit}
                  </p>
                  <p className="text-[11px] sm:text-xs text-amber-300/70 italic font-serif mt-1.5 break-words">
                    {character.shloka.transliteration}
                  </p>
                  <div className="my-2 h-px w-full bg-stone-800" />
                  <p className="text-[11px] sm:text-xs text-stone-400 leading-normal">
                    <strong className="text-stone-300">Meaning:</strong> {character.shloka.meaning}
                  </p>
                </div>

                {/* Virtues Badges */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                  {character.virtues.map((v, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-stone-900 border border-stone-800 text-[11px] sm:text-xs font-serif text-amber-200/90"
                    >
                      {v}
                    </span>
                  ))}
                </div>

                {/* Introspection Question */}
                <div className="rounded-xl border border-amber-500/20 bg-stone-900/60 p-3.5 sm:p-4 flex items-start gap-2.5 sm:gap-3">
                  <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-400 font-serif block">
                      Contemplation for Today
                    </span>
                    <p className="text-xs sm:text-sm text-stone-300 italic font-serif mt-0.5 leading-snug">
                      {character.reflectionQuestion}
                    </p>
                  </div>
                </div>

                {/* Mobile Friendly Navigation Controls */}
                <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl border border-stone-800 bg-stone-900 text-stone-300 text-xs font-medium hover:bg-stone-800 hover:text-amber-200 active:scale-95 transition-all cursor-pointer"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous</span>
                    </button>

                    <button
                      onClick={handleNext}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl border border-stone-800 bg-stone-900 text-stone-300 text-xs font-medium hover:bg-stone-800 hover:text-amber-200 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      audioEngine.playTempleBell();
                      onTriggerFlowerShower();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-serif font-medium text-amber-300 hover:bg-amber-500/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <Bell className="h-3.5 w-3.5 text-amber-400" />
                    <span>Ring Sacred Temple Bell</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
