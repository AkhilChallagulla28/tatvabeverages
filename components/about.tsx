"use client"

import { useRef, useEffect, useState } from "react"

export function About() {
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
      { threshold: 0.12 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [isVisible])

  return (
    <section
      ref={ref}
      id="about"
      className={`py-16 bg-background scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif">
              About Tatva
            </h2>

            {/* Intro highlight */}
            <div className="mt-8 rounded-3xl border border-sky-200/60 bg-sky-50/60 p-7 shadow-sm">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                <span className="font-bold text-primary">Tatva</span> — derived from Sanskrit, meaning{" "}
                <span className="font-semibold text-[#00a0dc]">“essence”</span> or{" "}
                <span className="font-semibold text-[#00a0dc]">“fundamental element”</span> — represents the purest truth
                at the heart of all things.
              </p>
            </div>
          </div>

          {/* Side-by-side layout (perfect alignment) */}
          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-stretch">
            {/* LEFT: Info */}
            <div className="rounded-3xl border border-sky-200/50 bg-white shadow-sm p-8 flex flex-col justify-center">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Tatva Beverages, we honor this ancient wisdom by delivering packaged drinking water in its most
                  essential form:{" "}
                  <span className="font-semibold text-foreground">pure, trusted, and uncompromising.</span>
                </p>

                <p>
                  Through advanced{" "}
                  <span className="font-semibold text-foreground">RO + UV + Ozone</span> purification technology and{" "}
                  <span className="font-semibold text-foreground">BIS certification</span>, we ensure every drop meets the
                  highest standards of quality and safety.
                </p>

                <p>
                  Available in{" "}
                  <span className="font-semibold text-foreground">250ml, 500ml, and 1L</span> formats, our water adapts to
                  your needs — whether you're building your brand or elevating your guest experience.
                </p>
              </div>
            </div>

            {/* RIGHT: Branding box */}
            <div className="rounded-3xl border border-sky-200/60 bg-gradient-to-b from-sky-50/70 via-white to-white shadow-sm p-8 flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-bold text-primary mb-3">
                But we offer more than just purity.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Imagine every guest, client, or attendee holding a bottle that tells your story. With Tatva Beverages,
                you get more than just pure, BIS-certified drinking water — you get a{" "}
                <span className="font-semibold text-foreground">powerful branding tool.</span>
              </p>

              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Our custom labeling service transforms ordinary hydration into an experience that reinforces your
                identity, impresses your audience, and shows you care about every detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
