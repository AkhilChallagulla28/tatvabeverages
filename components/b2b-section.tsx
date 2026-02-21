"use client"

import { useFadeIn } from "@/hooks/useFadeIn"
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
  const { ref, visible } = useFadeIn()

  const categories = [
    { name: "Hotels", icon: Hotel },
    { name: "Restaurants", icon: UtensilsCrossed },
    { name: "Pubs", icon: Beer },
    { name: "Cafés", icon: Coffee },
    { name: "Banquet Halls", icon: PartyPopper },
    { name: "Educational Institutions", icon: GraduationCap },
    { name: "Automotive Showrooms", icon: Car },
    { name: "Corporate Houses", icon: Building2 },
    { name: "Tours & Travel", icon: MapPinned },
    { name: "Hospitals", icon: HeartPulse },
    { name: "Movie Theatres", icon: Clapperboard },
    { name: "Jewelry & Fashion Stores", icon: Gem },
  ]

  return (
    <section
      ref={ref}
      id="b2b"
      className={`section-py-sm bg-muted fade-section ${visible ? "visible" : ""
        }`}
    >
      <div className="site-container">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="fade-child h2-scale font-bold text-primary mb-4 md:mb-6 font-serif">
            B2B Solutions
          </h2>

          <p className="fade-child delay-100 text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Private-label water solutions for businesses that want premium branding, clean packaging, and reliable supply.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.name}
                className={`fade-child delay-${(index % 6) * 100} group rounded-2xl border border-sky-200/60 bg-white shadow-sm p-4 md:p-5 hover:shadow-md hover:-translate-y-[2px] transition-all flex items-center gap-3 md:gap-4 h-[90px] md:h-auto`}
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors flex-shrink-0">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-sky-700" />
                </div>

                <p className="text-sm md:text-base font-semibold text-primary leading-snug flex-1">
                  {item.name}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Line */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="fade-child delay-200 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Turn every bottle into a brand experience — clean design, premium feel, and consistent supply for bulk orders.
          </p>
        </div>
      </div>
    </section>
  )
}
