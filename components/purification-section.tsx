"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function PurificationSection() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [isVisible])

  return (
    <section
      ref={ref}
      id="purification"
      className={`py-20 bg-gradient-to-b from-background to-sky-50/40 scroll-animate ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
            PROCESS
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary heading-font">
            Advanced 8-Stage Multi-Barrier Purification Process
          </h2>

          <p className="mt-3 text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
  Our multi-barrier approach doesn't just filter water — it transforms it. Through eight rigorous purification stages including RO, UV, and Ozone technology, we eliminate bacteria, viruses, heavy metals, and dissolved impurities. Every stage serves a purpose. Every barrier adds protection. Every bottle delivers water you can trust completely.
</p>
        </div>

        {/* Image */}
        <div className="max-w-6xl mx-auto rounded-3xl border border-sky-200/60 bg-white shadow-sm p-4 md:p-8">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/images/purification-process.png"
              alt="Tatva Beverages purification process"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
