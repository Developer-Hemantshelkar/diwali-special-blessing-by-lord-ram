"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, Copy, Check, RefreshCw, Feather, Flame, Shield } from "lucide-react";
import { BLESSING_INTENTIONS } from "@/lib/blessingsData";
import { audioEngine } from "@/lib/audioEngine";

interface RamaBlessingSectionProps {
  onTriggerFlowerShower: () => void;
}

interface GeneratedBlessing {
  name: string;
  sanskritShloka: string;
  transliteration: string;
  shlokaMeaning: string;
  personalizedBlessing: string;
  virtueToEmbody: string;
  sacredAffirmation: string;
  timestamp: string;
}

export default function RamaBlessingSection({ onTriggerFlowerShower }: RamaBlessingSectionProps) {
  const [userName, setUserName] = useState("");
  const [selectedIntentId, setSelectedIntentId] = useState("dharma-clarity");
  const [customPrayer, setCustomPrayer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [blessingResult, setBlessingResult] = useState<GeneratedBlessing | null>(null);
  const [copied, setCopied] = useState(false);

  const selectedIntent = BLESSING_INTENTIONS.find((i) => i.id === selectedIntentId) || BLESSING_INTENTIONS[0];

  const handleGenerateBlessing = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    const name = userName.trim() || "Devotee";

    // Play sacred bell & om chime
    audioEngine.playTempleBell();
    setTimeout(() => {
      audioEngine.playSacredOm();
    }, 300);

    // Trigger celestial flower shower
    onTriggerFlowerShower();

    try {
      const response = await fetch("/api/blessing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          intention: selectedIntent.label,
          customRequest: customPrayer.trim(),
        }),
      });

      const data = await response.json();

      if (data && data.isAiGenerated && data.personalizedBlessing) {
        setBlessingResult({
          name,
          sanskritShloka: data.sanskritShloka || selectedIntent.sanskritShloka,
          transliteration: data.transliteration || selectedIntent.transliteration,
          shlokaMeaning: data.shlokaMeaning || selectedIntent.shlokaMeaning,
          personalizedBlessing: data.personalizedBlessing,
          virtueToEmbody: data.virtueToEmbody || selectedIntent.virtueToEmbody,
          sacredAffirmation: data.sacredAffirmation || selectedIntent.sacredAffirmation,
          timestamp: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        });
      } else {
        // Fallback to rich scriptural wisdom
        const fallbackText = selectedIntent.blessingTemplate(name);
        setBlessingResult({
          name,
          sanskritShloka: selectedIntent.sanskritShloka,
          transliteration: selectedIntent.transliteration,
          shlokaMeaning: selectedIntent.shlokaMeaning,
          personalizedBlessing: fallbackText,
          virtueToEmbody: selectedIntent.virtueToEmbody,
          sacredAffirmation: selectedIntent.sacredAffirmation,
          timestamp: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        });
      }
    } catch {
      // Offline / network fallback
      const fallbackText = selectedIntent.blessingTemplate(name);
      setBlessingResult({
        name,
        sanskritShloka: selectedIntent.sanskritShloka,
        transliteration: selectedIntent.transliteration,
        shlokaMeaning: selectedIntent.shlokaMeaning,
        personalizedBlessing: fallbackText,
        virtueToEmbody: selectedIntent.virtueToEmbody,
        sacredAffirmation: selectedIntent.sacredAffirmation,
        timestamp: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!blessingResult) return;
    const text = `LORD RAMA'S SACRED BLESSING for ${blessingResult.name}\n\n${blessingResult.sanskritShloka}\n(${blessingResult.transliteration})\n\nMeaning: ${blessingResult.shlokaMeaning}\n\nPersonalized Divine Blessing:\n"${blessingResult.personalizedBlessing}"\n\nVirtue to Embody: ${blessingResult.virtueToEmbody}\nDaily Affirmation: "${blessingResult.sacredAffirmation}"\n\n— Bestowed at the Ramayana Sanctuary (Curated by Hemant Shelkar)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="blessing" className="relative py-14 sm:py-20 lg:py-28 px-3.5 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
      {/* Decorative Aura Background */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-amber-500/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] sm:text-xs font-serif tracking-widest uppercase mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Divine Sanctuary</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-amber-100 tracking-tight">
            Personalized Blessing from Lord Rama
          </h2>
          <p className="mt-3 text-xs sm:text-base text-stone-300 font-sans leading-relaxed">
            Enter your name and seek divine counsel for your current life chapter. Receive sacred Vedic shlokas, timeless fortitude, and Lord Rama&apos;s personal guidance to illuminate your conscience.
          </p>
        </div>

        {/* 2-Column Sanctuary Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Portrait & Sacred Context */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-stone-900 group">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[420px] sm:max-h-none w-full">
                <Image
                  src="/images/lord_rama_portrait.jpg"
                  alt="Lord Rama holding the divine Kodanda bow in Ayodhya"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-stone-100">
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-amber-400 font-serif">
                    Maryada Purushottama
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-100">
                    Sri Ramachandra
                  </h3>
                  <p className="text-xs text-stone-300 mt-0.5 italic font-serif">
                    &ldquo;He who offers refuge to all beings, dispelling every shadow of fear.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Virtues Highlight Box */}
            <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-4 sm:p-5 backdrop-blur-sm space-y-2.5 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-300 font-serif flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-amber-400" />
                The Guiding Pillars of Rama
              </h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 text-[11px] sm:text-xs text-stone-300">
                <div className="p-2 sm:p-2.5 rounded-lg bg-stone-800/50 border border-stone-700/50">
                  <strong className="block text-amber-200">Satya (Truth)</strong>
                  Honoring truth above expedience.
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-stone-800/50 border border-stone-700/50">
                  <strong className="block text-amber-200">Kshama (Grace)</strong>
                  Forgiving even unyielding foes.
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-stone-800/50 border border-stone-700/50">
                  <strong className="block text-amber-200">Abhaya (Fearless)</strong>
                  Standing calm amidst tempests.
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-stone-800/50 border border-stone-700/50">
                  <strong className="block text-amber-200">Dharma (Duty)</strong>
                  Living with unshakeable honor.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form & Blessing Parchment */}
          <div className="lg:col-span-7">
            {!blessingResult ? (
              <div className="rounded-2xl border border-amber-500/30 bg-stone-900/85 p-4 sm:p-8 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                    <Feather className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-amber-100">
                      Invoke Your Sacred Blessing
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-400">
                      Prepared with warm wishes by Hemant Shelkar
                    </p>
                  </div>
                </div>

                <form onSubmit={handleGenerateBlessing} className="space-y-4 sm:space-y-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="seeker-name" className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-amber-300/90 font-serif mb-1.5">
                      Your Name / Seeker Identity
                    </label>
                    <input
                      id="seeker-name"
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Arjun, Ananya, or your name"
                      className="w-full min-h-[46px] rounded-xl border border-stone-700 bg-stone-950/80 px-4 py-2.5 text-stone-100 placeholder:text-stone-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all text-base sm:text-sm font-sans"
                    />
                  </div>

                  {/* Life Intention Selector */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-amber-300/90 font-serif mb-2">
                      Choose Your Life Prayer / Focus
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {BLESSING_INTENTIONS.map((intent) => {
                        const isSelected = selectedIntentId === intent.id;
                        return (
                          <button
                            key={intent.id}
                            type="button"
                            onClick={() => setSelectedIntentId(intent.id)}
                            className={`text-left p-3 min-h-[48px] rounded-xl border transition-all text-xs cursor-pointer active:scale-[0.98] ${
                              isSelected
                                ? "border-amber-500 bg-amber-500/15 text-amber-100 shadow-md shadow-amber-900/20 ring-1 ring-amber-400/30"
                                : "border-stone-800 bg-stone-950/50 text-stone-300 hover:border-stone-700 hover:bg-stone-800/50"
                            }`}
                          >
                            <span className="font-semibold block text-amber-200">{intent.label}</span>
                            <span className="text-[11px] text-stone-400 block mt-0.5 line-clamp-1">
                              {intent.tagline}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Optional Custom Thought / Prayer */}
                  <div>
                    <label htmlFor="custom-prayer" className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-amber-300/90 font-serif mb-1.5">
                      Personal Prayer or Current Challenge (Optional)
                    </label>
                    <textarea
                      id="custom-prayer"
                      value={customPrayer}
                      onChange={(e) => setCustomPrayer(e.target.value)}
                      rows={2}
                      placeholder="e.g., Seeking patience during career transition, or guidance for my family..."
                      className="w-full rounded-xl border border-stone-700 bg-stone-950/80 px-4 py-2.5 text-stone-100 placeholder:text-stone-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all text-base sm:text-sm resize-none font-sans"
                    />
                  </div>

                  {/* Action CTA */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full min-h-[50px] py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 font-bold font-serif text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin text-stone-950" />
                        <span>Invoking Divine Grace...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 text-stone-950" />
                        <span>Bestow Lord Rama&apos;s Blessing</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] sm:text-[11px] text-stone-500 font-sans">
                    Accompanied by sacred temple bells & celestial flower shower.
                  </p>
                </form>
              </div>
            ) : (
              /* The Illuminated Divine Blessing Parchment */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative rounded-2xl border-2 border-amber-500/50 bg-gradient-to-b from-[#1c160c] via-[#141009] to-[#0e0a05] p-4 sm:p-8 text-stone-100 shadow-2xl shadow-amber-900/40 overflow-hidden"
              >
                {/* Ornamental Gold Corner Accents */}
                <div className="absolute top-2.5 left-2.5 text-amber-500/30 text-base font-serif">✦</div>
                <div className="absolute top-2.5 right-2.5 text-amber-500/30 text-base font-serif">✦</div>
                <div className="absolute bottom-2.5 left-2.5 text-amber-500/30 text-base font-serif">✦</div>
                <div className="absolute bottom-2.5 right-2.5 text-amber-500/30 text-base font-serif">✦</div>

                {/* Blessing Header */}
                <div className="text-center mb-5 sm:mb-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-serif tracking-widest uppercase mb-1.5">
                    Divine Prasad & Ashirvaad
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-serif text-amber-200">
                    Blessing for {blessingResult.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-400 mt-1">
                    Bestowed on {blessingResult.timestamp} · Under the Grace of Sri Rama
                  </p>
                </div>

                {/* Sacred Sanskrit Shloka Box */}
                <div className="rounded-xl border border-amber-500/30 bg-amber-950/25 p-3.5 sm:p-5 text-center my-4 sm:my-5 backdrop-blur-sm relative">
                  <p className="text-sm sm:text-lg font-serif text-amber-300 font-medium whitespace-pre-line leading-relaxed break-words">
                    {blessingResult.sanskritShloka}
                  </p>
                  <p className="text-[11px] sm:text-xs text-amber-200/80 italic font-serif mt-1.5 break-words">
                    {blessingResult.transliteration}
                  </p>
                  <div className="my-2 h-px w-20 sm:w-24 mx-auto bg-amber-500/30" />
                  <p className="text-xs text-stone-300 font-sans leading-relaxed">
                    <strong className="text-amber-200">Meaning:</strong> {blessingResult.shlokaMeaning}
                  </p>
                </div>

                {/* Personalized Lord Rama Divine Voice */}
                <div className="my-4 sm:my-5 space-y-2.5 font-serif">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider text-amber-400/90 font-sans font-semibold">
                    <Flame className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>The Voice of Rama to Your Soul</span>
                  </div>
                  <p className="text-sm sm:text-lg text-stone-200 leading-relaxed italic border-l-2 border-amber-500/60 pl-3.5 sm:pl-4 py-1">
                    &ldquo;{blessingResult.personalizedBlessing}&rdquo;
                  </p>
                </div>

                {/* Virtue & Daily Affirmation Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-4 sm:my-6 text-xs">
                  <div className="rounded-xl bg-stone-900/80 border border-amber-500/20 p-3 sm:p-3.5">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                      Virtue to Embody
                    </span>
                    <span className="text-stone-200 font-medium text-xs sm:text-sm">
                      {blessingResult.virtueToEmbody}
                    </span>
                  </div>
                  <div className="rounded-xl bg-stone-900/80 border border-amber-500/20 p-3 sm:p-3.5">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                      Daily Affirmation
                    </span>
                    <span className="text-stone-200 font-medium italic text-xs sm:text-sm">
                      &ldquo;{blessingResult.sacredAffirmation}&rdquo;
                    </span>
                  </div>
                </div>

                {/* Mobile Touch Action Toolbar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-4 border-t border-amber-500/20 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl bg-stone-800 text-stone-200 hover:bg-stone-700 hover:text-amber-300 active:scale-95 transition-all cursor-pointer"
                    >
                      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                      <span>{copied ? "Blessing Copied!" : "Copy Blessing"}</span>
                    </button>

                    <button
                      onClick={() => {
                        audioEngine.playTempleBell();
                        onTriggerFlowerShower();
                      }}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-200 hover:bg-amber-500/25 active:scale-95 transition-all cursor-pointer"
                    >
                      <Sparkles className="h-4 w-4 text-amber-400" />
                      <span>Flower Shower</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setBlessingResult(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl border border-stone-800 text-stone-400 hover:text-stone-200 active:scale-95 transition-all cursor-pointer"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>Seek Another Blessing</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
