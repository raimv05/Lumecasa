import Link from "next/link";

const footerCollections = [
  { label: "Chandeliers", href: "/collections/chandeliers" },
  { label: "Pendant Lights", href: "/collections/pendants" },
  { label: "Wall Lights", href: "/collections/wall-lights" },
  { label: "Table Lamps", href: "/collections/table-lamps" },
  { label: "Floor Lamps", href: "/collections/floor-lamps" },
  { label: "Sculptural & Novelty", href: "/collections/sculptural" },
];

const footerServices = [
  { label: "Lighting Consultation", href: "/services/consultation" },
  { label: "Custom Lighting", href: "/services/custom" },
  { label: "Installation", href: "/services/installation" },
  { label: "Architectural Lighting", href: "/architectural" },
  { label: "Trade Enquiry", href: "/trade" },
];

const footerCompany = [
  { label: "Our Story", href: "/about" },
  { label: "Manufacturing", href: "/about/manufacturing" },
  { label: "Projects", href: "/projects" },
  { label: "Showroom", href: "/showroom" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.06]" id="footer">
      {/* Main Footer */}
      <div className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span
                className="text-2xl tracking-[0.3em] font-light gold-gradient-text"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                LUMECASA
              </span>
            </Link>
            <p className="text-ivory/50 text-sm leading-relaxed mb-6 max-w-xs">
              Illuminating luxury. Premium decorative and architectural lighting
              crafted to transform spaces.
            </p>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/lumecasa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ivory/50 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/lumecasa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ivory/50 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com/lumecasa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ivory/50 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-6 font-semibold">
              Collections
            </h4>
            <ul className="space-y-3">
              {footerCollections.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/50 hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-6 font-semibold">
              Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/50 hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit & Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-6 font-semibold">
              Visit Us
            </h4>
            <div className="space-y-4 text-sm text-ivory/50">
              <div>
                <p className="text-ivory/70 font-medium">LUMECASA Showroom</p>
                <p>Sec. 82, JLPL, Mohali</p>
                <p>Punjab, India</p>
              </div>
              <div>
                <p className="text-ivory/70 font-medium">Hours</p>
                <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+919876543210"
                  className="text-ivory/50 hover:text-gold-400 transition-colors"
                >
                  +91 98765 43210
                </a>
                <a
                  href="mailto:info@lumecasa.com"
                  className="text-ivory/50 hover:text-gold-400 transition-colors"
                >
                  info@lumecasa.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.04]">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/30 tracking-wide">
            © {new Date().getFullYear()} LUMECASA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-ivory/30 hover:text-ivory/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-ivory/30 hover:text-ivory/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
