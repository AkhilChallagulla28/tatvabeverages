"use client"

import Image from "next/image"
import { useScrollFade } from "@/hooks/useScrollFade"

export function PurificationSection() {
  const { ref: headRef, visible: headVisible } = useScrollFade<HTMLDivElement>()
  const { ref: imgRef, visible: imgVisible } = useScrollFade<HTMLDivElement>()

  return (
    <section id="purification" className="section-py bg-gradient-to-b from-background to-sky-50/40">
      <div className="site-container">
        {/* Heading */}
        <div
          ref={headRef}
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
          }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
            PROCESS
          </div>

          <h2 className="mt-4 h2-scale font-bold text-primary heading-font">
            Advanced 8-Stage Multi-Barrier Purification Process
          </h2>

          <p className="mt-3 text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Our multi-barrier approach doesn&apos;t just filter water — it transforms it. Through eight rigorous purification stages including RO, UV, and Ozone technology, we eliminate bacteria, viruses, heavy metals, and dissolved impurities. Every stage serves a purpose. Every barrier adds protection. Every bottle delivers water you can trust completely.
          </p>
        </div>

        {/* Image */}
        <div
          ref={imgRef}
          style={{
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
            transitionDelay: "0.12s",
          }}
          className="max-w-5xl mx-auto rounded-3xl border border-sky-200/60 bg-white shadow-sm p-4 md:p-8"
        >
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
