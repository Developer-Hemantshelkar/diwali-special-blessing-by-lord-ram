"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Volume2, VolumeX, Compass, Heart } from "lucide-react";
import { audioEngine } from "@/lib/audioEngine";

interface HeroSectionProps {
  onOpenWishes: () => void;
  onScrollToBlessing: () => void;
  onScrollToCharacters: () => void;
}

export default function HeroSection({
  onOpenWishes,
  onScrollToBlessing,
  onScrollToCharacters,
}: HeroSectionProps) {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [volume, setVolume] = useState(0.45);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setIsPlayingMusic(audioEngine.getIsPlaying());
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  const handleToggleAudio = () => {
    const playing = audioEngine.toggle();
    setIsPlayingMusic(playing);
    if (playing) {
      audioEngine.playTempleBell();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioEngine.setVol(val);
  };

  return (
    <div className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16">
      {/* Background Image with Cinematic Golden Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero_ramayana_epic.jpg"
          alt="The celestial landscape of Ayodhya and the sacred bow of Sri Rama"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-85"
          referrerPolicy="no-referrer"
        />
        {/* Layered Cinematic Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        {/* Sacred Om & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-stone-900/80 px-3.5 sm:px-4 py-1.5 backdrop-blur-md shadow-lg shadow-amber-950/40">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-[11px] sm:text-xs font-serif font-medium tracking-widest text-amber-300 uppercase">
              The Divine Epic & Life Lessons
            </span>
          </div>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-3 sm:space-y-4"
        >
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-amber-500 drop-shadow-sm">
            RAMAYANA
          </h1>
          <p className="text-base sm:text-2xl font-serif text-amber-200/90 max-w-3xl mx-auto leading-relaxed px-2">
            The Eternal Voyage of Dharma, Resilient Courage, and Selfless Devotion
          </p>
          <p className="text-xs sm:text-base text-stone-300 max-w-2xl mx-auto font-sans leading-relaxed px-2">
            Step into an immersive digital homage to the immortal epic. Explore the transformative life lessons of each archetypal character, and receive a personalized sacred blessing from Lord Rama.
          </p>
        </motion.div>

        {/* Primary Action Buttons (Responsive Layout & Mobile Alignment) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 max-w-md sm:max-w-none mx-auto"
        >
          <button
            onClick={onScrollToBlessing}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-bold font-serif text-stone-950 shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <span>श्री राम का पावन आशीर्वाद प्राप्त करें</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={onOpenWishes}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-stone-900/80 px-4 sm:px-5 py-3.5 text-xs sm:text-sm font-medium text-amber-200 backdrop-blur-sm hover:bg-stone-800 hover:border-amber-400 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <Heart className="h-4 w-4 text-amber-400 shrink-0" />
            <span>Warm Wishes from Hemant Shelkar</span>
          </button>

          <button
            onClick={onScrollToCharacters}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl border border-stone-800 bg-black/60 px-4 sm:px-5 py-3.5 text-xs sm:text-sm font-medium text-stone-300 backdrop-blur-sm hover:bg-stone-900 hover:text-stone-100 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <Compass className="h-4 w-4 text-stone-400 shrink-0" />
            <span>Character Lessons</span>
          </button>
        </motion.div>

        {/* Soothing Meditative Audio Control Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-4 sm:pt-6"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 px-3 sm:px-4 py-2 rounded-2xl bg-stone-950/85 border border-amber-500/20 backdrop-blur-md shadow-lg text-xs text-stone-300 max-w-full">
            <button
              onClick={handleToggleAudio}
              className={`flex items-center gap-2 px-3 py-2 min-h-[40px] rounded-xl transition-all cursor-pointer font-serif ${
                isPlayingMusic
                  ? "bg-amber-500 text-stone-950 font-semibold"
                  : "bg-stone-900 text-amber-300 hover:bg-stone-800"
              }`}
            >
              {isPlayingMusic ? (
                <>
                  <Volume2 className="h-4 w-4 animate-pulse shrink-0" />
                  <span>Music Playing</span>
                </>
              ) : (
                <>
                  <VolumeX className="h-4 w-4 shrink-0" />
                  <span>Play Meditative Music</span>
                </>
              )}
            </button>

            {/* Volume Slider */}
            <div className="flex items-center gap-2 px-1">
              <span className="text-[11px] text-stone-400">Vol</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 sm:w-20 accent-amber-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                aria-label="Audio Volume Slider"
              />
            </div>

            <span className="text-[10px] sm:text-[11px] text-stone-400 hidden xs:inline">
              Tanpura & Bansuri
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
