"use client"

import { useEffect, useRef, useState } from "react"

/**
 * useScrollFade — the canonical scroll animation hook for Tatva Beverages.
 *
 * Matches the Contact page animation exactly:
 *   opacity: 0 → 1
 *   transform: translateY(36px) → translateY(0)
 *   transition: 0.75s ease
 *   threshold: 0.12
 *
 * Usage:
 *   const { ref, visible } = useScrollFade<HTMLDivElement>()
 *   <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)", transition: "opacity 0.75s ease, transform 0.75s ease" }} />
 */
export function useScrollFade<T extends HTMLElement = HTMLElement>() {
    const ref = useRef<T | null>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (typeof window === "undefined") return

        const el = ref.current
        if (!el) return

        // Respect user preference for reduced motion
        const prefersReducedMotion = window.matchMedia?.(
            "(prefers-reduced-motion: reduce)"
        ).matches
        if (prefersReducedMotion) {
            setVisible(true)
            return
        }

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    obs.disconnect()
                }
            },
            { threshold: 0.12 }
        )

        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return { ref, visible }
}
