"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import Interactive3DViewer from "@/components/Interactive3DViewer";
import HeroCarousel from "@/components/HeroCarousel";
import FindYourLight from "@/components/FindYourLight";
import LightingAtmosphereToggle from "@/components/LightingAtmosphereToggle";

/* ─── Data ─── */
const signatureProducts = [
  {
    name: "Spiral Pebble Chandelier",
    category: "Chandeliers",
    finish: "Champagne Gold",
    image: "/images/chandelier-spiral.jpg",
    slug: "spiral-pebble-chandelier",
  },
  {
    name: "Royal Crystal Chandelier",
    category: "Chandeliers",
    finish: "Crystal & Brass",
    image: "/images/chandelier-crystal.jpg",
    slug: "royal-crystal-chandelier",
  },
  {
    name: "Wing & Leaf Chandelier",
    category: "Chandeliers",
    finish: "Metallic Gold",
    image: "/images/chandelier-wing.jpg",
    slug: "wing-leaf-chandelier",
  },
  {
    name: "Amber Glass Pendant Trio",
    category: "Pendant Lights",
    finish: "Amber & Champagne",
    image: "/images/pendant-glass.jpg",
    slug: "amber-glass-pendant-trio",
  },
  {
    name: "Elegance Figure Lamp",
    category: "Table Lamps",
    finish: "Black Chrome & Gold",
    image: "/images/lamp-sculptural.jpg",
    slug: "elegance-figure-lamp",
  },
  {
    name: "Geo Brass Wall Sconce",
    category: "Wall Lights",
    finish: "Brushed Brass",
    image: "/images/wall-light-brass.jpg",
    slug: "geo-brass-wall-sconce",
  },
];

const architecturalCapabilities = [
  {
    title: "Façade Lighting",
    description: "Transform building exteriors with precision LED systems.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
  },
  {
    title: "Villa Lighting",
    description: "Complete indoor and outdoor lighting solutions for luxury residences.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Hotel & Resort",
    description: "Bespoke installations that create unforgettable atmospheres.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M3 21h18M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
      </svg>
    ),
  },
  {
    title: "Commercial",
    description: "Office, retail, and corporate lighting designed for impact.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M2 20h20M4 20V8l8-5 8 5v12M10 20v-4h4v4" />
      </svg>
    ),
  },
  {
    title: "Heritage & Temple",
    description: "Respectful illumination for heritage and sacred spaces.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2L2 7h20L12 2zM4 7v10h16V7M2 20h20M8 7v10M12 7v10M16 7v10" />
      </svg>
    ),
  },
];

const manufacturingSteps = [
  { step: "01", title: "Design", description: "Concept development and technical drawings" },
  { step: "02", title: "Material Selection", description: "Premium metals, crystals, and glass" },
  { step: "03", title: "Fabrication", description: "Precision cutting and shaping" },
  { step: "04", title: "Finishing", description: "Hand-polished surfaces and plating" },
  { step: "05", title: "Assembly", description: "Expert integration of all components" },
  { step: "06", title: "Testing", description: "Quality and safety verification" },
  { step: "07", title: "Installation", description: "Professional on-site support" },
];

const spaces = [
  { name: "Homes & Villas", image: "/images/lifestyle-living.jpg", href: "/spaces/homes" },
  { name: "Hotels & Resorts", image: "/images/space-hotel.jpg", href: "/spaces/hotels" },
  { name: "Restaurants", image: "/images/pendant-glass.jpg", href: "/spaces/restaurants" },
  { name: "Commercial", image: "/images/chandelier-wing.jpg", href: "/spaces/commercial" },
  { name: "Heritage & Haveli", image: "/images/chandelier-crystal.jpg", href: "/spaces/heritage" },
  { name: "Outdoor & Façade", image: "/images/facade-lighting.jpg", href: "/spaces/outdoor" },
];

