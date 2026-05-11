"use client";

import { useEffect, useRef } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

/**
 * Attaches an IntersectionObserver to a container ref.
 * All `.reveal` children within it animate in when scrolled into view,
 * with optional stagger delay on `.reveal-item` children.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.12, staggerChildren = false, staggerDelay = 80 } =
    options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            // Stagger siblings if requested
            if (staggerChildren) {
              const siblings = Array.from(
                target.parentElement?.querySelectorAll(".reveal") ?? []
              );
              const idx = siblings.indexOf(target);
              target.style.transitionDelay = `${idx * staggerDelay}ms`;
            }
            target.classList.add("in-view");
            observer.unobserve(target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold, staggerChildren, staggerDelay]);

  return ref;
}
