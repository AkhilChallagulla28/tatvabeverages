"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimate<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isVisible }
}
