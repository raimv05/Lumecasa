"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import SectionReveal from "@/components/SectionReveal";

const SPACES = [
  { label: "Living Room", icon: "🛋️" },
  { label: "Dining", icon: "🍷" },
  { label: "Bedroom", icon: "🛌" },
  { label: "Villa", icon: "🏛️" },
  { label: "Hotel", icon: "🏨" },
  { label: "Restaurant", icon: "🥂" },
  { label: "Outdoor", icon: "🌿" },
];

const STYLES = [
  { label: "Luxury", desc: "Crystal, gold electroplating, grand statements" },
  { label: "Modern", desc: "Clean lines, geometric forms, indirect glow" },
  { label: "Classic", desc: "Timeless candle, brass, and traditional drops" },
  { label: "Sculptural", desc: "Organic shapes, art figures, bold centerpieces" },
  { label: "Minimal", desc: "Discreet wash lights, slim pendants, subtle luxury" },
];

const CATEGORIES = [
  { label: "Chandeliers", desc: "Grand multi-pendant & ceiling centerpieces" },
  { label: "Pendant Lights", desc: "Suspended clusters for tables & islands" },
  { label: "Wall Lights", desc: "Architectural sconces & ambient washes" },
  { label: "Table Lamps", desc: "Sculptural accent lighting" },
  { label: "Architectural", desc: "Facade, exterior & precision systems" },
];

