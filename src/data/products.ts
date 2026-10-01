export interface Product {
  id: string;
  name: string;
  category: "Chandeliers" | "Pendant Lights" | "Wall Lights" | "Table Lamps" | "Floor Lamps" | "Architectural";
  finish: string;
  finishes: string[];
  image: string;
  galleryImages: string[];
  slug: string;
  space: "Living Room" | "Dining" | "Bedroom" | "Villa" | "Hotel" | "Restaurant" | "Outdoor" | "Commercial" | "Heritage";
  style: "Luxury" | "Modern" | "Classic" | "Sculptural" | "Minimal";
  description: string;
  price: string;
  materials: string[];
  dimensions: {
    diameter: string;
    height: string;
    weight: string;
  };
  specs: {
    lightSource: string;
    wattage: string;
    colorTemp: string;
    voltage: string;
    ipRating: string;
    dimmable: string;
  };
  isNew?: boolean;
  isFeatured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Spiral Pebble Chandelier",
    category: "Chandeliers",
    finish: "Champagne Gold",
    finishes: ["Champagne Gold", "Brushed Brass", "Matte Black"],
    image: "/images/chandelier-spiral.jpg",
    galleryImages: [
      "/images/chandelier-spiral.jpg",
      "/images/showroom-interior.jpg",
      "/images/lifestyle-living.jpg"
    ],
    slug: "spiral-pebble-chandelier",
    space: "Living Room",
    style: "Luxury",
    description: "An architectural statement piece featuring hand-blown amber and smoke glass pebbles suspended on a helical brass frame. Designed to cascade through double-height spaces and grand staircases.",
    price: "Price upon request",
    materials: ["Hand-blown Glass", "Solid Brass", "Aircraft-grade Steel Cables"],
    dimensions: {
      diameter: "1200mm",
      height: "3500mm (Adjustable)",
      weight: "45kg"
    },
    specs: {
      lightSource: "Integrated LED",
      wattage: "120W",
      colorTemp: "2700K Warm White",
      voltage: "110-240V",
      ipRating: "IP20 (Indoor)",
      dimmable: "Yes (DALI / Phase-cut)"
    },
    isFeatured: true
  },
  {
    id: "2",
    name: "Royal Crystal Chandelier",
    category: "Chandeliers",
    finish: "Crystal & Brass",
    finishes: ["Crystal & Brass", "Polished Chrome", "Rose Gold"],
    image: "/images/chandelier-crystal.jpg",
    galleryImages: [
      "/images/chandelier-crystal.jpg",
      "/images/space-hotel.jpg",
      "/images/showroom-interior.jpg"
    ],
    slug: "royal-crystal-chandelier",
    space: "Dining",
    style: "Classic",
    description: "Multi-tiered K9 crystal drops suspended from a handcrafted electroplated brass frame. Casts prism reflections across dining spaces and ballrooms.",
    price: "Price upon request",
    materials: ["Precision K9 Crystal", "Electroplated Brass", "Silicone Gaskets"],
    dimensions: {
      diameter: "1400mm",
      height: "1800mm",
      weight: "62kg"
    },
    specs: {
      lightSource: "E14 LED Bulbs x 24",
      wattage: "144W Total",
      colorTemp: "2800K Warm Gold",
      voltage: "220-240V",
      ipRating: "IP20",
      dimmable: "Yes (Triac Dimmable)"
    },
    isFeatured: true
  },
  {
    id: "3",
    name: "Wing & Leaf Chandelier",
    category: "Chandeliers",
    finish: "Metallic Gold",
    finishes: ["Metallic Gold", "Satin Silver", "Antique Bronze"],
    image: "/images/chandelier-wing.jpg",
    galleryImages: [
      "/images/chandelier-wing.jpg",
      "/images/space-hotel.jpg",
      "/images/lifestyle-living.jpg"
    ],
    slug: "wing-leaf-chandelier",
    space: "Hotel",
    style: "Modern",
    description: "Organic feather-shaped illuminated acrylic leaves arranged in a sweeping radial formation. Inspired by avian movement and modern botanical aesthetics.",
    price: "Price upon request",
    materials: ["Laser-cut Acrylic", "Anodized Aluminum", "LED Diffusers"],
    dimensions: {
      diameter: "1600mm",
      height: "950mm",
      weight: "38kg"
    },
    specs: {
      lightSource: "Custom High-CRI LED Strips",
      wattage: "95W",
      colorTemp: "3000K Soft White",
      voltage: "100-240V",
      ipRating: "IP20",
      dimmable: "Yes (0-10V / DALI)"
    },
    isFeatured: true
  },
  {
    id: "4",
    name: "Amber Glass Pendant Trio",
    category: "Pendant Lights",
    finish: "Amber & Champagne",
    finishes: ["Amber & Champagne", "Smoky Grey", "Clear Quartz"],
    image: "/images/pendant-glass.jpg",
    galleryImages: [
      "/images/pendant-glass.jpg",
      "/images/lifestyle-living.jpg",
      "/images/showroom-interior.jpg"
    ],
    slug: "amber-glass-pendant-trio",
    space: "Restaurant",
    style: "Modern",
    description: "A cluster of three hand-blown flame amber glass globes suspended at varying heights with micro-textured woven cable suspensions.",
    price: "Price upon request",
    materials: ["Hand-blown Amber Glass", "Braided Textile Cable", "Brushed Brass Canopy"],
    dimensions: {
      diameter: "650mm (Cluster)",
      height: "1500mm (Drop)",
      weight: "14kg"
    },
    specs: {
      lightSource: "G9 LED Capsules x 3",
      wattage: "18W Total",
      colorTemp: "2500K Candle Warmth",
      voltage: "220-240V",
      ipRating: "IP20",
      dimmable: "Yes"
    },
    isFeatured: true
  },
  {
    id: "5",
    name: "Elegance Figure Lamp",
    category: "Table Lamps",
    finish: "Black Chrome & Gold",
    finishes: ["Black Chrome & Gold", "Matte White & Brass", "Gunmetal Gray"],
    image: "/images/lamp-sculptural.jpg",
    galleryImages: [
      "/images/lamp-sculptural.jpg",
      "/images/showroom-interior.jpg"
    ],
    slug: "elegance-figure-lamp",
    space: "Bedroom",
    style: "Sculptural",
    description: "An iconic decorative table sculpture featuring a stylized figure cradling a illuminated frosted glass orb. Blends fine art sculpture with warm task lighting.",
    price: "Price upon request",
    materials: ["Cast Resin with Metallic Finish", "Frosted Opal Glass", "Marble Base"],
    dimensions: {
      diameter: "320mm",
      height: "680mm",
      weight: "8.5kg"
    },
    specs: {
      lightSource: "G9 LED Bulb",
      wattage: "6W",
      colorTemp: "2700K Warm White",
      voltage: "110-240V",
      ipRating: "IP20",
      dimmable: "Inline Touch Dimmer"
    },
    isFeatured: true
  },
  {
    id: "6",
    name: "Geo Brass Wall Sconce",
    category: "Wall Lights",
    finish: "Brushed Brass",
    finishes: ["Brushed Brass", "Black & Gold", "Satin Nickel"],
    image: "/images/wall-light-brass.jpg",
    galleryImages: [
      "/images/wall-light-brass.jpg",
      "/images/lifestyle-living.jpg"
    ],
    slug: "geo-brass-wall-sconce",
    space: "Villa",
    style: "Minimal",
    description: "Geometric architectural sconce featuring dual bi-directional indirect light wash against textured walls. Perfect for corridors, suites, and entrance foyers.",
    price: "Price upon request",
    materials: ["Solid Machined Brass", "Diffusing Acrylic Lenses"],
    dimensions: {
      diameter: "180mm W x 450mm H",
      height: "450mm",
      weight: "3.2kg"
    },
    specs: {
      lightSource: "COB LED Modules",
      wattage: "12W Dual",
      colorTemp: "3000K Warm White",
      voltage: "220-240V",
      ipRating: "IP44 (Suitable for Bathrooms & Covered Entryways)",
      dimmable: "Yes"
    },
    isFeatured: true
  },
  {
    id: "7",
    name: "Façade Linear Beam Matrix",
    category: "Architectural",
    finish: "Dark Anodized Gray",
    finishes: ["Dark Anodized Gray", "Bronze", "Custom RAL"],
    image: "/images/facade-lighting.jpg",
    galleryImages: [
      "/images/facade-lighting.jpg",
      "/images/hero-storefront.jpg"
    ],
    slug: "facade-linear-beam-matrix",
    space: "Outdoor",
    style: "Modern",
    description: "Heavy-duty exterior architectural linear projector with precision optical lenses for long-throw facade accentuation and pillar highlighting.",
    price: "Price upon request",
    materials: ["Extruded Aluminum 6063", "Tempered Optical Glass", "Stainless Fasteners"],
    dimensions: {
      diameter: "1000mm L x 80mm W",
      height: "110mm",
      weight: "5.8kg"
    },
    specs: {
      lightSource: "CREE High Power LEDs",
      wattage: "48W",
      colorTemp: "3000K / RGBW DMX Controllable",
      voltage: "24V DC / 240V AC",
      ipRating: "IP67 Waterproof",
      dimmable: "DMX512 / DALI"
    }
  },
  {
    id: "8",
    name: "Showroom Monumental Ring Light",
    category: "Chandeliers",
    finish: "Brushed Champagne",
    finishes: ["Brushed Champagne", "Polished Brass", "Matte Black"],
    image: "/images/showroom-interior.jpg",
    galleryImages: [
      "/images/showroom-interior.jpg",
      "/images/space-hotel.jpg"
    ],
    slug: "showroom-monumental-ring-light",
    space: "Hotel",
    style: "Sculptural",
    description: "Interlocking concentric rings emitting perimeter and downward diffuse radiance. Engineered for grand hotel lobbies and high-ceiling atrium installations.",
    price: "Price upon request",
    materials: ["Seamless Curved Brass Alloy", "Opal Acrylic Diffuser"],
    dimensions: {
      diameter: "2200mm",
      height: "400mm (Ring Depth)",
      weight: "52kg"
    },
    specs: {
      lightSource: "Seamless Flexible LED Matrix",
      wattage: "160W",
      colorTemp: "2700K - 4000K Tunable White",
      voltage: "100-240V",
      ipRating: "IP20",
      dimmable: "Yes (DALI-2 / Casambi Wireless)"
    }
  }
];

export const getProductBySlug = (slug: string): Product => {
  const found = PRODUCTS.find((p) => p.slug === slug);
  if (found) return found;

  // Fallback default product if slug not found
  return {
    id: "fallback",
    name: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    category: "Chandeliers",
    finish: "Champagne Gold",
    finishes: ["Champagne Gold", "Brushed Brass", "Matte Black"],
    image: "/images/chandelier-spiral.jpg",
    galleryImages: [
      "/images/chandelier-spiral.jpg",
      "/images/showroom-interior.jpg",
      "/images/lifestyle-living.jpg"
    ],
    slug: slug,
    space: "Living Room",
    style: "Luxury",
    description: "An architectural masterpiece crafted with hand-finished materials and precision illumination engineering.",
    price: "Price upon request",
    materials: ["Solid Brass", "Hand-blown Glass"],
    dimensions: {
      diameter: "1200mm",
      height: "2400mm",
      weight: "35kg"
    },
    specs: {
      lightSource: "Integrated LED",
      wattage: "90W",
      colorTemp: "2700K Warm White",
      voltage: "110-240V",
      ipRating: "IP20",
      dimmable: "Yes"
    }
  };
};
