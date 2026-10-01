"use client";

import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";

export default function ContactClient() {
  const [enquiryType, setEnquiryType] = useState<"general" | "commercial" | "design">("commercial");

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-white/[0.06] relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-400/[0.04] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="section-container relative z-10 text-center">
          <SectionReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
              Get in Touch
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light text-ivory mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Discuss Your Project
            </h1>
            <p className="text-ivory/60 max-w-2xl mx-auto leading-relaxed">
              Whether you are an architect sourcing for a commercial development, a designer lighting a luxury villa, or simply looking for the perfect statement piece—our team is here to assist.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="section-container max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Contact Information (Left Column) */}
            <div className="lg:w-1/3">
              <SectionReveal>
                <h3 className="text-2xl font-light text-ivory mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                  Contact Details
                </h3>
                
                <div className="space-y-8">
                  {/* Showroom */}
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3 font-semibold">
                      Showroom
                    </h4>
                    <p className="text-sm text-ivory/70 leading-relaxed">
                      LUMECASA<br />
                      Sec. 82, JLPL<br />
                      Mohali, Punjab, India
                    </p>
                  </div>

                  {/* Direct Contact */}
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3 font-semibold">
                      Direct Contact
                    </h4>
                    <div className="space-y-2">
                      <a href="tel:+919876543210" className="block text-sm text-ivory/70 hover:text-gold-400 transition-colors">
                        +91 98765 43210
                      </a>
                      <a href="mailto:projects@lumecasa.com" className="block text-sm text-ivory/70 hover:text-gold-400 transition-colors">
                        projects@lumecasa.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3 font-semibold">
                      Opening Hours
                    </h4>
                    <p className="text-sm text-ivory/70 leading-relaxed">
                      Monday – Saturday: 10:00 AM – 7:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-12">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full justify-center p-4 border border-gold-400/30 hover:border-gold-400 hover:bg-gold-400/5 transition-all duration-300 rounded-sm text-ivory group"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 group-hover:scale-110 transition-transform">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-sm tracking-wide">WhatsApp an Expert</span>
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Form (Right Column) */}
            <div className="lg:w-2/3">
              <SectionReveal delay={100}>
                <div className="bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 rounded-sm relative overflow-hidden">
                  
                  {/* Form Type Selector */}
                  <div className="flex flex-wrap gap-4 mb-10 pb-6 border-b border-white/[0.06]">
                    <button
                      onClick={() => setEnquiryType("commercial")}
                      className={`text-xs tracking-[0.15em] uppercase pb-2 border-b-2 transition-all ${
                        enquiryType === "commercial" ? "border-gold-400 text-gold-400" : "border-transparent text-ivory/40 hover:text-ivory/70"
                      }`}
                    >
                      Commercial / Architectural
                    </button>
                    <button
                      onClick={() => setEnquiryType("design")}
                      className={`text-xs tracking-[0.15em] uppercase pb-2 border-b-2 transition-all ${
                        enquiryType === "design" ? "border-gold-400 text-gold-400" : "border-transparent text-ivory/40 hover:text-ivory/70"
                      }`}
                    >
                      Interior Design / Villa
                    </button>
                    <button
                      onClick={() => setEnquiryType("general")}
                      className={`text-xs tracking-[0.15em] uppercase pb-2 border-b-2 transition-all ${
                        enquiryType === "general" ? "border-gold-400 text-gold-400" : "border-transparent text-ivory/40 hover:text-ivory/70"
                      }`}
                    >
                      General Enquiry
                    </button>
                  </div>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {/* Row 1: Name & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs text-ivory/60 uppercase tracking-wider">Full Name *</label>
                        <input type="text" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-ivory/60 uppercase tracking-wider">Company / Firm</label>
                        <input type="text" className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" placeholder="Architecture Studio LLC" />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs text-ivory/60 uppercase tracking-wider">Email Address *</label>
                        <input type="email" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-ivory/60 uppercase tracking-wider">Phone Number *</label>
                        <input type="tel" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    {/* Conditional Fields based on enquiryType */}
                    {enquiryType !== "general" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-navy-900/30 border border-white/[0.03] rounded-sm">
                        <div className="space-y-2">
                          <label className="text-xs text-gold-400/80 uppercase tracking-wider">Project Type</label>
                          <select className="w-full bg-navy-900/80 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 transition-all cursor-pointer appearance-none">
                            <option>Hotel / Resort</option>
                            <option>Commercial Office</option>
                            <option>Luxury Residential</option>
                            <option>Restaurant / Bar</option>
                            <option>Façade / Exterior</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs text-gold-400/80 uppercase tracking-wider">Estimated Timeline</label>
                          <select className="w-full bg-navy-900/80 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 transition-all cursor-pointer appearance-none">
                            <option>Immediate</option>
                            <option>1 - 3 Months</option>
                            <option>3 - 6 Months</option>
                            <option>6+ Months</option>
                            <option>Planning Phase</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">Project Details / Requirements *</label>
                      <textarea 
                        required 
                        rows={5} 
                        className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20 resize-none" 
                        placeholder="Please describe your project, lighting requirements, or specific products you are interested in..."
                      ></textarea>
                    </div>

                    {/* File Upload (Visual only for now) */}
                    {enquiryType !== "general" && (
                      <div className="border border-dashed border-white/20 rounded-sm p-6 text-center hover:border-gold-400/50 transition-colors cursor-pointer bg-navy-900/20">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 text-ivory/40">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        <p className="text-sm text-ivory/60 mb-1">Attach floor plans, BOQs, or reference images</p>
                        <p className="text-xs text-ivory/30">PDF, JPG, PNG up to 10MB</p>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="pt-4">
                      <button type="submit" className="btn-primary w-full justify-center py-4 text-sm tracking-widest">
                        Submit Enquiry
                      </button>
                    </div>
                  </form>
                </div>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
