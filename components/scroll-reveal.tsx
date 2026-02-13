"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    if (typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const node = ref.current

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

  const baseClasses =
    "opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"

  const visibleClasses = "opacity-100 translate-y-0"

  return (
    <div
      ref={ref}
      className={cn(
        baseClasses,
        isVisible && visibleClasses,
        className
      )}
    >
      {children}
    </div>
  )
}

