"use client"

import { useRef, useEffect, useState } from "react"
import {
  Hotel,
  UtensilsCrossed,
  Beer,
  Coffee,
  PartyPopper,
  GraduationCap,
  Car,
  Building2,
  MapPinned,
  HeartPulse,
  Clapperboard,
  Gem,
} from "lucide-react"

export function B2BSection() {
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

  const categories = [
    { name: "Hotels", icon: Hotel },
    { name: "Restaurants", icon: UtensilsCrossed },
    { name: "Pubs", icon: Beer },
    { name: "Café`s", icon: Coffee },
    { name: "Banquet halls", icon: PartyPopper },
    { name: "Educational Institutions", icon: GraduationCap },
    { name: "Automotive Showrooms", icon: Car },
    { name: "Corporate Houses", icon: Building2 },
    { name: "Tours & Travel", icon: MapPinned },
    { name: "Hospitals", icon: HeartPulse },
    { name: "Movie Theatres", icon: Clapperboard },
    { name: "Jewelry & fashion stores", icon: Gem },
  ]

  return (
    <section
      ref={ref}
      id="b2b"
      className={`py-16 bg-muted scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            B2B Solutions
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Private-label water solutions for businesses that want premium branding, clean packaging, and reliable supply.
          </p>
        </div>

        {/* 12 Categories (4 per row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {categories.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.name}
                className="group rounded-2xl border border-sky-200/60 bg-white shadow-sm p-5 hover:shadow-md hover:-translate-y-[2px] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                    <Icon className="h-6 w-6 text-sky-700" />
                  </div>

                  <p className="text-base font-semibold text-primary leading-snug">
                    {item.name}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom line */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Turn every bottle into a brand experience — clean design, premium feel, and consistent supply for bulk orders.
          </p>
        </div>
      </div>
    </section>
  )
}
