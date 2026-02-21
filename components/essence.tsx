"use client"

import Link from "next/link"
import Image from "next/image"
import { ShieldCheck, BadgeCheck, FlaskConical, Package, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { useScrollFade } from "@/hooks/useScrollFade"

export function Essence() {
  // Mount-based animation for hero content (exactly like ContactHero)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Scroll-based animation for the bottle panel
  const { ref: bottleRef, visible: bottleVisible } = useScrollFade<HTMLDivElement>()

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden bg-gradient-to-b from-sky-50 via-background to-muted/30">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-160px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute right-[-180px] top-[140px] h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-[-200px] bottom-[-200px] h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT — staggered mount animation matching ContactHero */}
          <div className="text-center lg:text-left">
            {/* Label */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "0.1s",
              }}
              className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700"
            >
              <Sparkles className="h-4 w-4" />
              PREMIUM PRIVATE LABEL WATER
            </div>

            {/* H1 */}
            <h1
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.22s",
              }}
              className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-primary font-serif tracking-tight"
            >
              Essence in Every Drop
            </h1>

            {/* Subtext */}
            <p
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.38s",
              }}
              className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Custom-labeled packaged drinking water for hotels, restaurants, corporate offices and events —
              delivered fresh, sealed, and brand-ready.
            </p>

            {/* Trust badges */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.52s",
              }}
              className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-sky-700" />
                FSSAI Licensed
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
                <BadgeCheck className="h-4 w-4 text-sky-700" />
                BIS Certified
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
                <FlaskConical className="h-4 w-4 text-sky-700" />
                RO + UV + Ozone
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
                <Package className="h-4 w-4 text-sky-700" />
                Hygienic Packaging
              </span>
            </div>

            {/* CTA button */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.66s",
              }}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="px-7 py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
              >
                Get Pricing on WhatsApp
              </Link>
            </div>
          </div>

          {/* RIGHT BOTTLE MOCKUP — scroll-based animation */}
          <div
            ref={bottleRef}
            style={{
              opacity: bottleVisible ? 1 : 0,
              transform: bottleVisible ? "translateY(0)" : "translateY(36px)",
              transition: "opacity 0.75s ease, transform 0.75s ease",
              transitionDelay: "0.1s",
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[330px] md:w-[380px] lg:w-[420px]">
              <div className="absolute -inset-6 rounded-[40px] bg-sky-200/20 blur-2xl" />

              <div className="relative rounded-[32px] border border-sky-200/60 bg-white/70 p-6 shadow-xl backdrop-blur">
                <Image
                  src="/images/tatva-bottle-mockup.png"
                  alt="Tatva custom-labeled packaged drinking water bottle"
                  width={700}
                  height={1400}
                  className="h-auto w-full object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
