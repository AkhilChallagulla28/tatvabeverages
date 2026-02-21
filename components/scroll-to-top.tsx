"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-6 bottom-8 z-40 h-12 w-12 rounded-full bg-secondary text-primary-foreground shadow-lg hover:bg-secondary/90 transition-colors flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  )
}
