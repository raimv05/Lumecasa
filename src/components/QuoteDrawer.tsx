"use client";

import { useState } from "react";
import Image from "next/image";
import { useQuote } from "@/context/QuoteContext";

export default function QuoteDrawer() {
  const { quoteItems, isDrawerOpen, setIsDrawerOpen, removeFromQuote, updateQuantity, clearQuote, totalItemCount } = useQuote();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    projectType: "Residential Villa",
    timeline: "Immediate (1-2 weeks)",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isDrawerOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = () => {
    if (quoteItems.length === 0) return;
    
    let text = `*LUMECASA — Request For Quotation (RFQ)*\n\n`;
    text += `*Client Name:* ${formData.name || "Valued Client"}\n`;
    text += `*Phone:* ${formData.phone || "Not specified"}\n`;
    text += `*City/Location:* ${formData.city || "Mohali / Pan India"}\n`;
    text += `*Project Type:* ${formData.projectType}\n`;
    text += `*Timeline:* ${formData.timeline}\n\n`;
    text += `*Selected Lighting Fixtures:* \n`;

    quoteItems.forEach((item, idx) => {
      text += `${idx + 1}. *${item.product.name}*\n   - Finish: ${item.selectedFinish}\n   - Qty: ${item.quantity}\n`;
    });

    if (formData.notes) {
      text += `\n*Project Notes:* ${formData.notes}\n`;
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919876543210?text=${encoded}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quoteItems.length === 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomRef = "LMC-RFQ-" + Math.floor(100000 + Math.random() * 900000);
      setIsSubmitting(false);
      setSubmittedRef(randomRef);
      clearQuote();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer Content */}
      <div className="relative z-10 w-full max-w-xl bg-[#080d19] border-l border-white/[0.08] h-full flex flex-col shadow-2xl text-ivory overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-navy-950">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-gold-400 font-semibold block mb-1">
              Lumecasa Luxury Concierge
            </span>
            <h2 className="text-xl font-light tracking-wide font-heading text-ivory">
              Your Quote List ({totalItemCount})
            </h2>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ivory/60 hover:text-ivory hover:border-gold-400/40 transition-colors"
            aria-label="Close quote drawer"
          >
            ✕
          </button>
        </div>

        {/* Success Screen */}
        {submittedRef ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400 flex items-center justify-center text-gold-400 text-2xl mb-6">
              ✓
            </div>
            <h3 className="text-2xl font-light text-ivory mb-2 font-heading">
              Quotation Request Received
            </h3>
            <p className="text-xs text-gold-400 uppercase tracking-widest mb-6">
              Reference: #{submittedRef}
            </p>
            <p className="text-sm text-ivory/70 max-w-md leading-relaxed mb-8">
              Thank you, <span className="text-ivory font-medium">{formData.name || "Valued Client"}</span>. Our senior lighting design team will prepare your custom pricing, finish samples, and technical drawings within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmittedRef(null);
                setIsDrawerOpen(false);
              }}
              className="btn-primary"
            >
              Back to Showroom
            </button>
          </div>
        ) : (
          /* Main Drawer Body */
          <div className="flex-1 overflow-y-auto p-6 space-y-8 hide-scrollbar">
            {quoteItems.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-ivory/30 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-ivory/60 text-sm mb-6">Your quote list is currently empty.</p>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="btn-primary py-3 text-xs"
                >
                  Explore Collections
                </button>
              </div>
            ) : (
              <>
                {/* List of Items */}
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-ivory/60 font-semibold border-b border-white/[0.06] pb-2">
                    Selected Items ({quoteItems.length})
                  </h3>
                  {quoteItems.map((item, index) => (
                    <div 
                      key={`${item.product.id}-${item.selectedFinish}-${index}`}
                      className="flex gap-4 p-4 bg-white/[0.02] border border-white/[0.06] rounded-sm relative group"
                    >
                      <div className="relative w-20 aspect-[3/4] rounded overflow-hidden shrink-0 border border-white/10">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-medium text-ivory">{item.product.name}</h4>
                            <button
                              onClick={() => removeFromQuote(item.product.id, item.selectedFinish)}
                              className="text-ivory/40 hover:text-red-400 text-xs transition-colors p-1"
                              title="Remove item"
                            >
                              ✕
                            </button>
                          </div>
                          <p className="text-xs text-gold-400/80 mt-1">Finish: {item.selectedFinish}</p>
                          <p className="text-[10px] text-ivory/40 uppercase tracking-widest mt-0.5">{item.product.category}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <span className="text-xs text-ivory/50">Qty:</span>
                          <div className="flex items-center border border-white/10 rounded overflow-hidden bg-navy-950">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedFinish, item.quantity - 1)}
                              className="px-2 py-1 text-xs text-ivory/60 hover:text-ivory hover:bg-white/5 transition-colors"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 text-xs font-semibold text-ivory">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedFinish, item.quantity + 1)}
                              className="px-2 py-1 text-xs text-ivory/60 hover:text-ivory hover:bg-white/5 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Form Information */}
                <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-white/[0.08]">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-ivory/60 font-semibold mb-3">
                    Project & Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-ivory/50 mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Vikramaditya Singh"
                        className="w-full bg-white/[0.04] border border-white/10 rounded px-3 py-2 text-xs text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-ivory/50 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/[0.04] border border-white/10 rounded px-3 py-2 text-xs text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-ivory/50 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="client@luxuryhome.com"
                        className="w-full bg-white/[0.04] border border-white/10 rounded px-3 py-2 text-xs text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-ivory/50 mb-1">City / Location</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g. Chandigarh / New Delhi"
                        className="w-full bg-white/[0.04] border border-white/10 rounded px-3 py-2 text-xs text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-ivory/50 mb-1">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-[#0d1424] border border-white/10 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold-400"
                      >
                        <option value="Residential Villa">Residential Villa / Home</option>
                        <option value="Hotel / Resort">Hotel & Resort</option>
                        <option value="Restaurant / Lounge">Restaurant & Lounge</option>
                        <option value="Commercial Office">Commercial Office</option>
                        <option value="Heritage Site">Heritage / Temple</option>
                        <option value="Trade / Architect Inquiry">Trade / Architect Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-ivory/50 mb-1">Project Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full bg-[#0d1424] border border-white/10 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold-400"
                      >
                        <option value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</option>
                        <option value="Within 1 Month">Within 1 Month</option>
                        <option value="2-3 Months">2-3 Months</option>
                        <option value="Planning Phase">Planning Phase</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-ivory/50 mb-1">Custom Notes / Ceiling Height</label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Specify double-height ceiling dimensions, finish customization requests, or floor plans..."
                      className="w-full bg-white/[0.04] border border-white/10 rounded px-3 py-2 text-xs text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-xs uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Instant RFQ via WhatsApp
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 btn-primary justify-center text-xs"
                    >
                      {isSubmitting ? "Processing..." : "Submit Quotation Request"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
