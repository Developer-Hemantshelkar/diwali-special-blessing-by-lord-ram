"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart, Compass, Volume2, X, ArrowRight } from "lucide-react";
import { audioEngine } from "@/lib/audioEngine";

interface HemantWishesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBlessing: () => void;
  onExploreCharacters: () => void;
}

export default function HemantWishesModal({
  isOpen,
  onClose,
  onOpenBlessing,
  onExploreCharacters,
}: HemantWishesModalProps) {
  const handleStartMusic = () => {
    audioEngine.start();
    audioEngine.playTempleBell();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl border border-amber-500/30 bg-gradient-to-b from-stone-900 via-stone-950 to-black p-4 sm:p-8 text-stone-100 shadow-2xl shadow-amber-900/40"
          >
            {/* Sacred Glowing Aura in Top Corner */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl" />

            {/* Close Button with 44x44px Touch Target */}
            <button
              onClick={onClose}
              className="absolute right-2.5 top-2.5 sm:right-4 sm:top-4 flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full text-stone-400 hover:bg-stone-800 hover:text-stone-100 active:scale-95 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Sacred Diya / Lotus Icon Header */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4 pr-10">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-inner shrink-0">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-amber-400/90 font-serif">
                  Auspicious Welcome
                </p>
                <h3 className="text-lg sm:text-2xl font-bold font-serif text-amber-100 leading-tight">
                  Warm Wishes from Hemant Shelkar
                </h3>
              </div>
            </div>

            {/* Hairline Divider */}
            <div className="my-3 sm:my-4 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            {/* Personal Warm Message */}
            <div className="space-y-3 text-xs sm:text-base text-stone-300 leading-relaxed font-sans">
              <p className="font-serif italic text-amber-200/95 text-base sm:text-lg leading-snug">
                &ldquo;सादर जय श्री राम — Wishing you peace, resilience, and boundless grace.&rdquo;
              </p>
              <p>
                Namaste! I am <strong className="text-amber-300 font-semibold">Hemant Shelkar</strong>. It is my greatest honor to welcome you to this immersive modern homage to the eternal epic, the <span className="text-amber-200">Ramayana</span>.
              </p>
              <p className="text-stone-300/90">
                In an era of relentless hustle and uncertainty, the Ramayana is a living compass of moral fortitude, selfless service, and enduring love. Every character carries a profound life lesson for our daily challenges.
              </p>
              <p className="text-amber-100/95 bg-amber-950/40 border border-amber-500/20 rounded-xl p-3 text-xs sm:text-sm">
                I have prepared a <strong className="text-amber-300">Personalized Blessing Sanctuary from Lord Rama</strong> especially for you. Enter your name and life aspiration to receive sacred shlokas and guidance for your personal journey.
              </p>
            </div>

            {/* Action Buttons (Mobile Stacked Alignment) */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenBlessing();
                  handleStartMusic();
                }}
                className="w-full flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3.5 min-h-[48px] text-xs sm:text-sm font-semibold font-serif text-stone-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Receive Lord Rama&apos;s Blessing</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onExploreCharacters();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-stone-700 bg-stone-900/80 px-4 py-3.5 min-h-[48px] text-xs sm:text-sm font-medium font-serif text-stone-200 hover:bg-stone-800 hover:text-amber-300 active:scale-[0.98] transition-colors cursor-pointer"
              >
                <Compass className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Explore Life Lessons</span>
              </button>
            </div>

            {/* Music Hint Footnote */}
            <div className="mt-4 pt-3 border-t border-stone-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-stone-400">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Heart className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                <span>Curated with reverence by Hemant Shelkar</span>
              </div>
              <button
                onClick={handleStartMusic}
                className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors py-1 cursor-pointer text-[11px] sm:text-xs"
              >
                <Volume2 className="h-3.5 w-3.5" />
                <span>Enable Soothing Ambiance</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
