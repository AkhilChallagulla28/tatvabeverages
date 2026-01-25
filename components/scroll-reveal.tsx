"use client"

import type React from "react"
import { useScrollAnimate } from "@/hooks/use-scroll-animate"

export function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, isVisible } = useScrollAnimate<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  )
}
