"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  id,
}: SectionRevealProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
