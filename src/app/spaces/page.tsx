import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Lighting by Space | LUMECASA",
  description:
    "Discover how LUMECASA defines the atmosphere of luxury homes, hotels, restaurants, and commercial spaces through purposeful lighting design.",
};

const spaces = [
  {
    name: "Homes & Villas",
    description: "Statement chandeliers, elegant pendants, and ambient wall sconces designed to turn luxury residences into warm, inviting sanctuaries.",
    image: "/images/lifestyle-living.jpg",
    href: "/collections?space=Living%20Room",
  },
  {
    name: "Hotels & Resorts",
    description: "Grand lobby installations, intimate room lighting, and sweeping outdoor illuminations that craft unforgettable guest experiences.",
    image: "/images/space-hotel.jpg",
    href: "/collections?space=Hotel",
  },
  {
    name: "Restaurants & Dining",
    description: "Sculptural lighting and perfectly balanced colour temperatures designed to enhance culinary presentation and dining atmosphere.",
    image: "/images/pendant-glass.jpg",
    href: "/collections?space=Restaurant",
  },
  {
    name: "Commercial & Office",
    description: "Architectural and decorative lighting that balances sophisticated corporate branding with ergonomic visual comfort.",
    image: "/images/chandelier-wing.jpg",
    href: "/architectural",
  },
  {
    name: "Heritage & Haveli",
    description: "Traditional forms re-engineered with modern LED technology to respect and elevate classical architecture.",
    image: "/images/chandelier-crystal.jpg",
    href: "/collections?style=Classic",
  },
  {
    name: "Outdoor & Façade",
    description: "Precision architectural exterior lighting systems designed to transform building envelopes into nighttime landmarks.",
    image: "/images/facade-lighting.jpg",
    href: "/architectural",
  },
];

export default function SpacesPage() {
  return (
    <div className="bg-navy-950 pt-24 min-h-screen">
      {/* ═══════════════ HEADER ═══════════════ */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="section-container text-center max-w-4xl">
          <SectionReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
              Atmosphere & Context
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-light text-ivory mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Every Space Deserves
              <br />
              <span className="text-gold-300">Its Perfect Light</span>
            </h1>
            <p className="text-base md:text-lg text-ivory/60 leading-relaxed max-w-2xl mx-auto">
              Lighting is not simply something you install; it is the medium through which a space is experienced. Explore our collections curated by their architectural context.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ SPACES GRID ═══════════════ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-24">
            {spaces.map((space, index) => (
              <SectionReveal
                key={space.name}
                delay={index % 2 === 0 ? 0 : 150} // Stagger odd/even items
                className={index % 2 !== 0 ? "md:mt-16" : ""} // Offset the second column for an editorial layout
              >
                <div className="group flex flex-col h-full">
                  {/* Image Container */}
                  <Link href={space.href} className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 block border border-white/[0.03]">
                    <Image
                      src={space.image}
                      alt={space.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Center hover button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="w-14 h-14 rounded-full border border-gold-400 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center text-gold-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h2
                      className="text-2xl md:text-3xl font-light text-ivory mb-4 group-hover:text-gold-300 transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {space.name}
                    </h2>
                    <p className="text-sm text-ivory/50 leading-relaxed mb-8 max-w-sm">
                      {space.description}
                    </p>
                    
                    {/* Actions */}
                    <div className="mt-auto flex items-center gap-6">
                      <Link
                        href={space.href}
                        className="text-xs tracking-[0.2em] uppercase text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-2"
                      >
                        Explore Products
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link
                        href="/projects"
                        className="text-xs tracking-[0.2em] uppercase text-ivory/40 hover:text-ivory/70 transition-colors"
                      >
                        View Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CONSULTATION CTA ═══════════════ */}
      <section className="section-padding bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950 border-t border-white/[0.04]">
        <div className="section-container max-w-4xl text-center">
          <SectionReveal>
            <div className="divider-gold mx-auto mb-8" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light text-ivory mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Designing a specific space?
            </h2>
            <p className="text-ivory/60 mb-10 max-w-lg mx-auto leading-relaxed">
              Share your architectural drawings or mood boards with our lighting experts, and we will recommend the perfect luminaires for your project.
            </p>
            <Link href="/contact" className="btn-primary">
              Design My Space
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
