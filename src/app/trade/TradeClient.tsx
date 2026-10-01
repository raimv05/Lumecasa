"use client";

import Image from "next/image";
import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";

const benefits = [
  {
    title: "Trade Pricing & Volume Tiers",
    description: "Access exclusive trade discounts, project-based pricing, and volume tiers designed to support the profitability of your firm.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    title: "Dedicated Project Manager",
    description: "Work directly with a single point of contact from initial BOQ scoping to final installation support and troubleshooting.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Technical Resources",
    description: "Instant access to 3D models (GLB/OBJ), IES photometric files, high-res textures, and detailed installation manuals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    title: "Bespoke Customisation",
    description: "Modify finishes, dimensions, and configurations, or co-create entirely custom luminaires leveraging our manufacturing facility.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  }
];

export default function TradeClient() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/[0.04]">
        <div className="absolute inset-0">
          <Image
            src="/images/showroom-interior.jpg"
            alt="LUMECASA Trade Program"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/85 backdrop-blur-[3px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
              For Architects & Designers
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-light tracking-[0.02em] mb-8 text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Trade Program
            </h1>
            <p className="text-base md:text-lg text-ivory/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Partner with LUMECASA to bring unparalleled lighting solutions to your commercial and luxury residential projects.
            </p>
            <a href="#apply" className="btn-primary tracking-widest">
              Apply for an Account
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ BENEFITS ═══════════════ */}
      <section className="section-padding">
        <div className="section-container">
          <SectionReveal className="text-center mb-16 md:mb-24">
            <h2
              className="text-3xl md:text-4xl font-light text-ivory mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Program Benefits
            </h2>
            <div className="divider-gold mx-auto" />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <SectionReveal key={index} delay={index * 100}>
                <div className="flex gap-6 p-8 border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.03] transition-colors rounded-sm h-full group">
                  <div className="shrink-0 text-gold-400 group-hover:scale-110 transition-transform duration-500">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ivory mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-ivory/50 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ APPLICATION FORM ═══════════════ */}
      <section id="apply" className="section-padding bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950 border-t border-white/[0.04]">
        <div className="section-container max-w-3xl">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-light text-ivory mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Trade Application
              </h2>
              <p className="text-sm text-ivory/50 leading-relaxed max-w-lg mx-auto">
                Please complete the form below. Our team reviews all applications within 24-48 hours. Upon approval, you will receive access to trade pricing and resources.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 rounded-sm relative overflow-hidden">
              {formStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full border border-gold-400/30 flex items-center justify-center mx-auto mb-6 text-gold-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-ivory mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                    Application Received
                  </h3>
                  <p className="text-sm text-ivory/60 mb-8">
                    Thank you for your interest in the LUMECASA Trade Program. Our team will review your details and contact you shortly.
                  </p>
                  <button onClick={() => setFormStatus("idle")} className="btn-outline">
                    Submit Another
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">First Name *</label>
                      <input type="text" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">Last Name *</label>
                      <input type="text" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" />
                    </div>
                  </div>

                  {/* Company Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">Company / Firm Name *</label>
                      <input type="text" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">Profession *</label>
                      <select required defaultValue="" className="w-full bg-navy-900/80 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 transition-all cursor-pointer appearance-none">
                        <option value="" disabled>Select profession</option>
                        <option>Architect</option>
                        <option>Interior Designer</option>
                        <option>Developer / Builder</option>
                        <option>Lighting Consultant</option>
                        <option>Procurement Specialist</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">Business Email *</label>
                      <input type="email" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">Phone Number *</label>
                      <input type="tel" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" />
                    </div>
                  </div>

                  {/* Verification */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">Company Website *</label>
                      <input type="url" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" placeholder="https://" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">GST / Tax ID / Company Reg *</label>
                      <input type="text" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-6">
                    <button 
                      type="submit" 
                      disabled={formStatus === "submitting"}
                      className="btn-primary w-full justify-center py-4 text-sm tracking-widest disabled:opacity-50"
                    >
                      {formStatus === "submitting" ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
