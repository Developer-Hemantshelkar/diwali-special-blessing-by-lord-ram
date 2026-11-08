"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Waves, Plus, Sparkles } from "lucide-react";
import { audioEngine } from "@/lib/audioEngine";

interface FloatingStone {
  id: string;
  inscription: string;
  x: number;
  y: number;
  delay: number;
}

const QUICK_PRESETS = ["श्री राम", "राम सेतु", "सत्यमेव जयते", "धर्मो रक्षति", "जय श्री राम"];

export default function RamSetuExperience() {
  const [inscription, setInscription] = useState("श्री राम");
  const [stones, setStones] = useState<FloatingStone[]>([
    { id: "1", inscription: "श्री राम", x: 22, y: 55, delay: 0 },
    { id: "2", inscription: "राम सेतु", x: 42, y: 45, delay: 0.5 },
    { id: "3", inscription: "सत्यमेव जयते", x: 62, y: 38, delay: 1 },
    { id: "4", inscription: "जय श्री राम", x: 80, y: 48, delay: 1.5 },
    { id: "5", inscription: "धर्मो रक्षति", x: 34, y: 68, delay: 2 },
  ]);

  const spawnStone = React.useCallback((text: string) => {
    const cleanText = text.trim() || "श्री राम";
    audioEngine.playTempleBell();

    const newStone: FloatingStone = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      inscription: cleanText,
      x: 18 + Math.random() * 64,
      y: 30 + Math.random() * 45,
      delay: 0,
    };

    setStones((prev) => [newStone, ...prev.slice(0, 10)]);
    setInscription("");
  }, []);

  const handleAddStone = (e: React.FormEvent) => {
    e.preventDefault();
    spawnStone(inscription);
  };

  return (
    <section id="ram-setu" className="relative py-14 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 bg-stone-950 overflow-hidden border-t border-amber-500/10">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] sm:text-xs font-serif tracking-widest uppercase mb-3">
            <Waves className="h-3.5 w-3.5" />
            <span>The Miracle of Faith · राम सेतु</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-amber-100 tracking-tight">
            The Living Stones of Ram Setu
          </h2>
          <p className="mt-3 text-xs sm:text-base text-stone-300 font-sans leading-relaxed">
            जब वानर सेना ने भारी शिलाओं पर प्रभु श्री राम का पावन नाम अंकित किया, तो गुरुत्वाकर्षण का नियम भी भक्ति के सम्मुख नतमस्तक हो गया और पत्थर सागर पर तैरने लगे। अपनी पवित्र प्रार्थना अंकित करें और उसे सागर पर तैरते हुए देखें।
          </p>
        </div>

        {/* Ocean & Inscription Stage Container */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/30 bg-stone-950 shadow-2xl">
          {/* Background Ocean Visual (Clean Viewport with Floating Stones) */}
          <div className="relative h-[320px] sm:h-[460px] lg:h-[500px] w-full overflow-hidden">
            <Image
              src="/images/setu_ocean_bridge.jpg"
              alt="The sacred Ram Setu stone bridge across twilight ocean"
              fill
              className="object-cover object-center filter brightness-90"
              referrerPolicy="no-referrer"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Floating Stones on Ocean */}
            <AnimatePresence>
              {stones.map((stone) => (
                <motion.div
                  key={stone.id}
                  initial={{ scale: 0, y: -40, opacity: 0 }}
                  animate={{
                    scale: 1,
                    y: [0, -7, 0],
                    opacity: 1,
                  }}
                  transition={{
                    scale: { duration: 0.45 },
                    y: {
                      duration: 3 + (parseFloat(stone.id) % 2),
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    left: `${stone.x}%`,
                    top: `${stone.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
                >
                  <div className="relative flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-stone-900/90 border border-amber-400/60 shadow-xl shadow-amber-900/40 backdrop-blur-md group-hover:scale-110 group-hover:border-amber-300 transition-all">
                    {/* Glowing Aura */}
                    <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-amber-500/20 blur-sm -z-10 group-hover:bg-amber-400/40 transition-all" />
                    <span className="text-amber-300 font-serif font-bold text-xs sm:text-base tracking-wider drop-shadow-[0_2px_8px_rgba(251,191,36,0.8)] whitespace-nowrap">
                      {stone.inscription}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Floating Stone Counter Indicator */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/70 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-serif backdrop-blur-md">
                <Sparkles className="h-3 w-3" />
                <span>तैरती शिलाएं: {stones.length}</span>
              </span>
            </div>
          </div>

          {/* Dedicated Inscription Control Console (Mobile-Friendly Docked Layout) */}
          <div className="border-t border-amber-500/25 bg-stone-900/95 p-3.5 sm:p-5 backdrop-blur-xl">
            {/* Quick Preset Buttons for Easy One-Touch Inscription on Mobile */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-2.5 scrollbar-none">
              <span className="text-[11px] text-amber-400/80 font-serif font-medium whitespace-nowrap mr-1 shrink-0">
                शीघ्र विकल्प:
              </span>
              {QUICK_PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => spawnStone(preset)}
                  className="px-2.5 py-1 min-h-[32px] rounded-lg border border-amber-500/25 bg-stone-950/60 text-amber-200/90 text-xs font-serif hover:bg-amber-500/15 hover:border-amber-400 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {preset}
                </button>
              ))}
            </div>

            {/* Inscription Form with Mobile-Optimized Layout & Touch Target */}
            <form
              onSubmit={handleAddStone}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inscription}
                  onChange={(e) => setInscription(e.target.value)}
                  placeholder="शिला पर पावन नाम या संकल्प लिखें (उदा. श्री राम, शांति)..."
                  className="w-full min-h-[46px] rounded-xl border border-stone-700 bg-stone-950/90 px-4 py-2.5 text-base sm:text-sm text-stone-100 placeholder:text-stone-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 font-serif"
                />
              </div>

              {/* Float Stone Action Button */}
              <button
                type="submit"
                className="w-full sm:w-auto min-h-[46px] px-5 sm:px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 font-serif font-bold text-xs sm:text-sm uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 shadow-md shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <Plus className="h-4 w-4 shrink-0" />
                <span>शिला प्रवाहित करें (Float Stone)</span>
              </button>
            </form>
          </div>
        </div>

        {/* Lesson Footnote */}
        <div className="mt-6 sm:mt-8 text-center max-w-2xl mx-auto px-2">
          <p className="text-xs sm:text-sm font-serif italic text-amber-200/90 leading-relaxed">
            &ldquo;जब भारी शिलाओं को भी परम सत्य और निस्वार्थ सेवा के निमित्त समर्पित किया जाता है, तो वे भी तैरने लगती हैं। जब समाज व्यक्तिगत स्वार्थ से ऊपर उठता है, तो असंभव भी संभव हो जाता है।&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
