import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Featured Projects & Portfolio | LUMECASA",
  description:
    "Explore our portfolio of luxury lighting installations across villas, hotels, and commercial spaces. See how LUMECASA transforms architecture through light.",
};

const projects = [
  {
    title: "The Astoria Grand Lobby",
    location: "Mohali, Punjab",
    type: "Hospitality",
    image: "/images/space-hotel.jpg",
    slug: "astoria-grand-lobby",
    scope: "Bespoke Chandeliers & Ambient Integration",
  },
  {
    title: "Villa Sunset Exterior",
    location: "Chandigarh",
    type: "Residential",
    image: "/images/facade-lighting.jpg",
    slug: "villa-sunset",
    scope: "Complete Architectural Façade Lighting",
  },
  {
    title: "Heritage Haveli Restoration",
    location: "Jaipur, Rajasthan",
    type: "Heritage",
    image: "/images/chandelier-crystal.jpg",
    slug: "heritage-haveli",
    scope: "Classical Crystal Fixtures & Warm Illumination",
  },
  {
    title: "Aura Fine Dining",
    location: "New Delhi",
    type: "Restaurant",
    image: "/images/pendant-glass.jpg",
    slug: "aura-fine-dining",
    scope: "Custom Glass Pendants & Table Accent Lighting",
  },
  {
    title: "Lumina Corporate HQ",
    location: "Gurugram",
    type: "Commercial",
    image: "/images/chandelier-wing.jpg", // Using abstract/modern light for corporate
    slug: "lumina-corporate-hq",
    scope: "Statement Sculptural Lighting & Workspaces",
  },
  {
    title: "Private Residence 82",
    location: "JLPL, Mohali",
    type: "Residential",
    image: "/images/lifestyle-living.jpg",
    slug: "private-residence-82",
    scope: "Interior Decorative & Ambient Systems",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-navy-950 pt-24 min-h-screen">
      {/* ═══════════════ HEADER ═══════════════ */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="section-container text-center max-w-4xl">
          <SectionReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
              Our Portfolio
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-light text-ivory mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Light in Application
            </h1>
            <p className="text-base md:text-lg text-ivory/60 leading-relaxed max-w-2xl mx-auto">
              From majestic hotel lobbies to intimate private residences, explore how our luminaires and architectural lighting systems perform in real-world environments.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ PROJECTS GRID ═══════════════ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <SectionReveal key={project.slug} delay={index % 2 === 0 ? 0 : 100}>
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6 border border-white/[0.04]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Floating Hover Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                      <span className="btn-primary text-xs tracking-widest px-6 py-3 shadow-xl shadow-black/50">
                        View Project details
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold-400 font-medium">
                      {project.type}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-xs text-ivory/40">
                      {project.location}
                    </span>
                  </div>

                  {/* Title & Scope */}
                  <h2
                    className="text-2xl md:text-3xl font-light text-ivory mb-2 group-hover:text-gold-300 transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-sm text-ivory/50">
                    {project.scope}
                  </p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section className="section-padding bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950 border-t border-white/[0.04] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gold-400/[0.03] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="section-container max-w-4xl text-center relative z-10">
          <SectionReveal>
            <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center mx-auto mb-6 text-gold-400/60">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <h2
              className="text-3xl md:text-5xl font-light text-ivory mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Start your own project
            </h2>
            <p className="text-ivory/60 mb-10 max-w-lg mx-auto leading-relaxed">
              Our engineering and design teams are ready to collaborate on your next luxury lighting installation. Let's discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss Your Project
              </Link>
              <Link href="/collections" className="btn-outline">
                Browse Collections
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
