import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "About & Craftsmanship | LUMECASA",
  description:
    "Discover the LUMECASA philosophy. From material selection to final illumination, explore our meticulous approach to luxury lighting manufacturing.",
};

const processes = [
  {
    title: "Material Selection",
    description: "We source only the finest optical-grade crystals, pure brass, and architectural-grade alloys to ensure longevity and unparalleled visual depth.",
    image: "/images/manufacturing-craft.jpg",
  },
  {
    title: "Precision Fabrication",
    description: "Combining advanced CNC machinery with traditional metalworking, each component is engineered to exacting tolerances.",
    image: "/images/chandelier-crystal.jpg", // Representing the detailed components
  },
  {
    title: "Bespoke Finishing",
    description: "From brushed champagne gold to blackened chrome, our multi-layer electroplating and finishing processes create surfaces that command attention.",
    image: "/images/wall-light-brass.jpg", // Representing the finish
  },
  {
    title: "Assembly & Quality",
    description: "Every luminaire is meticulously assembled by hand, tested for electrical safety, color temperature consistency, and flawless aesthetic presentation.",
    image: "/images/lamp-sculptural.jpg",
  }
];

export default function AboutPage() {
  return (
    <div className="bg-navy-950 pt-24 min-h-screen">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/[0.04]">
        <div className="absolute inset-0">
          <Image
            src="/images/manufacturing-craft.jpg"
            alt="LUMECASA craftsmanship and manufacturing"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
              Our Philosophy
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.02em] mb-8 text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Mastering the <br className="hidden sm:block" />
              <span className="text-gold-300">Art of Illumination</span>
            </h1>
            <p className="text-base md:text-lg text-ivory/70 max-w-2xl mx-auto leading-relaxed">
              At LUMECASA, we believe lighting is the soul of architecture. We don't just manufacture fixtures; we engineer atmosphere.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ THE STORY ═══════════════ */}
      <section className="section-padding">
        <div className="section-container max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionReveal>
                <div className="relative aspect-square rounded-sm overflow-hidden border border-white/[0.04]">
                  <Image
                    src="/images/showroom-interior.jpg"
                    alt="LUMECASA Showroom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,10,20,0.8)]" />
                </div>
              </SectionReveal>
            </div>
            
            <div className="lg:w-1/2">
              <SectionReveal delay={100}>
                <h2
                  className="text-3xl md:text-4xl font-light text-ivory mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Uncompromising Standards
                </h2>
                <div className="space-y-6 text-sm text-ivory/60 leading-relaxed">
                  <p>
                    LUMECASA was founded on a singular principle: lighting should never be an afterthought. It is the definitive element that transforms a structure into a sanctuary, a room into an experience.
                  </p>
                  <p>
                    Operating from our state-of-the-art facility in Punjab, we bridge the gap between traditional artisanal craftsmanship and modern lighting technology. Our dedicated team of engineers, designers, and artisans work in unison to produce luminaires that meet the exact demands of luxury residential and commercial spaces.
                  </p>
                  <p>
                    We do not compromise on the unseen. The drivers, the thermal management systems, the purity of the alloys—every hidden detail is engineered for decades of flawless performance.
                  </p>
                </div>
                <div className="mt-10">
                  <Image 
                    src="/images/lumecasa-logo.svg" 
                    alt="Lumecasa Signature" 
                    width={140} 
                    height={30} 
                    className="opacity-40 invert grayscale" 
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CRAFTSMANSHIP / PROCESS ═══════════════ */}
      <section className="section-padding bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950 border-y border-white/[0.04]">
        <div className="section-container">
          <SectionReveal className="text-center mb-16 md:mb-24">
            <div className="divider-gold mx-auto mb-6" />
            <h2
              className="text-4xl md:text-5xl font-light text-ivory mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Manufacturing Process
            </h2>
            <p className="text-ivory/50 max-w-2xl mx-auto italic text-lg" style={{ fontFamily: "var(--font-heading)" }}>
              "From material selection to final illumination, every piece passes through a controlled process designed around finish, reliability, and visual impact."
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <SectionReveal key={process.title} delay={index * 100}>
                <div className="group h-full p-6 border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 rounded-sm">
                  <div className="text-gold-400 font-mono text-xs mb-4 opacity-50">
                    0{index + 1}
                  </div>
                  <div className="relative w-full aspect-video rounded-sm overflow-hidden mb-6 border border-white/[0.05]">
                    <Image
                      src={process.image}
                      alt={process.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-ivory mb-3">
                    {process.title}
                  </h3>
                  <p className="text-sm text-ivory/50 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SHOWROOM CTA ═══════════════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/[0.02] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="section-container max-w-4xl text-center relative z-10">
          <SectionReveal>
            <h2
              className="text-3xl md:text-5xl font-light text-ivory mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Experience the Quality
            </h2>
            <p className="text-ivory/60 mb-10 max-w-lg mx-auto leading-relaxed">
              Photography can only capture a fraction of the impact. We invite you to visit our state-of-the-art showroom to truly understand the LUMECASA difference.
            </p>
            <div className="flex justify-center">
              <Link href="/showroom" className="btn-primary tracking-widest px-8">
                Plan a Showroom Visit
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