export default function FindYourLight() {
  const [step, setStep] = useState(1);
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToQuote } = useQuote();

  // Filter recommendations based on selections
  const recommendations = PRODUCTS.filter((product) => {
    let match = true;
    if (selectedSpace && product.space !== selectedSpace) match = false;
    if (selectedStyle && product.style !== selectedStyle) match = false;
    if (selectedCategory && product.category !== selectedCategory) match = false;
    return match;
  });

  // Fallback if strict filter yields 0
  const finalRecommendations = recommendations.length > 0 ? recommendations : PRODUCTS.slice(0, 3);

  const resetWizard = () => {
    setStep(1);
    setSelectedSpace(null);
    setSelectedStyle(null);
    setSelectedCategory(null);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-navy-950 via-[#060c18] to-navy-950 border-y border-white/[0.06] relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container max-w-5xl relative z-10">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-400 font-semibold block mb-3">
              Interactive Product Discovery
            </span>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-light text-ivory mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Find Your Light
            </h2>
            <p className="text-sm text-ivory/60 max-w-xl mx-auto leading-relaxed">
              Answer 3 quick questions to discover the ideal LUMECASA lighting fixtures tailored for your space and interior aesthetic.
            </p>

            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                      step === s
                        ? "bg-gold-400 text-navy-950 font-bold scale-110 shadow-[0_0_15px_rgba(212,164,56,0.4)]"
                        : step > s
                        ? "bg-gold-400/30 text-gold-300 border border-gold-400/40"
                        : "bg-white/[0.04] text-ivory/40 border border-white/[0.08]"
                    }`}
                  >
                    {step > s ? "✓" : s}
                  </div>
                  {s < 4 && <div className={`w-8 md:w-12 h-[1px] ${step > s ? "bg-gold-400/40" : "bg-white/[0.08]"}`} />}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* STEP 1: What space are you lighting? */}
        {step === 1 && (
          <SectionReveal>
            <div className="bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 rounded-sm text-center">
              <h3 className="text-xl font-light text-ivory mb-2 font-heading">
                Step 1: What space are you illuminating?
              </h3>
              <p className="text-xs text-ivory/50 mb-8">Select your primary room or architectural site</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                {SPACES.map((space) => (
                  <button
                    key={space.label}
                    onClick={() => setSelectedSpace(space.label)}
                    className={`p-5 rounded-sm border transition-all text-center flex flex-col items-center gap-3 ${
                      selectedSpace === space.label
                        ? "border-gold-400 bg-gold-400/10 text-ivory shadow-[0_0_20px_rgba(212,164,56,0.15)]"
                        : "border-white/[0.08] bg-white/[0.01] text-ivory/60 hover:border-white/20 hover:text-ivory"
                    }`}
                  >
                    <span className="text-2xl">{space.icon}</span>
                    <span className="text-xs tracking-wider uppercase font-medium">{space.label}</span>
                  </button>
                ))}
              </div>

              <button
                disabled={!selectedSpace}
                onClick={() => setStep(2)}
                className="btn-primary px-10 py-3.5 text-xs disabled:opacity-30 disabled:pointer-events-none"
              >
                Continue to Style →
              </button>
            </div>
          </SectionReveal>
        )}

        {/* STEP 2: What aesthetic style do you prefer? */}
        {step === 2 && (
          <SectionReveal>
            <div className="bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 rounded-sm text-center">
              <h3 className="text-xl font-light text-ivory mb-2 font-heading">
                Step 2: What design style defines your vision?
              </h3>
              <p className="text-xs text-ivory/50 mb-8">Choose the architectural atmosphere that matches your interior</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {STYLES.map((style) => (
                  <button
                    key={style.label}
                    onClick={() => setSelectedStyle(style.label)}
                    className={`p-6 rounded-sm border text-left transition-all flex flex-col justify-between ${
                      selectedStyle === style.label
                        ? "border-gold-400 bg-gold-400/10 text-ivory shadow-[0_0_20px_rgba(212,164,56,0.15)]"
                        : "border-white/[0.08] bg-white/[0.01] text-ivory/60 hover:border-white/20 hover:text-ivory"
                    }`}
                  >
                    <div>
                      <span className="text-xs tracking-widest uppercase font-semibold text-gold-400 block mb-1">
                        {style.label}
                      </span>
                      <p className="text-xs text-ivory/60 leading-relaxed">{style.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs uppercase tracking-widest text-ivory/50 hover:text-ivory transition-colors"
                >
                  ← Back
                </button>
                <button
                  disabled={!selectedStyle}
                  onClick={() => setStep(3)}
                  className="btn-primary px-10 py-3.5 text-xs disabled:opacity-30 disabled:pointer-events-none"
                >
                  Continue to Category →
                </button>
              </div>
            </div>
          </SectionReveal>
        )}

        {/* STEP 3: What category are you looking for? */}
        {step === 3 && (
          <SectionReveal>
            <div className="bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 rounded-sm text-center">
              <h3 className="text-xl font-light text-ivory mb-2 font-heading">
                Step 3: What lighting fixture category?
              </h3>
              <p className="text-xs text-ivory/50 mb-8">Select the fixture type you wish to discover</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => setSelectedCategory(cat.label)}
                    className={`p-6 rounded-sm border text-left transition-all ${
                      selectedCategory === cat.label
                        ? "border-gold-400 bg-gold-400/10 text-ivory shadow-[0_0_20px_rgba(212,164,56,0.15)]"
                        : "border-white/[0.08] bg-white/[0.01] text-ivory/60 hover:border-white/20 hover:text-ivory"
                    }`}
                  >
                    <span className="text-xs tracking-widest uppercase font-semibold text-gold-400 block mb-1">
                      {cat.label}
                    </span>
                    <p className="text-xs text-ivory/60 leading-relaxed">{cat.desc}</p>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs uppercase tracking-widest text-ivory/50 hover:text-ivory transition-colors"
                >
                  ← Back
                </button>
                <button
                  disabled={!selectedCategory}
                  onClick={() => setStep(4)}
                  className="btn-primary px-10 py-3.5 text-xs disabled:opacity-30 disabled:pointer-events-none"
                >
                  Show Recommendations ✨
                </button>
              </div>
            </div>
          </SectionReveal>
        )}

        {/* STEP 4: Results */}
        {step === 4 && (
          <SectionReveal>
            <div className="bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 rounded-sm text-center">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold-400 font-semibold block mb-2">
                Your Customized Curation
              </span>
              <h3 className="text-2xl font-light text-ivory mb-2 font-heading">
                Recommended For Your Project
              </h3>
              <p className="text-xs text-ivory/50 mb-8">
                Curated based on: <span className="text-gold-400">{selectedSpace}</span> • <span className="text-gold-400">{selectedStyle}</span> • <span className="text-gold-400">{selectedCategory}</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left mb-10">
                {finalRecommendations.map((product) => (
                  <div 
                    key={product.id}
                    className="bg-navy-950 border border-white/[0.06] rounded-sm overflow-hidden group hover:border-gold-400/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[3/4] w-full overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] uppercase tracking-widest text-gold-400 block mb-1">
                          {product.category}
                        </span>
                        <h4 className="text-base font-light text-ivory font-heading mb-2">{product.name}</h4>
                        <p className="text-xs text-ivory/50 mb-3">{product.finish}</p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex gap-2">
                      <Link
                        href={`/collections/${product.slug}`}
                        className="btn-outline flex-1 text-center py-2.5 text-[11px] border-white/20 hover:border-gold-400"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => addToQuote(product)}
                        className="btn-primary flex-1 text-center py-2.5 text-[11px]"
                      >
                        Add to Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                <button
                  onClick={resetWizard}
                  className="text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-2"
                >
                  ↻ Restart Selection
                </button>
                <Link href="/contact" className="btn-primary text-xs py-3">
                  Book 1-on-1 Consultation
                </Link>
              </div>
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
