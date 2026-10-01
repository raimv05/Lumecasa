"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQuote } from "@/context/QuoteContext";

const navLinks = [
  {
    label: "Collections",
    href: "/collections",
    dropdown: {
      title: "Shop By Categories",
      links: [
        { label: "Chandeliers", href: "/collections?category=Chandeliers" },
        { label: "Wall Lights", href: "/collections?category=Wall+Lights" },
        { label: "Pendant Lights", href: "/collections?category=Pendant+Lights" },
        { label: "Table Lamps", href: "/collections?category=Table+Lamps" },
        { label: "Floor Lamps", href: "/collections?category=Floor+Lamps" },
        { label: "Architectural", href: "/architectural" },
      ],
      featured: {
        title: "Beautiful Scenery With Lamp",
        subtitle: "SALE UP TO 25% OFF",
        image: "/images/lamp-sculptural.jpg",
        href: "/collections/elegance-figure-lamp",
      },
    },
  },
  {
    label: "Spaces",
    href: "/spaces",
    dropdown: {
      title: "Design By Space",
      links: [
        { label: "Homes & Villas", href: "/spaces" },
        { label: "Hotels & Resorts", href: "/spaces" },
        { label: "Restaurants & Dining", href: "/spaces" },
        { label: "Commercial Office", href: "/architectural" },
        { label: "Heritage & Haveli", href: "/spaces" },
      ],
      featured: {
        title: "The Flagship Showroom",
        subtitle: "Experience LUMECASA",
        image: "/images/showroom-interior.jpg",
        href: "/showroom",
      },
    },
  },
  { label: "Architectural", href: "/architectural" },
  { label: "Gallery", href: "/gallery" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Trade", href: "/trade" },
];

const mockSearchData = [
  { name: "Spiral Pebble Chandelier", category: "Chandeliers", slug: "spiral-pebble-chandelier" },
  { name: "Royal Crystal Chandelier", category: "Chandeliers", slug: "royal-crystal-chandelier" },
  { name: "Wing & Leaf Chandelier", category: "Chandeliers", slug: "wing-leaf-chandelier" },
  { name: "Amber Glass Pendant Trio", category: "Pendant Lights", slug: "amber-glass-pendant-trio" },
  { name: "Elegance Figure Lamp", category: "Table Lamps", slug: "elegance-figure-lamp" },
  { name: "Geo Brass Wall Sconce", category: "Wall Lights", slug: "geo-brass-wall-sconce" },
];

export default function Header() {
  const { setIsDrawerOpen, totalItemCount } = useQuote();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when either mobile menu or search is open
  useEffect(() => {
    if (mobileOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  const searchResults = searchQuery.trim() === "" 
    ? [] 
    : mockSearchData.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (searchResults.length > 0) {
        router.push(`/collections/${searchResults[0].slug}`);
      } else {
        router.push(`/collections`);
      }
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || searchOpen || mobileOpen
            ? "glass-surface-strong py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={() => { setSearchOpen(false); setMobileOpen(false); }}
            className="flex items-center gap-2 group relative z-10" 
            id="header-logo"
          >
            <span
              className="text-2xl md:text-3xl tracking-[0.3em] font-light gold-gradient-text"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              LUMECASA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 h-full" id="desktop-nav">
            {navLinks.map((link) => (
              <div 
                key={link.href}
                className="relative py-6 group/navitem flex items-center"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`text-[0.8125rem] tracking-[0.15em] uppercase transition-colors duration-300 relative group ${
                    searchOpen ? "text-ivory/30" : "text-ivory/70 hover:text-gold-400"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold-400 transition-all duration-500 ${activeDropdown === link.label ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>

                {/* Mega Menu Dropdown */}
                {link.dropdown && (
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-[650px] bg-[#0c1322] border border-white/[0.08] p-8 rounded-md shadow-2xl transition-all duration-300 ${
                      activeDropdown === link.label 
                        ? "opacity-100 translate-y-0 visible" 
                        : "opacity-0 translate-y-4 invisible pointer-events-none"
                    }`}
                  >
                    <div className="flex gap-10">
                      {/* Left side: Links */}
                      <div className="w-[45%] flex flex-col justify-center">
                        <h3 className="text-gold-400 text-sm font-medium tracking-[0.05em] mb-6 underline underline-offset-8 decoration-gold-400/30">
                          {link.dropdown.title}
                        </h3>
                        <ul className="space-y-4">
                          {link.dropdown.links.map(sublink => (
                            <li key={sublink.label}>
                              <Link 
                                href={sublink.href} 
                                onClick={() => setActiveDropdown(null)}
                                className="text-sm text-ivory/80 hover:text-ivory hover:translate-x-1 transition-all inline-block"
                              >
                                {sublink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right side: Featured Card */}
                      <div className="w-[55%]">
                        <Link href={link.dropdown.featured.href} onClick={() => setActiveDropdown(null)} className="group/card block relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-navy-900 border border-white/5">
                          <Image
                            src={link.dropdown.featured.image}
                            alt={link.dropdown.featured.title}
                            fill
                            className="object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700"
                            sizes="(max-width: 768px) 100vw, 300px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322]/90 via-[#0c1322]/40 to-transparent flex flex-col justify-end p-6">
                            <span className="text-[10px] tracking-widest text-ivory/80 uppercase font-medium mb-2">
                              {link.dropdown.featured.subtitle}
                            </span>
                            <h4 className="text-lg text-ivory font-medium mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                              {link.dropdown.featured.title}
                            </h4>
                            <span className="btn-primary py-2 px-6 text-[10px] w-fit">
                              Shop Now <span className="ml-1">→</span>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4 relative z-10" id="header-actions">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 transition-colors ${searchOpen ? "text-gold-400" : "text-ivory/60 hover:text-gold-400"}`}
              aria-label="Search"
              id="search-btn"
            >
              {searchOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              )}
            </button>

            {/* Quote List Icon with Badge */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2 text-ivory/70 hover:text-gold-400 transition-colors flex items-center gap-2"
              aria-label="Open Quote List"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-[11px] uppercase tracking-wider hidden xl:inline">Quote List</span>
              {totalItemCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-gold-400 text-navy-950 text-[10px] font-bold flex items-center justify-center -mt-2 -ml-1 shadow-md animate-pulse">
                  {totalItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu & Search Buttons */}
          <div className="lg:hidden flex items-center gap-3 relative z-10">
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                if (mobileOpen) setMobileOpen(false);
              }}
              className={`p-2 transition-colors ${searchOpen ? "text-gold-400" : "text-ivory/80 hover:text-gold-400"}`}
              aria-label="Toggle search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <button
              onClick={() => {
                setMobileOpen(!mobileOpen);
                if (searchOpen) setSearchOpen(false);
              }}
              className="p-2 text-ivory/80 hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              <div className="w-6 flex flex-col gap-[5px]">
                <span className={`h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                <span className={`h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════ SEARCH OVERLAY ═══════════════ */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-md" onClick={() => setSearchOpen(false)} />
        
        <div className="relative h-full flex flex-col pt-32 px-6 max-w-4xl mx-auto">
          {/* Search Input */}
          <form onSubmit={handleSearchSubmit} className={`w-full transition-all duration-700 delay-100 ${searchOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}>
            <div className="relative border-b border-white/20 pb-4 flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-400 mr-4">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input 
                type="text" 
                autoFocus={searchOpen}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search collections, spaces, or products..."
                className="w-full bg-transparent text-2xl md:text-4xl font-light text-ivory placeholder:text-ivory/20 focus:outline-none"
                style={{ fontFamily: "var(--font-heading)" }}
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery("")}
                  className="p-2 text-ivory/40 hover:text-ivory transition-colors absolute right-0"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </form>

          {/* Search Results Area */}
          <div className={`mt-12 flex-1 overflow-y-auto transition-all duration-700 delay-200 ${searchOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            {searchQuery.trim() === "" ? (
              // Empty State (Trending)
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-ivory/40 mb-6">Trending Searches</p>
                <div className="flex flex-wrap gap-3">
                  {["Chandeliers", "Wall Lights", "Architectural", "Hotel Lighting"].map(term => (
                    <button 
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-4 py-2 rounded-full border border-white/10 text-sm text-ivory/70 hover:border-gold-400/50 hover:text-gold-400 transition-colors bg-white/[0.02]"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Results State
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-ivory/40 mb-6">
                  {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} found
                </p>
                {searchResults.length > 0 ? (
                  <ul className="space-y-4">
                    {searchResults.map((product) => (
                      <li key={product.slug}>
                        <Link 
                          href={`/collections/${product.slug}`}
                          onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                          className="group flex items-center justify-between p-4 rounded-sm hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/[0.05]"
                        >
                          <div>
                            <h4 className="text-lg text-ivory group-hover:text-gold-300 transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                              {product.name}
                            </h4>
                            <p className="text-xs text-ivory/40 uppercase tracking-widest mt-1">
                              {product.category}
                            </p>
                          </div>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ivory/20 group-hover:text-gold-400 group-hover:translate-x-1 transition-all">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-20 border border-white/[0.05] rounded-sm bg-white/[0.02]">
                    <p className="text-ivory/50">No results found for "{searchQuery}"</p>
                    <p className="text-sm text-ivory/30 mt-2">Try searching for generic terms like 'Lamp' or 'Chandelier'.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════ MOBILE FULL-SCREEN MENU ═══════════════ */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        id="mobile-nav"
      >
        <div className="absolute inset-0 bg-navy-950/98 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className="relative h-full flex flex-col items-center justify-center gap-6 px-8 py-20 overflow-y-auto">
          {navLinks.map((link, i) => (
            <div key={link.href} className="w-full text-center">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl md:text-4xl tracking-[0.2em] uppercase text-ivory/80 hover:text-gold-400 transition-all duration-300 ${
                  mobileOpen ? "animate-fade-in-up" : ""
                }`}
                style={{
                  fontFamily: "var(--font-heading)",
                  animationDelay: `${i * 80}ms`,
                  opacity: mobileOpen ? undefined : 0,
                }}
              >
                {link.label}
              </Link>
              {/* If we wanted mobile dropdowns, we could render them here as accordions. For minimalism, we keep it simple. */}
            </div>
          ))}

          <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-xs">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full justify-center"
            >
              WhatsApp an Expert
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
