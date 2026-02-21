"use client"

import type { ReactNode } from "react"
import { useScrollFade } from "@/hooks/useScrollFade"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: string // e.g. "0.1s", "0.2s"
}

/**
 * ScrollReveal — wraps children in the canonical Tatva Beverages scroll animation.
 *
 * Matches the Contact page exactly:
 *   opacity: 0 → 1
 *   transform: translateY(36px) → translateY(0)
 *   transition: 0.75s ease
 */
export function ScrollReveal({ children, className, delay }: ScrollRevealProps) {
  const { ref, visible } = useScrollFade<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.75s ease, transform 0.75s ease",
        transitionDelay: delay ?? "0s",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
