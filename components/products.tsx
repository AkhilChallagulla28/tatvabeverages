"use client"

import { useScrollFade } from "@/hooks/useScrollFade"
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
  const { ref: headRef, visible: headVisible } = useScrollFade<HTMLDivElement>()
  const { ref: cardsRef, visible: cardsVisible } = useScrollFade<HTMLDivElement>()

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div
          ref={headRef}
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
          }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary heading-font">
            Available Bottle Sizes
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect size based on your guests, events, and brand experience.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          style={{
            opacity: cardsVisible ? 1 : 0,
            transform: cardsVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
            transitionDelay: "0.12s",
          }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
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
