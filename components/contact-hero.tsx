"use client"

import { useState, useEffect } from "react"

export function ContactHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="contact-hero-section" style={{ paddingTop: "32px", paddingBottom: "24px" }}>
      <div className="site-container">
        <div
          className="contact-hero-container"
          style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            minHeight: "520px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url('/images/water-hero.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              backgroundRepeat: "no-repeat",
            }}
            aria-hidden
          />

          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.35)",
            }}
            aria-hidden
          />

          {/* Subtle glass blur edges */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(0px)",
              pointerEvents: "none",
            }}
            aria-hidden
          />

          {/* Corner glass hint - left edge */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, transparent 18%)",
              pointerEvents: "none",
            }}
            aria-hidden
          />

          {/* Content */}
          <div className="contact-hero-content">
            {/* Small label */}
            <p
              className="contact-hero-label"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "0.1s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(255,255,255,0.75)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span
                style={{
                  width: "24px",
                  height: "1.5px",
                  background: "rgba(255,255,255,0.5)",
                  display: "inline-block",
                }}
              />
              Get in Touch
            </p>

            {/* Main heading */}
            <h1
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.22s",
                color: "#ffffff",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                marginBottom: "20px",
                fontFamily: "'Inter', ui-sans-serif, sans-serif",
              }}
            >
              Let&apos;s Build Your<br />
              Private Label Water Brand
            </h1>

            {/* Subtext */}
            <p
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.38s",
                color: "rgba(255,255,255,0.8)",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: "520px",
                fontFamily: "'Inter', ui-sans-serif, sans-serif",
              }}
            >
              Partner with Hyderabad&apos;s trusted packaged drinking water
              manufacturer for premium bulk supply and custom branding.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
