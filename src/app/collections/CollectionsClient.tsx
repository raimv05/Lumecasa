"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { PRODUCTS } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";

const categories = ["All", "Chandeliers", "Pendant Lights", "Wall Lights", "Table Lamps", "Architectural"];
const spaces = ["All", "Living Room", "Dining", "Bedroom", "Villa", "Hotel", "Restaurant", "Outdoor"];

export default function CollectionsClient() {
  const { addToQuote } = useQuote();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSpace, setActiveSpace] = useState("All");

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchCategory = activeCategory === "All" || product.category === activeCategory;
    const matchSpace = activeSpace === "All" || product.space === activeSpace;
    return matchCategory && matchSpace;
  });

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-white/[0.06]">
        <div className="section-container text-center">
          <SectionReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
              Our Masterpieces
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light text-ivory mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Collections
            </h1>
            <p className="text-ivory/60 max-w-2xl mx-auto leading-relaxed">
              Explore our curated selection of luxury decorative and architectural lighting, designed to transform any space into a masterpiece of illumination.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Filters */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-32 space-y-10">
                {/* Category Filter */}
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-ivory mb-6 font-semibold border-b border-white/[0.06] pb-4">
                    Category
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button
                          onClick={() => setActiveCategory(cat)}
                          className={`text-sm transition-colors duration-300 ${
                            activeCategory === cat
                              ? "text-gold-400 font-medium"
                              : "text-ivory/50 hover:text-ivory/80"
                          }`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Space Filter */}
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-ivory mb-6 font-semibold border-b border-white/[0.06] pb-4">
                    Space
                  </h3>
                  <ul className="space-y-3">
                    {spaces.map((space) => (
                      <li key={space}>
                        <button
                          onClick={() => setActiveSpace(space)}
                          className={`text-sm transition-colors duration-300 ${
                            activeSpace === space
                              ? "text-gold-400 font-medium"
                              : "text-ivory/50 hover:text-ivory/80"
                          }`}
                        >
                          {space}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                <p className="text-sm text-ivory/50">
                  Showing {filteredProducts.length} results
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-ivory/50 uppercase tracking-widest">Sort by:</span>
                  <select className="bg-transparent text-sm text-ivory border-none outline-none focus:ring-0 cursor-pointer">
                    <option value="featured" className="bg-navy-900">Featured</option>
                    <option value="newest" className="bg-navy-900">Newest</option>
                  </select>
                </div>
              </div>

              {/* Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                  {filteredProducts.map((product, i) => (
                    <SectionReveal key={product.id} delay={i * 50}>
                      <Link href={`/collections/${product.slug}`} className="product-card group block">
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover product-card-image"
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            quality={85}
                          />
                          {/* Hover Glow Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Quick Actions overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                            <div className="flex gap-3">
                              <span className="btn-primary text-[10px] py-2 px-4 flex-1 justify-center">
                                View Product
                              </span>
                              <button 
                                className="btn-ghost text-[10px] py-2 px-3"
                                onClick={(e) => {
                                  e.preventDefault();
                                  addToQuote(product);
                                }}
                                aria-label="Add to quote"
                              >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                  <path d="M12 5v14M5 12h14" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="text-[10px] tracking-[0.2em] uppercase text-gold-400/70 mb-1.5">
                            {product.category}
                          </p>
                          <h3 className="text-base font-light text-ivory group-hover:text-gold-300 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-xs text-ivory/40 mt-1">{product.finish}</p>
                        </div>
                      </Link>
                    </SectionReveal>
                  ))}
                </div>
              ) : (
                <div className="text-center py-32 border border-white/[0.06] rounded-sm bg-white/[0.02]">
                  <p className="text-ivory/50">No products found matching your criteria.</p>
                  <button 
                    onClick={() => { setActiveCategory("All"); setActiveSpace("All"); }}
                    className="mt-4 text-gold-400 hover:text-gold-300 text-sm underline underline-offset-4"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
      
      {/* Consultation Banner */}
      <section className="py-24 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950 border-t border-white/[0.04]">
        <div className="section-container max-w-3xl text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-light text-ivory mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Need help selecting the perfect piece?
            </h2>
            <p className="text-ivory/60 mb-8 max-w-lg mx-auto">
              Our lighting experts are available to help you find the right fixtures for your space, scale, and design aesthetic.
            </p>
            <Link href="/contact" className="btn-outline">
              Request a Consultation
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
