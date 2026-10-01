"use client";

import { useState } from "react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

interface LightingAtmosphereProps {
  imageSrc?: string;
  title?: string;
}

export default function LightingAtmosphereToggle({
  imageSrc = "/images/showroom-interior.jpg",
  title = "Atmosphere & Illumination Control",
}: LightingAtmosphereProps) {
  const [mode, setMode] = useState<"day" | "warm" | "night">("warm");

  const overlayStyles = {
    day: "bg-amber-100/10 mix-blend-overlay",
    warm: "bg-amber-600/30 mix-blend-color-dodge shadow-[inset_0_0_120px_rgba(255,180,50,0.3)]",
    night: "bg-blue-950/60 mix-blend-multiply shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]",
  };

  const brightnessStyles = {
    day: "brightness-110 contrast-100",
    warm: "brightness-105 contrast-110 saturate-125",
    night: "brightness-75 contrast-125",
  };

  return (
    <section className="section-padding bg-navy-950 border-b border-white/[0.04]">
      <div className="section-container max-w-5xl text-center">
        <SectionReveal>
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-semibold block mb-3">
            Atmospheric Preview
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-light text-ivory mb-4 font-heading"
          >
            {title}
          </h2>
          <p className="text-xs text-ivory/60 max-w-xl mx-auto mb-8">
            Experience how LUMECASA precision warmth (2700K - 3000K) dynamically adapts room emotion from natural daylight to intimate evening luxury.
          </p>

          {/* Mode Selector Tabs */}
          <div className="inline-flex p-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full gap-2 mb-8">
            <button
              onClick={() => setMode("day")}
              className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                mode === "day"
                  ? "bg-ivory text-navy-950 font-bold shadow-md"
                  : "text-ivory/50 hover:text-ivory"
              }`}
            >
              ☀️ Natural Daylight
            </button>
            <button
              onClick={() => setMode("warm")}
              className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                mode === "warm"
                  ? "bg-gold-400 text-navy-950 font-bold shadow-[0_0_20px_rgba(212,164,56,0.5)]"
                  : "text-ivory/50 hover:text-ivory"
              }`}
            >
              ✨ Warm Ambient (2700K)
            </button>
            <button
              onClick={() => setMode("night")}
              className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${
                mode === "night"
                  ? "bg-navy-900 text-gold-400 border border-gold-400/50 font-bold shadow-md"
                  : "text-ivory/50 hover:text-ivory"
              }`}
            >
              🌙 Evening Glamour
            </button>
          </div>

          {/* Visual Showcase Box */}
          <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-sm overflow-hidden border border-white/[0.08] shadow-2xl transition-all duration-700">
            <Image
              src={imageSrc}
              alt="LUMECASA Lighting Atmosphere Preview"
              fill
              className={`object-cover transition-all duration-700 ${brightnessStyles[mode]}`}
              priority
            />
            {/* Color Overlay Layer */}
            <div className={`absolute inset-0 transition-all duration-700 pointer-events-none ${overlayStyles[mode]}`} />

            {/* Glowing Accent Point */}
            {mode === "warm" && (
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-400/40 blur-[50px] rounded-full pointer-events-none animate-pulse" />
            )}

            {/* Badge overlay */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded border border-white/10 text-left">
              <span className="text-[10px] text-gold-400 uppercase tracking-widest block font-medium">
                Current Atmosphere
              </span>
              <span className="text-xs text-ivory font-light capitalize">
                {mode === "day" && "5000K Clear Skylight"}
                {mode === "warm" && "2700K Architectural Warm LED Glow"}
                {mode === "night" && "Dimmable Evening Contrast & Accent Spotlights"}
              </span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
