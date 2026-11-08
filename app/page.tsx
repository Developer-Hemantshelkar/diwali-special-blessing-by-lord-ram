"use client";

import React, { useState, useEffect } from "react";
import VfxCanvas from "@/components/VfxCanvas";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import CharacterNavigator from "@/components/CharacterNavigator";
import RamaBlessingSection from "@/components/RamaBlessingSection";
import InteractiveStoryChapters from "@/components/InteractiveStoryChapters";
import RamSetuExperience from "@/components/RamSetuExperience";
import HemantWishesModal from "@/components/HemantWishesModal";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [isWishesModalOpen, setIsWishesModalOpen] = useState(false);
  const [flowerShowerTrigger, setFlowerShowerTrigger] = useState(false);

  // Gentle welcome popup on initial visit after short dwell
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("ramayana_visited");
    const timer = setTimeout(() => {
      setIsWishesModalOpen(true);
      if (!hasVisited) {
        sessionStorage.setItem("ramayana_visited", "true");
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const triggerFlowerShower = () => {
    setFlowerShowerTrigger(true);
    setTimeout(() => {
      setFlowerShowerTrigger(false);
    }, 1500);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main id="top" className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950 relative overflow-x-hidden">
      {/* VFX Embers & Flower Petal Shower Canvas */}
      <VfxCanvas burstFlowerShower={flowerShowerTrigger} />

      {/* Top Bar Navigation */}
      <TopBar
        onOpenWishes={() => setIsWishesModalOpen(true)}
        onScrollToBlessing={() => scrollTo("blessing")}
        onScrollToCharacters={() => scrollTo("characters")}
        onScrollToChapters={() => scrollTo("chapters")}
        onScrollToSetu={() => scrollTo("ram-setu")}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenWishes={() => setIsWishesModalOpen(true)}
        onScrollToBlessing={() => scrollTo("blessing")}
        onScrollToCharacters={() => scrollTo("characters")}
      />

      {/* Character Navigation & Life Lessons */}
      <CharacterNavigator onTriggerFlowerShower={triggerFlowerShower} />

      {/* Personalized Blessing Sanctuary from Lord Rama */}
      <RamaBlessingSection onTriggerFlowerShower={triggerFlowerShower} />

      {/* Interactive 7 Kandas Storytelling Chapters */}
      <InteractiveStoryChapters />

      {/* The Miracle of Ram Setu Floating Stone Bridge */}
      <RamSetuExperience />

      {/* Footer with Developed by Hemant Shelkar & Social Links */}
      <Footer />

      {/* Warm Wishes Popup from Hemant Shelkar */}
      <HemantWishesModal
        isOpen={isWishesModalOpen}
        onClose={() => setIsWishesModalOpen(false)}
        onOpenBlessing={() => {
          setIsWishesModalOpen(false);
          scrollTo("blessing");
          triggerFlowerShower();
        }}
        onExploreCharacters={() => {
          setIsWishesModalOpen(false);
          scrollTo("characters");
        }}
      />
    </main>
  );
}
