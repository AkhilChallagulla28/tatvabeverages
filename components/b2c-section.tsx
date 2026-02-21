"use client"

import { useScrollFade } from "@/hooks/useScrollFade"
import {
  HeartHandshake,
  Sparkles,
  PartyPopper,
  Baby,
  Cake,
  Glasses,
  Home,
  Store,
  MapPinned,
  Gem,
  Music,
  Trophy,
} from "lucide-react"

const events = [
  { name: "Weddings", icon: Gem },
  { name: "Engagement", icon: HeartHandshake },
  { name: "Sangeeth & Mehendi", icon: Sparkles },
  { name: "Reception", icon: PartyPopper },
  { name: "Cradle Ceremony", icon: Baby },
  { name: "Birthdays", icon: Cake },
  { name: "Bachelor Party", icon: Glasses },
  { name: "House  warming", icon: Home },
  { name: "Business Openings", icon: Store },
  { name: "Corporate Events", icon: Trophy },
  { name: "DJ / Music Nights", icon: Music },
  { name: "And more…", icon: MapPinned },
]

export function B2CSection() {
  const { ref: headRef, visible: headVisible } = useScrollFade<HTMLDivElement>()
  const { ref: gridRef, visible: gridVisible } = useScrollFade<HTMLDivElement>()

  return (
    <section id="b2c" className="section-py-sm bg-background">
      <div className="site-container">

        {/* Header */}
        <div
          ref={headRef}
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
          }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="h2-scale font-bold text-primary mb-4 md:mb-6 font-serif">
            B2C Solutions
          </h2>

          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every occasion and celebration in life — we cater personalized water bottles.
          </p>
        </div>

        {/* Events Grid */}
        <div
          ref={gridRef}
          style={{
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
            transitionDelay: "0.12s",
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto"
        >
          {events.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.name}
                className="rounded-2xl border border-sky-200/60 bg-white shadow-sm p-4 md:p-5 hover:shadow-md hover:-translate-y-[2px] transition-all flex items-center gap-3 md:gap-4 h-[90px] md:h-auto"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-sky-700" />
                </div>

                <p className="text-sm md:text-base font-semibold text-primary leading-snug flex-1">
                  {item.name}
                </p>
              </div>
            )
          })}
        </div>

        {/* Final Line */}
        <div className="mt-8 md:mt-10 text-center">
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We serve clients across India with a{" "}
            <span className="font-semibold text-[#00a0dc]">
              7-day turnaround,
            </span>{" "}
            ensuring your custom bottles arrive fresh and ready for{" "}
            <span className="font-semibold text-[#00a0dc]">
              Your Big Day.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}