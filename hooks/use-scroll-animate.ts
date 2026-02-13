"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimate<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isVisible }
}

