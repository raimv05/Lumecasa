"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

type MediaItem = {
  id: string;
  type: "image" | "video";
  url: string;
};

interface GalleryClientProps {
  images: string[];
  videos: string[];
}

export default function GalleryClient({ images, videos }: GalleryClientProps) {
  const [filter, setFilter] = useState<"all" | "images" | "videos">("all");
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);

  // Combine and lightly shuffle/interleave the media for a natural gallery look
  const mediaItems = useMemo(() => {
    const items: MediaItem[] = [
      ...images.map((url, i) => ({ id: `img-${i}`, type: "image" as const, url })),
      ...videos.map((url, i) => ({ id: `vid-${i}`, type: "video" as const, url })),
    ];
    
    // Sort by name roughly to mix them if they have similar prefixes, 
    // or just leave them as is. Let's just return them.
    return items.sort((a, b) => a.url.localeCompare(b.url));
  }, [images, videos]);

  const filteredItems = useMemo(() => {
    if (filter === "all") return mediaItems;
    return mediaItems.filter((item) => item.type === filter.slice(0, -1)); // "images" -> "image"
  }, [filter, mediaItems]);

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      
      {/* ═══════════════ HEADER ═══════════════ */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <SectionReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
              Visual Inspiration
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-ivory mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              The Gallery
            </h1>
            <p className="text-sm md:text-base text-ivory/60 max-w-2xl mx-auto leading-relaxed mb-12">
              Explore a curated selection of our finest lighting installations, bespoke designs, and atmospheric spaces.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {(["all", "images", "videos"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${
                    filter === f
                      ? "border-gold-400 text-gold-400 bg-gold-400/5"
                      : "border-white/10 text-ivory/50 hover:border-white/30 hover:text-ivory"
                  }`}
                >
                  {f === "all" ? "All Media" : f}
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ MASONRY GRID ═══════════════ */}
      <section className="pb-24 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-ivory/40">No media found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredItems.map((item, index) => (
                <SectionReveal key={item.id} delay={(index % 8) * 100}>
                  <div 
                    className="relative group rounded-md overflow-hidden bg-navy-900 border border-white/[0.04] cursor-pointer aspect-[4/5]"
                    onClick={() => setLightboxItem(item)}
                  >
                    {item.type === "image" ? (
                      <img 
                        src={item.url} 
                        alt="Gallery image" 
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition-transform duration-700" 
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <video 
                          src={item.url} 
                          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition-transform duration-700"
                          muted 
                          loop 
                          playsInline
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                        {/* Play Icon Indicator */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-12 h-12 rounded-full bg-navy-950/80 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-ivory ml-1">
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-end p-6">
                      <span className="text-gold-400 text-[10px] tracking-widest uppercase flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                        Expand
                      </span>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════ LIGHTBOX ═══════════════ */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/98 backdrop-blur-xl transition-all duration-500 ${
          lightboxItem ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button 
          onClick={() => setLightboxItem(null)}
          className="absolute top-8 right-8 text-ivory/60 hover:text-gold-400 transition-colors z-[101]"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {lightboxItem && (
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto p-4 md:p-12 flex items-center justify-center animate-fade-in-up">
            {lightboxItem.type === "image" ? (
              <img 
                src={lightboxItem.url} 
                alt="Full screen view" 
                className="max-w-full max-h-full object-contain rounded-md shadow-2xl" 
              />
            ) : (
              <video 
                src={lightboxItem.url} 
                controls 
                autoPlay 
                className="max-w-full max-h-full rounded-md shadow-2xl"
              />
            )}
          </div>
        )}
      </div>

    </div>
  );
}
