"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    size: "250ml",
    desc: "Best for weddings, events, banquets & hospitality tables.",
  },
  {
    size: "500ml",
    desc: "Most popular size for restaurants, cafés, and corporate supply.",
  },
  {
    size: "1000ml",
    desc: "Premium option for long events, travel and bulk consumption.",
  },
]

export function Products() {
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
      id="products"
      className={`py-20 bg-background scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-primary heading-font">
            Available Bottle Sizes
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect size based on your guests, events, and brand experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((item) => (
            <Card
              key={item.size}
              className="rounded-3xl border border-sky-200/60 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                {/* Big Circle */}
                <div className="h-44 w-44 md:h-52 md:w-52 rounded-full bg-sky-100 flex items-center justify-center shadow-sm">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#00a0dc]">
                    {item.size}
                  </span>
                </div>

                {/* Text */}
                <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional line */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Custom labeling available for all sizes to match your brand identity and premium presentation.
          </p>
        </div>
      </div>
    </section>
  )
}
