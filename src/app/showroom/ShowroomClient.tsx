"use client";

import Image from "next/image";
import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";

export default function ShowroomClient() {
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/[0.04]">
        <div className="absolute inset-0">
          <Image
            src="/images/showroom-interior.jpg"
            alt="LUMECASA Flagship Showroom"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
              The Flagship Experience
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.02em] mb-8 text-ivory"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Step into the Light
            </h1>
            <p className="text-base md:text-lg text-ivory/70 max-w-2xl mx-auto leading-relaxed">
              Explore our curated installations and experience the true scale, finish, and photometric quality of LUMECASA luminaires in person.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════ INFO & BOOKING ═══════════════ */}
      <section className="section-padding">
        <div className="section-container max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Showroom Details (Left Column) */}
            <div className="lg:w-1/2">
              <SectionReveal>
                <h2 className="text-3xl font-light text-ivory mb-10" style={{ fontFamily: "var(--font-heading)" }}>
                  Visit LUMECASA
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                  {/* Address */}
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3 font-semibold">
                      Location
                    </h4>
                    <p className="text-sm text-ivory/70 leading-relaxed mb-4">
                      LUMECASA Flagship<br />
                      Sec. 82, JLPL Industrial Area<br />
                      Mohali, Punjab, India
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gold-400 hover:text-gold-300 uppercase tracking-widest underline underline-offset-4 transition-colors">
                      Get Directions
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3 font-semibold">
                      Opening Hours
                    </h4>
                    <ul className="text-sm text-ivory/70 leading-relaxed space-y-2">
                      <li className="flex justify-between">
                        <span>Mon – Sat</span>
                        <span>10:00 AM – 7:00 PM</span>
                      </li>
                      <li className="flex justify-between text-ivory/40">
                        <span>Sunday</span>
                        <span>By Appointment</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="divider-gold mb-10" />

                {/* What to Bring */}
                <div className="bg-navy-900/30 p-8 rounded-sm border border-white/[0.03]">
                  <h4 className="text-sm tracking-[0.1em] uppercase text-ivory mb-4 font-medium flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-400">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    What to Bring
                  </h4>
                  <p className="text-sm text-ivory/60 leading-relaxed mb-4">
                    To make the most of your consultation with our lighting experts, we recommend bringing:
                  </p>
                  <ul className="space-y-3 text-sm text-ivory/70">
                    <li className="flex items-start gap-3">
                      <span className="text-gold-400 mt-1">•</span>
                      Architectural floor plans or RCPs (Reflected Ceiling Plans)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold-400 mt-1">•</span>
                      Interior design mood boards or 3D renders
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold-400 mt-1">•</span>
                      Photos of the space (if already constructed)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold-400 mt-1">•</span>
                      Ceiling height dimensions
                    </li>
                  </ul>
                </div>
              </SectionReveal>
            </div>

            {/* Booking Form (Right Column) */}
            <div className="lg:w-1/2">
              <SectionReveal delay={100}>
                <div className="bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 rounded-sm relative overflow-hidden">
                  <div className="mb-8">
                    <h3 className="text-2xl font-light text-ivory mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                      Book an Appointment
                    </h3>
                    <p className="text-sm text-ivory/50">
                      Schedule a private consultation with a LUMECASA lighting specialist.
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs text-ivory/60 uppercase tracking-wider">Full Name *</label>
                        <input type="text" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-ivory/60 uppercase tracking-wider">Phone Number *</label>
                        <input type="tel" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">Email Address *</label>
                      <input type="email" required className="w-full bg-navy-900/50 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 focus:bg-navy-900 transition-all placeholder:text-ivory/20" placeholder="john@example.com" />
                    </div>

                    {/* Visitor Type */}
                    <div className="space-y-2">
                      <label className="text-xs text-ivory/60 uppercase tracking-wider">I am a...</label>
                      <select className="w-full bg-navy-900/80 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 transition-all cursor-pointer appearance-none">
                        <option>Homeowner</option>
                        <option>Interior Designer</option>
                        <option>Architect</option>
                        <option>Developer / Builder</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-navy-900/30 border border-white/[0.03] rounded-sm">
                      <div className="space-y-2">
                        <label className="text-xs text-gold-400/80 uppercase tracking-wider">Preferred Date</label>
                        <input 
                          type="date" 
                          required 
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-navy-900/80 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 transition-all cursor-pointer [color-scheme:dark]" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-gold-400/80 uppercase tracking-wider">Preferred Time</label>
                        <select 
                          required
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          className="w-full bg-navy-900/80 border border-white/10 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-gold-400/50 transition-all cursor-pointer appearance-none"
                        >
                          <option value="" disabled>Select a time</option>
                          <option>10:00 AM</option>
                          <option>11:30 AM</option>
                          <option>01:00 PM</option>
                          <option>02:30 PM</option>
                          <option>04:00 PM</option>
                          <option>05:30 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <button type="submit" className="btn-primary w-full justify-center py-4 text-sm tracking-widest">
                        Confirm Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MAP / VISUAL BREAK ═══════════════ */}
      <section className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000 border-t border-white/[0.04]">
        {/* Placeholder for actual Google Maps iframe. Using an image block to maintain aesthetic for now */}
        <div className="absolute inset-0 bg-navy-900 flex items-center justify-center">
            <div className="text-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-4 text-gold-400/50">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-xs tracking-[0.2em] uppercase text-ivory/50">Interactive Map Integration</p>
            </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(5,10,20,1)]" />
      </section>
    </div>
  );
}
