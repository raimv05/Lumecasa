import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { QuoteProvider } from "@/context/QuoteContext";
import QuoteDrawer from "@/components/QuoteDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LUMECASA — Illuminating Luxury | Premium Decorative & Architectural Lighting",
  description:
    "LUMECASA crafts premium decorative chandeliers, pendant lights, wall sconces, and architectural façade lighting. Visit our showroom in Sec. 82, JLPL, Mohali. Luxury lighting for homes, villas, hotels, and commercial spaces.",
  keywords: [
    "luxury lighting",
    "chandeliers",
    "decorative lighting",
    "architectural lighting",
    "facade lighting",
    "premium lighting Mohali",
    "lighting showroom",
    "custom lighting",
    "villa lighting",
    "hotel lighting",
  ],
  openGraph: {
    title: "LUMECASA — Illuminating Luxury",
    description:
      "Premium decorative & architectural lighting crafted to transform spaces.",
    type: "website",
    locale: "en_IN",
    siteName: "LUMECASA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-navy-950 text-ivory">
        <QuoteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
          <QuoteDrawer />
        </QuoteProvider>
      </body>
    </html>
  );
}