const testimonials = [
  {
    quote: "LUMECASA transformed our villa with lighting that feels like art. Every room tells a story now.",
    name: "Anika Sharma",
    role: "Villa Owner, Chandigarh",
  },
  {
    quote: "The attention to detail and craftsmanship exceeded our expectations. The chandelier is the centerpiece of our hotel lobby.",
    name: "Rajiv Mehra",
    role: "Hotel Director, Mohali",
  },
  {
    quote: "Working with LUMECASA was seamless. They understood our architectural vision and delivered stunning façade lighting.",
    name: "Priya Kapoor",
    role: "Architect, Delhi",
  },
];

/* ─── Component ─── */
export default function HomePage() {
  return (
    <>
      {/* ═══════════════ SECTION 01: Cinematic Hero Carousel ═══════════════ */}
      <HeroCarousel />

      {/* Structural Gap */}
      <div className="h-12 md:h-24 w-full bg-[#050a14] border-b border-white/[0.04]" />

      {/* ═══════════════ SECTION 02: Light Changes Everything ═══════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden" id="light-statement">
        <div className="absolute inset-0">
          <Image
            src="/images/lifestyle-living.jpg"
            alt="Luxurious living room with statement lighting design"
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-navy-950/75" />
        </div>

        <SectionReveal className="relative z-10 text-center section-container">
          <div className="max-w-3xl mx-auto">
            <div className="divider-gold mx-auto mb-8" />
            <blockquote
              className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.3] text-ivory/90 mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Lighting isn&apos;t simply something you install.
            </blockquote>
            <blockquote
              className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.3] text-gold-300 mb-10"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              It defines how a space feels.
            </blockquote>
            <Link href="/spaces" className="btn-outline">
              Explore the Experience
            </Link>
          </div>
        </SectionReveal>
      </section>

      {/* ═══════════════ SECTION 03: Signature Collection ═══════════════ */}
      <section className="section-padding bg-navy-950" id="signature-collection">
        <div className="section-container">
          <SectionReveal className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
              Curated Selection
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Signature Collection
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {signatureProducts.map((product, i) => (
              <SectionReveal key={product.slug} delay={i * 100}>
                <Link href={`/collections/${product.slug}`} className="product-card group block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover product-card-image"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                    />
                    {/* Hover Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Quick Actions */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <div className="flex gap-3">
                        <span className="btn-primary text-[10px] py-2 px-4 flex-1 justify-center">
                          View Product
                        </span>
                        <span className="btn-ghost text-[10px] py-2 px-3">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
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

          <SectionReveal className="text-center mt-12" delay={600}>
            <Link href="/collections" className="btn-outline">
              View All Collections
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ GUIDED PRODUCT DISCOVERY WIZARD ═══════════════ */}
      <FindYourLight />

      {/* ═══════════════ SECTION 04: Interactive 3D Showcase ═══════════════ */}
      <section className="section-padding bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" id="3d-showcase">
        <div className="section-container">
          <SectionReveal className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
              Interactive Experience
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore in Detail
            </h2>
            <div className="divider-gold mx-auto mt-6 mb-6" />
            <p className="text-ivory/50 max-w-lg mx-auto">
              Interact with our signature pieces in 360°. Examine every detail,
              every finish, every facet of craftsmanship.
            </p>
          </SectionReveal>

          <SectionReveal>
            <Interactive3DViewer
              imageSrc="/images/chandelier-spiral.jpg"
              alt="Interactive 3D showcase - Spiral Pebble Chandelier"
              productName="Spiral Pebble Chandelier"
              category="Chandeliers"
            />
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ LIGHTING ATMOSPHERE CONTROL ═══════════════ */}
      <LightingAtmosphereToggle />

      {/* ═══════════════ SECTION 05: Architectural Lighting ═══════════════ */}
      <section className="relative" id="architectural-lighting">
        {/* Full-width background */}
        <div className="relative h-[50vh] md:h-[60vh]">
          <Image
            src="/images/facade-lighting.jpg"
            alt="Architectural facade lighting on a luxury villa"
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
          <SectionReveal className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
                Beyond Decorative
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-7xl font-light text-ivory"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Architectural Lighting
                <br />
                <span className="text-gold-300">That Defines the Building</span>
              </h2>
            </div>
          </SectionReveal>
        </div>

        {/* Capabilities */}
        <div className="section-padding bg-navy-950">
          <div className="section-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {architecturalCapabilities.map((cap, i) => (
                <SectionReveal key={cap.title} delay={i * 100}>
                  <div className="p-6 border border-white/[0.06] hover:border-gold-400/20 group transition-all duration-500 hover:bg-white/[0.02] text-center h-full">
                    <div className="text-gold-400/60 group-hover:text-gold-400 transition-colors mb-4 flex justify-center">
                      {cap.icon}
                    </div>
                    <h3 className="text-sm font-medium text-ivory mb-2 tracking-wide">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-ivory/40 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal className="text-center mt-12">
              <Link href="/architectural" className="btn-primary">
                Discuss Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 06: Manufacturing Story ═══════════════ */}
      <section className="section-padding bg-gradient-to-b from-navy-950 to-navy-900/30" id="manufacturing">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <SectionReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/manufacturing-craft.jpg"
                  alt="LUMECASA craftsman assembling a luxury brass light fixture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>
            </SectionReveal>

            {/* Content Side */}
            <div>
              <SectionReveal>
                <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
                  Craftsmanship
                </p>
                <h2
                  className="text-4xl md:text-5xl font-light text-ivory mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  From Concept to
                  <br />
                  <span className="text-gold-300">Illumination</span>
                </h2>
                <p className="text-ivory/50 leading-relaxed mb-10 max-w-md">
                  From material selection to final illumination, every piece
                  passes through a controlled process designed around finish,
                  reliability, and visual impact.
                </p>
              </SectionReveal>

              {/* Process Steps */}
              <div className="space-y-0">
                {manufacturingSteps.map((item, i) => (
                  <SectionReveal key={item.step} delay={i * 80}>
                    <div className="flex items-start gap-4 py-3 border-b border-white/[0.04] group hover:border-gold-400/10 transition-colors">
                      <span className="text-xs text-gold-400/50 font-mono mt-0.5 shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-medium text-ivory group-hover:text-gold-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-ivory/35 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 07: Spaces ═══════════════ */}
      <section className="section-padding bg-navy-950" id="spaces">
        <div className="section-container">
          <SectionReveal className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
              Designed For
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Every Space Deserves
              <br />
              <span className="text-gold-300">Its Perfect Light</span>
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {spaces.map((space, i) => (
              <SectionReveal key={space.name} delay={i * 80}>
                <Link href={space.href} className="group relative aspect-[4/3] block overflow-hidden rounded-sm">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                  <div className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/[0.06] transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="text-xl md:text-2xl font-light text-ivory group-hover:text-gold-300 transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {space.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-ivory/0 group-hover:text-gold-400 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs tracking-[0.15em] uppercase">Explore</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 08: Projects ═══════════════ */}
      <section className="section-padding bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" id="projects">
        <div className="section-container">
          <SectionReveal className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
              Our Work
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Featured Projects
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </SectionReveal>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Project 1 */}
            <SectionReveal>
              <div className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-white/[0.04]">
                <Image
                  src="/images/space-hotel.jpg"
                  alt="The Astoria Hotel lighting project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold-400 mb-2">
                    Hospitality · Mohali
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-light text-ivory mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Grand Lobby Installation
                  </h3>
                  <p className="text-sm text-ivory/50 mb-4 max-w-md">
                    Custom chandelier and ambient lighting for a five-star hotel lobby.
                  </p>
                  <Link href="/projects/grand-lobby" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gold-400 hover:text-gold-300 transition-colors">
                    View Project
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SectionReveal>

            {/* Project 2 */}
            <SectionReveal delay={150}>
              <div className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-white/[0.04]">
                <Image
                  src="/images/facade-lighting.jpg"
                  alt="Villa Sunset facade lighting project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold-400 mb-2">
                    Residential · Chandigarh
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-light text-ivory mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Villa Sunset Façade
                  </h3>
                  <p className="text-sm text-ivory/50 mb-4 max-w-md">
                    Complete exterior architectural lighting for a luxury villa.
                  </p>
                  <Link href="/projects/villa-sunset" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gold-400 hover:text-gold-300 transition-colors">
                    View Project
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal className="text-center mt-12">
            <Link href="/projects" className="btn-outline">
              View All Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ SECTION 09: Showroom ═══════════════ */}
      <section className="relative" id="showroom">
        <div className="relative h-[50vh] md:h-[60vh]">
          <Image
            src="/images/showroom-interior.jpg"
            alt="LUMECASA premium lighting showroom interior"
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-navy-950/60" />
        </div>

        <div className="section-padding bg-navy-950">
          <div className="section-container max-w-4xl">
            <SectionReveal className="text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
                Experience in Person
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-ivory mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Visit Our Showroom
              </h2>

              <div className="grid sm:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-gold-400/20 flex items-center justify-center mx-auto mb-3 text-gold-400/60">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-ivory mb-1">Address</h4>
                  <p className="text-xs text-ivory/40">
                    Sec. 82, JLPL
                    <br />
                    Mohali, Punjab
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-gold-400/20 flex items-center justify-center mx-auto mb-3 text-gold-400/60">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-ivory mb-1">Hours</h4>
                  <p className="text-xs text-ivory/40">
                    Mon – Sat: 10 AM – 7 PM
                    <br />
                    Sun: By Appointment
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-gold-400/20 flex items-center justify-center mx-auto mb-3 text-gold-400/60">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-ivory mb-1">Contact</h4>
                  <p className="text-xs text-ivory/40">
                    +91 98765 43210
                    <br />
                    info@lumecasa.com
                  </p>
                </div>
              </div>

              <Link href="/showroom" className="btn-primary">
                Plan a Showroom Visit
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 10: Consultation CTA ═══════════════ */}
      <section className="section-padding bg-gradient-to-b from-navy-950 via-navy-800/20 to-navy-950 relative overflow-hidden" id="consultation">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-400/[0.04] blur-[150px] rounded-full" />

        <SectionReveal className="relative z-10 section-container max-w-3xl text-center">
          <div className="p-10 md:p-16 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
              Personal Service
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light text-ivory mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Not sure what your space needs?
            </h2>
            <p
              className="text-xl md:text-2xl font-light text-gold-300 mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Speak with a LUMECASA lighting expert.
            </p>
            <p className="text-sm text-ivory/40 mb-10 max-w-md mx-auto leading-relaxed">
              Whether you&apos;re designing a home, a hotel, or a commercial
              space — our team will guide you to the perfect lighting solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Consultation
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp an Expert
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ═══════════════ SECTION 11: Testimonials ═══════════════ */}
      <section className="section-padding bg-navy-950" id="testimonials">
        <div className="section-container">
          <SectionReveal className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
              Client Stories
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Trusted by Those Who
              <br />
              <span className="text-gold-300">Value Light</span>
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 150}>
                <div className="p-8 border border-white/[0.06] bg-white/[0.02] h-full flex flex-col">
                  {/* Quote Mark */}
                  <div className="text-gold-400/20 text-6xl font-serif leading-none mb-4">
                    &ldquo;
                  </div>
                  <p className="text-ivory/70 text-sm leading-relaxed flex-1 italic">
                    {t.quote}
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/[0.06]">
                    <p className="text-sm font-medium text-ivory">{t.name}</p>
                    <p className="text-xs text-ivory/40 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Final Divider ═══════════════ */}
      <div className="divider-gold-wide" />
    </>
  );
}
