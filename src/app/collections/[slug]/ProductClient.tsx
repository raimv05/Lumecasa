"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import Interactive3DViewer from "@/components/Interactive3DViewer";
import { getProductBySlug } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";

export default function ProductClient({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  const { addToQuote } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(product.finishes[0]);
  const images = product.galleryImages || [product.image];

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      
      {/* ═══════════════ MAIN PRODUCT AREA ═══════════════ */}
      <section className="section-padding border-b border-white/[0.04]">
        <div className="section-container max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left: Gallery */}
            <div className="lg:w-1/2 flex flex-col-reverse md:flex-row gap-4 h-[600px] lg:h-[800px]">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto w-full md:w-24 shrink-0 hide-scrollbar">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 md:w-full aspect-[3/4] shrink-0 overflow-hidden rounded-sm border transition-all duration-300 ${
                      activeImage === idx ? "border-gold-400 opacity-100" : "border-transparent opacity-40 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" sizes="100px" />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative flex-1 rounded-sm overflow-hidden border border-white/[0.04]">
                <Image
                  src={images[activeImage] || product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="lg:w-1/2 flex flex-col pt-4 lg:pt-10">
              <SectionReveal>
                <div className="mb-8">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-3">
                    {product.category}
                  </p>
                  <h1 className="text-3xl md:text-5xl font-light text-ivory mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                    {product.name}
                  </h1>
                  <p className="text-sm text-ivory/60 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <p className="text-sm tracking-widest uppercase text-ivory/40">
                    {product.price}
                  </p>
                </div>

                <div className="divider-gold opacity-30 mb-8" />

                {/* Finishes */}
                <div className="mb-10">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-ivory/80 mb-4 font-semibold">
                    Available Finishes
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {product.finishes.map(finish => (
                      <button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-5 py-3 text-xs tracking-wider border rounded-sm transition-all duration-300 ${
                          selectedFinish === finish
                            ? "border-gold-400 text-gold-400 bg-gold-400/5"
                            : "border-white/10 text-ivory/50 hover:border-white/30 hover:text-ivory"
                        }`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Specs Grid */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-12 p-6 bg-white/[0.02] border border-white/[0.04] rounded-sm">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gold-400/70 mb-1">Diameter</span>
                    <span className="text-sm text-ivory">{product.dimensions.diameter}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gold-400/70 mb-1">Height</span>
                    <span className="text-sm text-ivory">{product.dimensions.height}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gold-400/70 mb-1">Light Source</span>
                    <span className="text-sm text-ivory">{product.specs.lightSource}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gold-400/70 mb-1">Environment</span>
                    <span className="text-sm text-ivory">{product.specs.ipRating}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button 
                    className="btn-primary flex-1 justify-center py-4 text-sm"
                    onClick={() => addToQuote(product, selectedFinish)}
                  >
                    Add to Quote List
                  </button>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 justify-center py-4 text-sm border-white/20 text-ivory/70 hover:border-green-500 hover:text-green-500 hover:bg-green-500/5"
                  >
                    WhatsApp Expert
                  </a>
                </div>

                {/* Secondary Links */}
                <div className="flex items-center gap-6">
                  <button className="text-xs uppercase tracking-[0.1em] text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Spec Sheet
                  </button>
                  <button className="text-xs uppercase tracking-[0.1em] text-ivory/50 hover:text-ivory transition-colors flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                    Download 3D Model
                  </button>
                </div>

              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TECHNICAL DETAILS ACCORDION ═══════════════ */}
      <section className="section-padding border-b border-white/[0.04]">
        <div className="section-container max-w-4xl">
          <SectionReveal>
            <h3 className="text-2xl font-light text-ivory mb-10 text-center" style={{ fontFamily: "var(--font-heading)" }}>
              Technical Specifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
              <div className="flex justify-between py-4 border-b border-white/[0.04]">
                <span className="text-sm text-ivory/50">Wattage</span>
                <span className="text-sm text-ivory">{product.specs.wattage}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-white/[0.04]">
                <span className="text-sm text-ivory/50">Voltage</span>
                <span className="text-sm text-ivory">{product.specs.voltage}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-white/[0.04]">
                <span className="text-sm text-ivory/50">Color Temperature</span>
                <span className="text-sm text-ivory">{product.specs.colorTemp}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-white/[0.04]">
                <span className="text-sm text-ivory/50">Dimmable</span>
                <span className="text-sm text-ivory">{product.specs.dimmable}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-white/[0.04]">
                <span className="text-sm text-ivory/50">Weight</span>
                <span className="text-sm text-ivory">{product.dimensions.weight}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-white/[0.04]">
                <span className="text-sm text-ivory/50">Materials</span>
                <span className="text-sm text-ivory text-right max-w-[200px]">{product.materials.join(", ")}</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ 3D TURNTABLE VIEWER ═══════════════ */}
      {/* <section id="3d-viewer" className="py-24 border-b border-white/[0.04] bg-navy-900/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-ivory mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Interactive 3D Viewer
            </h2>
            <p className="text-sm text-ivory/50">Drag to rotate. Experience the scale and structure.</p>
          </div>
          
          <div className="max-w-4xl mx-auto h-[500px] rounded-sm overflow-hidden border border-white/[0.04] relative">
            <Interactive3DViewer 
              imageSrc={product.images[0]} 
              alt={product.name}
              productName={product.name}
              category={product.category}
            />
          </div>
        </div>
      </section> */}

      {/* ═══════════════ LIGHTING IN SPACE ═══════════════ */}
      <section className="section-padding">
        <div className="section-container text-center">
          <SectionReveal>
            <h2 className="text-3xl font-light text-ivory mb-12" style={{ fontFamily: "var(--font-heading)" }}>
              Lighting in Space
            </h2>
            <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-sm overflow-hidden border border-white/[0.04]">
              <Image 
                src="/images/showroom-interior.jpg" 
                alt={`${product.name} installed in a space`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy-950/20" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
