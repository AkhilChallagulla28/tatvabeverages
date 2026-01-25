"use client"

import { useRef, useEffect, useState } from "react"
import { Utensils, PartyPopper, Building2, Hotel } from "lucide-react"

const industries = [
  {
    icon: Utensils,
    title: "Restaurants & Cafés",
    description: "Elevate your dining experience with custom-branded bottles",
  },
  {
    icon: PartyPopper,
    title: "Weddings & Events",
    description: "Personalized water bottles for memorable occasions",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "Professional branded water for your workplace",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description: "Premium guest amenities that reflect your brand",
  },
]

export function Industries() {
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

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [isVisible])

  return (
    <section ref={ref} id="industries" className={`py-16 bg-background scroll-animate ${isVisible ? "visible" : ""}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by businesses across hospitality, corporate, and event sectors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <industry.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{industry.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
