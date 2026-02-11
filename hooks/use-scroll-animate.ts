"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimate<T extends HTMLElement>() {
  const ref = useRef<T>(null!)

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
