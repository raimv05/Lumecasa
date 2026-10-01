"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface Interactive3DViewerProps {
  imageSrc: string;
  alt: string;
  productName: string;
  category: string;
}

export default function Interactive3DViewer({
  imageSrc,
  alt,
  productName,
  category,
}: Interactive3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Hide hint after first interaction
  useEffect(() => {
    if (hasInteracted) {
      const timer = setTimeout(() => setShowHint(false), 600);
      return () => clearTimeout(timer);
    }
  }, [hasInteracted]);

  // Auto-gentle rotation when idle
  useEffect(() => {
    if (hasInteracted || isDragging) return;
    let animId: number;
    let angle = 0;
    const animate = () => {
      angle += 0.15;
      setRotation({ x: Math.sin(angle * 0.02) * 3, y: Math.sin(angle * 0.03) * 5 });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [hasInteracted, isDragging]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      setHasInteracted(true);
      setLastPos({ x: e.clientX, y: e.clientY });
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastPos.x;
      const deltaY = e.clientY - lastPos.y;
      setRotation((prev) => ({
        x: Math.max(-25, Math.min(25, prev.x - deltaY * 0.3)),
        y: prev.y + deltaX * 0.3,
      }));
      setLastPos({ x: e.clientX, y: e.clientY });
    },
    [isDragging, lastPos]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setHasInteracted(true);
    setScale((prev) => Math.max(0.6, Math.min(2.5, prev - e.deltaY * 0.001)));
  }, []);

  const handleReset = useCallback(() => {
    setRotation({ x: 0, y: 0 });
    setScale(1);
  }, []);

  // Touch support
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setHasInteracted(true);
      setLastPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - lastPos.x;
      const deltaY = e.touches[0].clientY - lastPos.y;
      setRotation((prev) => ({
        x: Math.max(-25, Math.min(25, prev.x - deltaY * 0.3)),
        y: prev.y + deltaX * 0.3,
      }));
      setLastPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    },
    [isDragging, lastPos]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="space-y-4">
      {/* Viewer Container */}
      <div
        ref={containerRef}
        className={`relative aspect-[16/9] max-w-4xl mx-auto rounded-sm overflow-hidden border transition-all duration-300 select-none ${
          isDragging
            ? "border-gold-400/40 shadow-[0_0_40px_rgba(212,164,56,0.15)]"
            : "border-white/[0.06] hover:border-white/[0.12]"
        }`}
        style={{ perspective: "1200px", cursor: isDragging ? "grabbing" : "grab" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 3D Transformed Image */}
        <div
          className="absolute inset-0 transition-transform"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
            transformStyle: "preserve-3d",
            transitionDuration: isDragging ? "0ms" : "300ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 1024px) 100vw, 1000px"
            quality={90}
            draggable={false}
          />

          {/* Dynamic Light Reflection */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(
                ellipse at ${50 + rotation.y * 1.5}% ${50 - rotation.x * 1.5}%,
                rgba(212, 164, 56, ${0.08 + Math.abs(rotation.y) * 0.003}),
                transparent 60%
              )`,
            }}
          />
        </div>

        {/* Ambient vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(5,10,20,0.5) 100%)",
        }} />

        {/* Interaction Hint Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none ${
            showHint ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-navy-950/60 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-3 border border-white/10">
            {/* Animated drag icon */}
            <div className="relative w-8 h-8">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-gold-400 animate-[float_2s_ease-in-out_infinite]"
              >
                <path d="M14 4.5V14a2 2 0 004 0V9" />
                <path d="M18 9v5a2 2 0 004 0V7" />
                <path d="M10 4v10a2 2 0 004 0V4.5" />
                <path d="M6 7v7a2 2 0 004 0V5" />
                <path d="M6 14a6 6 0 006 6h.5" />
              </svg>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-gold-400 font-medium">
                Drag to Rotate
              </p>
              <p className="text-[10px] text-ivory/40 mt-0.5">
                Scroll to zoom in/out
              </p>
            </div>
          </div>
        </div>

        {/* Rotation Indicator Ring - appears while dragging */}
        {isDragging && (
          <div className="absolute top-4 right-4 pointer-events-none">
            <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-400 animate-spin" style={{ animationDuration: "3s" }}>
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path d="M12 3v3M12 18v3" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between max-w-4xl mx-auto px-1">
        {/* Product Info */}
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold-400/60">
            {category}
          </p>
          <p className="text-sm text-ivory/70 font-light">
            {productName}
          </p>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-2">
          {/* Zoom In */}
          <button
            onClick={() => {
              setHasInteracted(true);
              setScale((s) => Math.min(2.5, s + 0.2));
            }}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-ivory/40 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
            aria-label="Zoom in"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35M8 11h6M11 8v6" />
            </svg>
          </button>

          {/* Zoom Out */}
          <button
            onClick={() => {
              setHasInteracted(true);
              setScale((s) => Math.max(0.6, s - 0.2));
            }}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-ivory/40 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
            aria-label="Zoom out"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35M8 11h6" />
            </svg>
          </button>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-ivory/40 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
            aria-label="Reset view"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>

          {/* Fullscreen placeholder */}
          <button
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-ivory/40 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
            aria-label="Fullscreen"
            onClick={() => {
              if (containerRef.current) {
                if (document.fullscreenElement) {
                  document.exitFullscreen();
                } else {
                  containerRef.current.requestFullscreen();
                }
              }
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 3H5a2 2 0 00-2 2v3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
