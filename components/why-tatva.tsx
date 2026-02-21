"use client"

import { useScrollFade } from "@/hooks/useScrollFade"
import Image from "next/image"
import { BadgeCheck, Sparkles, Truck, ShieldCheck } from "lucide-react"

const points = [
  {
    icon: BadgeCheck,
    title: "BIS Certified Quality",
    desc: "Strict quality checks to ensure safe, consistent packaged drinking water.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Purity Standards",
    desc: "Multi-stage filtration focused on taste, clarity, and reliability.",
  },
  {
    icon: Sparkles,
    title: "Custom Branding Support",
    desc: "Your identity on every bottle — clean, premium and professional.",
  },
  {
    icon: Truck,
    title: "Consistent Supply & Delivery",
    desc: "Fast timelines and dependable supply for events and business orders.",
  },
]

export function WhyChooseTatva() {
  const { ref: headRef, visible: headVisible } = useScrollFade<HTMLDivElement>()
  const { ref: leftRef, visible: leftVisible } = useScrollFade<HTMLDivElement>()
  const { ref: rightRef, visible: rightVisible } = useScrollFade<HTMLDivElement>()

  return (
    <section
      id="why-tatva"
      className="py-20 bg-gradient-to-b from-white via-sky-50/40 to-white"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headRef}
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
            TRUST + QUALITY
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-primary heading-font">
            Why brands choose Tatva
          </h2>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We don&apos;t just deliver water — we deliver consistency, presentation, and reliable supply that reflects your
            brand standards.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* LEFT - clean list */}
          <div
            ref={leftRef}
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? "translateY(0)" : "translateY(36px)",
              transition: "opacity 0.75s ease, transform 0.75s ease",
              transitionDelay: "0.05s",
            }}
            className="space-y-6"
          >
            {points.map((p, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl border border-sky-200/60 bg-white/70 backdrop-blur-md p-6 shadow-sm"
              >
                <div className="h-12 w-12 rounded-2xl bg-sky-100 flex items-center justify-center shrink-0">
                  <p.icon className="h-6 w-6 text-sky-700" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - bottle showcase panel */}
          <div
            ref={rightRef}
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? "translateY(0)" : "translateY(36px)",
              transition: "opacity 0.75s ease, transform 0.75s ease",
              transitionDelay: "0.18s",
            }}
            className="relative rounded-3xl border border-sky-200/60 bg-white shadow-sm overflow-hidden"
          >
            {/* soft glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
            </div>

            <div className="relative p-10">
              <p className="text-xs font-semibold tracking-widest text-sky-700 uppercase">
                Premium Brand Experience
              </p>

              <h3 className="mt-3 text-3xl font-bold text-primary heading-font">
                Clean look. Strong trust. Fast supply.
              </h3>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tatva is built for brands that care about presentation, consistency, and timely delivery.
                Every order is handled with professional quality checks and clean finishing.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-sky-200/60 bg-white p-5 shadow-sm">
                  <p className="font-bold text-primary">✅ Sizes supported</p>
                  <p className="text-sm text-muted-foreground mt-1">250ml • 500ml • 1L</p>
                </div>

                <div className="rounded-2xl border border-sky-200/60 bg-white p-5 shadow-sm">
                  <p className="font-bold text-primary">✅ Best for events + businesses</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hotels, restaurants, corporate supply, weddings &amp; celebrations.
                  </p>
                </div>

                <div className="rounded-2xl border border-sky-200/60 bg-gradient-to-r from-sky-50 via-white to-sky-50 p-5 shadow-sm">
                  <p className="font-bold text-primary">✅ Smooth ordering</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Share your requirement → confirm quote → production → delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
