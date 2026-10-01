"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

const slides = [
  {
    id: 1,
    badge: "Experience the World of Lumecasa",
    title: "Step Inside Our\nElegant Showroom.",
    ctaText: "Explore Collections",
    ctaLink: "/collections",
    image: "/images/showroom-interior.jpg",
  },
  {
    id: 2,
    badge: "Hanging Lights for Living Rooms",
    title: "Add Soft Glow &\nStyle With Modern\nPendant Lights.",
    ctaText: "View Collections",
    ctaLink: "/collections?category=Pendant+Lights",
    image: "/images/pendant-glass.jpg",
  },
  {
    id: 3,
    badge: "Chandeliers for High Ceilings",
    title: "Make A Statement\nIn Double-Height Spaces\n& Dining Areas.",
    ctaText: "Contact Us",
    ctaLink: "/contact",
    image: "/images/chandelier-spiral.jpg",
  },
  {
    id: 4,
    badge: "Designer Ceiling Lights",
    title: "Chic Fixtures For\nBoth Modern &\nClassic Interiors.",
    ctaText: "Explore Collection",
    ctaLink: "/collections",
    image: "/images/chandelier-wing.jpg",
  },
  {
    id: 5,
    badge: "Add Elegance With Custom Chandeliers",
    title: "Tailored Designs\nTo Suit Your Unique\nSpace",
    ctaText: "View Collections",
    ctaLink: "/collections",
    image: "/images/chandelier-crystal.jpg",
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#0c1322]">
      
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none z-0"
          }`}
        >
          {/* Background Image Area (Right aligned visually) */}
          <div className="absolute inset-0 md:left-[20%] lg:left-[30%] transition-transform duration-[10000ms] ease-linear" style={{ transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)' }}>
            <Image
              src={slide.image}
              alt={slide.title.replace('\n', ' ')}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            {/* Gradient Overlay to blend with the solid left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1322] via-[#0c1322]/80 to-transparent w-full md:w-[70%]" />
            <div className="absolute inset-0 bg-navy-950/20" /> {/* Subtle overall darkening */}
          </div>

          {/* Content Area */}
          <div className="relative z-20 h-full flex items-center px-6 md:px-16 lg:px-24">
            <div className="max-w-xl md:max-w-2xl pt-20">
              <div
                className={`transition-all duration-700 delay-300 ${
                  currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="inline-block bg-white/[0.05] border border-white/10 px-4 py-1.5 rounded-sm mb-6 backdrop-blur-md">
                  <p className="text-[10px] md:text-xs tracking-[0.1em] text-gold-400 font-medium">
                    {slide.badge}
                  </p>
                </div>
                
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-ivory mb-8 leading-[1.15]" 
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {slide.title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h1>

                <Link
                  href={slide.ctaLink}
                  className="btn-primary"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-30">
        <button
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-ivory hover:bg-white/10 hover:text-gold-400 backdrop-blur-md transition-all"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-30">
        <button
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-ivory hover:bg-white/10 hover:text-gold-400 backdrop-blur-md transition-all"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-gold-400 w-8" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
