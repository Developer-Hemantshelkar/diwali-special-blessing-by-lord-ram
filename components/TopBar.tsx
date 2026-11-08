"use client";

import React, { useState } from "react";
import { Sparkles, Heart, Menu, X, Compass, ScrollText, Waves } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TopBarProps {
  onOpenWishes: () => void;
  onScrollToBlessing: () => void;
  onScrollToCharacters: () => void;
  onScrollToChapters: () => void;
  onScrollToSetu: () => void;
}

export default function TopBar({
  onOpenWishes,
  onScrollToBlessing,
  onScrollToCharacters,
  onScrollToChapters,
  onScrollToSetu,
}: TopBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (callback: () => void) => {
    setMobileMenuOpen(false);
    callback();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-amber-500/15">
      <div className="flex items-center justify-between gap-3 sm:gap-8 px-4 sm:px-6 lg:px-12 h-14 sm:h-16">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-base sm:text-xl font-bold font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          RAMAYANA
        </a>

        {/* Zone 2: Desktop 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-serif font-medium text-stone-300">
          <button
            onClick={onScrollToCharacters}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Characters & Lessons
          </button>
          <button
            onClick={onScrollToChapters}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            The 7 Kandas
          </button>
          <button
            onClick={onScrollToSetu}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Ram Setu
          </button>
          <button
            onClick={onScrollToBlessing}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Divine Blessings
          </button>
          <button
            onClick={onOpenWishes}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 text-amber-200/90"
          >
            <Heart className="h-3.5 w-3.5 text-amber-400" />
            <span>Warm Wishes</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action + Mobile Menu Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onScrollToBlessing}
            className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 min-h-[40px] text-xs font-serif font-semibold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-300 hover:to-amber-400 active:scale-95 transition-all shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Seek Rama&apos;s Blessing</span>
            <span className="sm:hidden">Blessing</span>
          </button>

          {/* Mobile Menu Button with 44x44px Touch Target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg border border-stone-800 bg-stone-900/80 text-amber-300 hover:bg-stone-800 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-amber-500/20 bg-stone-950/95 backdrop-blur-xl px-4 py-4 space-y-1 shadow-2xl"
          >
            <button
              onClick={() => handleMobileNavClick(onScrollToCharacters)}
              className="flex w-full items-center gap-3 px-3 py-3 min-h-[48px] rounded-xl text-left text-sm font-serif font-medium text-stone-200 hover:bg-stone-900 hover:text-amber-300 active:bg-amber-500/10 transition-colors"
            >
              <Compass className="h-4 w-4 text-amber-400" />
              <span>Characters & Life Lessons</span>
            </button>

            <button
              onClick={() => handleMobileNavClick(onScrollToChapters)}
              className="flex w-full items-center gap-3 px-3 py-3 min-h-[48px] rounded-xl text-left text-sm font-serif font-medium text-stone-200 hover:bg-stone-900 hover:text-amber-300 active:bg-amber-500/10 transition-colors"
            >
              <ScrollText className="h-4 w-4 text-amber-400" />
              <span>The 7 Kandas (Chronology)</span>
            </button>

            <button
              onClick={() => handleMobileNavClick(onScrollToSetu)}
              className="flex w-full items-center gap-3 px-3 py-3 min-h-[48px] rounded-xl text-left text-sm font-serif font-medium text-stone-200 hover:bg-stone-900 hover:text-amber-300 active:bg-amber-500/10 transition-colors"
            >
              <Waves className="h-4 w-4 text-amber-400" />
              <span>Ram Setu (Floating Stones)</span>
            </button>

            <button
              onClick={() => handleMobileNavClick(onScrollToBlessing)}
              className="flex w-full items-center gap-3 px-3 py-3 min-h-[48px] rounded-xl text-left text-sm font-serif font-medium text-stone-200 hover:bg-stone-900 hover:text-amber-300 active:bg-amber-500/10 transition-colors"
            >
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>Divine Blessing Sanctuary</span>
            </button>

            <button
              onClick={() => handleMobileNavClick(onOpenWishes)}
              className="flex w-full items-center gap-3 px-3 py-3 min-h-[48px] rounded-xl text-left text-sm font-serif font-semibold text-amber-200 bg-amber-500/10 border border-amber-500/20 active:bg-amber-500/20 transition-colors"
            >
              <Heart className="h-4 w-4 text-amber-400" />
              <span>Warm Wishes from Hemant Shelkar</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
