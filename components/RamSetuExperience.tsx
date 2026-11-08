"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Waves, Plus } from "lucide-react";
import { audioEngine } from "@/lib/audioEngine";

interface FloatingStone {
  id: string;
  inscription: string;
  x: number;
  y: number;
  delay: number;
}

export default function RamSetuExperience() {
  const [inscription, setInscription] = useState("श्री राम");
  const [stones, setStones] = useState<FloatingStone[]>([
    { id: "1", inscription: "श्री राम", x: 22, y: 72, delay: 0 },
    { id: "2", inscription: "राम सेतु", x: 42, y: 64, delay: 0.5 },
    { id: "3", inscription: "सत्यमेव जयते", x: 62, y: 58, delay: 1 },
    { id: "4", inscription: "जय श्री राम", x: 78, y: 52, delay: 1.5 },
    { id: "5", inscription: "धर्मो रक्षति", x: 33, y: 82, delay: 2 },
  ]);

  const handleAddStone = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inscription.trim() || "श्री राम";

    audioEngine.playTempleBell();

    const newStone: FloatingStone = {
      id: Date.now().toString(),
      inscription: text,
      x: 15 + Math.random() * 70,
      y: 45 + Math.random() * 40,
      delay: 0,
    };

    setStones((prev) => [newStone, ...prev.slice(0, 10)]);
    setInscription("");
  };

  return (
    <section id="ram-setu" className="relative py-14 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 bg-stone-950 overflow-hidden border-t border-amber-500/10">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] sm:text-xs font-serif tracking-widest uppercase mb-3">
            <Waves className="h-3.5 w-3.5" />
            <span>The Miracle of Faith</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-amber-100 tracking-tight">
            The Living Stones of Ram Setu
          </h2>
          <p className="mt-3 text-xs sm:text-base text-stone-300 font-sans leading-relaxed">
            When the Vanara army inscribed the sacred name upon heavy boulders, the laws of gravity yielded to devotion, and stones floated upon the deep. Inscribe your righteous intention and watch it float upon the eternal ocean.
          </p>
        </div>

        {/* Interactive Ocean Stage */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/30 bg-stone-950 shadow-2xl">
          {/* Background Ocean Visual */}
          <div className="relative h-[420px] sm:h-[560px] w-full">
            <Image
              src="/images/setu_ocean_bridge.jpg"
              alt="The sacred Ram Setu stone bridge across twilight ocean"
              fill
              className="object-cover object-center filter brightness-90"
              referrerPolicy="no-referrer"
            />
            {/* Dark Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Floating Stones on Ocean */}
            <AnimatePresence>
              {stones.map((stone) => (
                <motion.div
                  key={stone.id}
                  initial={{ scale: 0, y: -40, opacity: 0 }}
                  animate={{
                    scale: 1,
                    y: [0, -8, 0],
                    opacity: 1,
                  }}
                  transition={{
                    scale: { duration: 0.5 },
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
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                >
                  <div className="relative flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-stone-900/90 border border-amber-400/60 shadow-xl shadow-amber-900/40 backdrop-blur-md group-hover:scale-110 group-hover:border-amber-300 transition-all">
                    {/* Glowing Aura */}
                    <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-amber-500/20 blur-sm -z-10 group-hover:bg-amber-400/40 transition-all" />
                    <span className="text-amber-300 font-serif font-bold text-xs sm:text-base tracking-wider drop-shadow-[0_2px_8px_rgba(251,191,36,0.8)] whitespace-nowrap">
                      {stone.inscription}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Inscription Control Drawer at bottom */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-30 max-w-xl mx-auto">
              <form
                onSubmit={handleAddStone}
                className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-stone-950/90 border border-amber-500/40 shadow-2xl backdrop-blur-lg"
              >
                <input
                  type="text"
                  value={inscription}
                  onChange={(e) => setInscription(e.target.value)}
                  placeholder="Inscribe a prayer, name, or virtue..."
                  className="flex-1 bg-transparent px-3 sm:px-4 py-2.5 text-base sm:text-sm text-stone-100 placeholder:text-stone-400 focus:outline-none font-serif"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 min-h-[44px] rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-serif font-bold text-xs uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 shadow-md shadow-amber-500/20 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Plus className="h-4 w-4 shrink-0" />
                  <span className="hidden xs:inline">Float Stone</span>
                  <span className="xs:hidden">Float</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Lesson Footnote */}
        <div className="mt-6 sm:mt-8 text-center max-w-2xl mx-auto px-2">
          <p className="text-xs sm:text-sm font-serif italic text-amber-200/90 leading-relaxed">
            &ldquo;When heavy stones are dedicated to higher truth, they float. When individuals abandon self-interest for the collective good, miracles bridge the widest oceans.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
