"use client"

import { useRef, useEffect, useState } from "react"
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
      id="b2c"
      className={`py-10 md:py-16 bg-background scroll-animate ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-6 font-serif">
            B2C Solutions
          </h2>

          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every occasion and celebration in life — we cater personalized water bottles.
          </p>
        </div>

        {/* Events Grid - FIXED VERSION */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto">
          {events.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.name}
                className="rounded-2xl border border-sky-200/60 bg-white shadow-sm p-4 md:p-5 hover:shadow-md hover:-translate-y-[2px] transition-all flex items-center gap-3 md:gap-4 h-[90px] md:h-auto"
              >
                {/* Icon - Fixed size container */}
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-sky-700" />
                </div>

                {/* Text - Allows wrapping */}
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