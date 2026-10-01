import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Architectural & Façade Lighting | LUMECASA",
  description:
    "Transform buildings with LUMECASA's architectural and façade lighting solutions for villas, hotels, commercial spaces, and heritage sites.",
};

const capabilities = [
  {
    title: "Façade Lighting",
    description:
      "Transform building exteriors with precision LED systems that highlight architectural features and create nighttime landmarks.",
    image: "/images/facade-lighting.jpg",
  },
  {
    title: "Villa Lighting",
    description:
      "Complete indoor and outdoor lighting solutions for luxury residences, estates, and private landscapes.",
    image: "/images/lifestyle-living.jpg",
  },
  {
    title: "Hospitality Lighting",
    description:
      "Bespoke installations that create unforgettable atmospheres in hotels, resorts, and premium restaurants.",
    image: "/images/space-hotel.jpg",
  },
  {
    title: "Commercial Lighting",
    description:
      "Corporate, retail, and office lighting designed for visual comfort, energy efficiency, and brand impact.",
    image: "/images/chandelier-wing.jpg", // Reusing existing assets
  },
  {
    title: "Heritage & Temple Lighting",
    description:
      "Respectful and majestic illumination designed to preserve and highlight historical and sacred architecture.",
    image: "/images/chandelier-crystal.jpg",
  },
  {
    title: "Custom Solutions",
    description:
      "Bespoke lighting design, engineering, and manufacturing tailored to your exact project specifications.",
    image: "/images/manufacturing-craft.jpg",
  },
];

const processSteps = [
  { step: "01", title: "Site & Brief", desc: "Understanding the architectural nuances and client vision." },
  { step: "02", title: "Lighting Requirement", desc: "Technical assessment of lux levels, color temp, and mood." },
  { step: "03", title: "Design Recommendation", desc: "Proposing lighting layouts, placements, and fixtures." },
  { step: "04", title: "Product Selection", desc: "Choosing exact fittings, optics, and premium finishes." },
  { step: "05", title: "Manufacturing", desc: "Precision fabrication and assembly in our facility." },
  { step: "06", title: "Supply", desc: "Safe, well-packaged, and timed delivery to your site." },
  { step: "07", title: "Installation Support", desc: "Expert technical guidance for seamless integration." },
];

export default function ArchitecturalPage() {
  return (
    <div className="bg-navy-950">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/facade-lighting.jpg"
            alt="Luxury architectural and facade lighting by LUMECASA"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <SectionReveal>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-xs tracking-[0.35em] uppercase text-gold-400/80 mb-6">
              Beyond Decorative
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.05em] mb-8 text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Architectural Lighting
              <br />
              <span className="text-gold-300">That Defines the Building</span>
            </h1>
            <p className="text-base md:text-lg text-ivory/70 max-w-2xl mx-auto leading-relaxed mb-10">
              LUMECASA partners with architects, interior designers, and developers
              to deliver comprehensive lighting solutions that bridge the gap between
              aesthetics and technical performance.
            </p>
            <Link href="#capabilities" className="btn-primary">
              Explore Our Capabilities
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ CAPABILITIES ═══════════════ */}
      <section className="section-padding" id="capabilities">
        <div className="section-container">
          <SectionReveal className="text-center mb-16 md:mb-24">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
              Expertise
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-ivory mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Lighting as an Architectural Element
            </h2>
            <div className="divider-gold mx-auto" />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {capabilities.map((cap, index) => (
              <SectionReveal key={index} delay={index * 100}>
                <div className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 border border-white/[0.04]">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-medium text-gold-300 mb-3 tracking-wide">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-ivory/60 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS SECTION ═══════════════ */}
      <section className="section-padding bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950 border-y border-white/[0.04]">
        <div className="section-container">
          <SectionReveal className="text-center mb-16 md:mb-24">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
              Our Methodology
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-ivory mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Project Workflow
            </h2>
            <p className="text-ivory/50 max-w-2xl mx-auto">
              A structured approach from conceptualization to final illumination, ensuring
              every project is delivered to the highest standard of precision.
            </p>
          </SectionReveal>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-400/20 to-transparent -translate-x-1/2" />

              <div className="space-y-8 md:space-y-12">
                {processSteps.map((step, index) => (
                  <SectionReveal key={index} delay={index * 100}>
                    <div
                      className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Empty space for alternating layout */}
                      <div className="hidden md:block flex-1" />

                      {/* Number Node */}
                      <div className="shrink-0 relative z-10 w-12 h-12 rounded-full border border-gold-400/30 bg-navy-950 flex items-center justify-center text-gold-400 font-mono text-sm shadow-[0_0_20px_rgba(212,164,56,0.1)]">
                        {step.step}
                      </div>

                      {/* Content */}
                      <div className={`flex-1 text-center md:text-left ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <h3 className="text-lg font-medium text-ivory mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-ivory/50">
                          {step.desc}
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

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-400/[0.05] blur-[120px] rounded-full" />
        
        <div className="section-container relative z-10 text-center max-w-3xl">
          <SectionReveal>
            <div className="p-10 md:p-16 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm rounded-sm">
              <div className="w-16 h-16 rounded-full border border-gold-400/20 flex items-center justify-center mx-auto mb-6 text-gold-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h2
                className="text-3xl md:text-5xl font-light text-ivory mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to illuminate your project?
              </h2>
              <p className="text-sm text-ivory/60 mb-10 leading-relaxed max-w-lg mx-auto">
                Partner with us for your next commercial, hospitality, or luxury residential development.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Discuss Your Project
                </Link>
                <a
                  href="/projects"
                  className="btn-outline"
                >
                  View Our Portfolio
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
