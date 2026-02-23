"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

// ─── Slide data ───────────────────────────────────────────────────────────────
const slides = [
    {
        src: "/images/250ml-bottle.png",
        alt: "Private label 250ml water bottle — custom branded event water",
        label: "250ml",
        caption: "Event & Wedding Edition",
    },
    {
        src: "/images/500ml-bottle.png",
        alt: "Premium 500ml branded water bottle — bulk supply Hyderabad",
        label: "500ml",
        caption: "Hotel & Retail Standard",
    },
    {
        src: "/images/1000ml-bottle.png",
        alt: "1L custom designed water bottle — private label table water India",
        label: "1 Litre",
        caption: "Premium Table Water",
    },
    {
        src: "/images/all-sizes.png",
        alt: "Elegant custom branded water bottles all sizes — Tatva Beverages",
        label: "Full Range",
        caption: "Complete Size Collection",
    },
]

const N = slides.length

// Normalise offset into (-N/2, N/2] so we pick the shortest path around the loop
function normalise(offset: number): number {
    let p = ((offset % N) + N) % N
    if (p > N / 2) p -= N
    return p
}

// ─── Per-card 3D style ────────────────────────────────────────────────────────
function cardStyle(rawOffset: number): React.CSSProperties {
    const pos = normalise(rawOffset)
    const ease = "transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.6s ease, filter 0.6s ease"

    if (pos === 0) {
        return {
            transform: "translate(-50%,-50%) translateZ(0px) rotateY(0deg) scale(1)",
            opacity: 1,
            zIndex: 10,
            filter: "none",
            transition: ease,
        }
    }

    if (Math.abs(pos) === 1) {
        const dir = pos > 0 ? 1 : -1
        return {
            transform: `translate(calc(-50% + ${dir * 220}px),-50%) translateZ(-50px) rotateY(${dir * -18}deg) scale(0.85)`,
            opacity: 0.6,
            zIndex: 8,
            filter: "brightness(0.92)",
            transition: ease,
        }
    }

    // pos ±2 — mostly hidden behind / off edge
    const dir = pos > 0 ? 1 : -1
    return {
        transform: `translate(calc(-50% + ${dir * 400}px),-50%) translateZ(-100px) rotateY(${dir * -8}deg) scale(0.70)`,
        opacity: 0.15,
        zIndex: 6,
        filter: "brightness(0.80)",
        transition: ease,
    }
}

// ─── Component ────────────────────────────────────────────────────────────────
export function BottleGallery() {
    const [active, setActive] = useState(0)
    const [paused, setPaused] = useState(false)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const prev = useCallback(() => setActive((a) => (a - 1 + N) % N), [])
    const next = useCallback(() => setActive((a) => (a + 1) % N), [])

    // Auto-slide every 4 s, pause on hover
    useEffect(() => {
        if (paused) return
        intervalRef.current = setInterval(next, 4000)
        return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
    }, [paused, next])

    return (
        <ScrollReveal>
            <section
                className="section-py overflow-hidden"
                style={{ background: "linear-gradient(180deg, #f7fbff 0%, #ffffff 100%)" }}
            >
                <div className="site-container">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                            PRODUCT SHOWCASE
                        </div>
                        <h2 className="mt-4 h2-scale font-bold text-primary heading-font">
                            Bottles Built for Your Brand
                        </h2>
                        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                            Custom branded water bottles in premium sizes and finishes —
                            crafted to represent your brand at every touchpoint.
                        </p>
                    </div>

                    {/* ── Desktop 3D stage (hidden on mobile) ─────────────── */}
                    <div
                        className="hidden sm:block relative select-none"
                        style={{ height: "540px", perspective: "1100px" }}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        {/* Perspective container */}
                        <div
                            className="absolute inset-0"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {slides.map((slide, i) => (
                                <div
                                    key={slide.src}
                                    className="absolute"
                                    style={{
                                        left: "50%",
                                        top: "50%",
                                        width: "300px",
                                        transformStyle: "preserve-3d",
                                        cursor: i === active ? "default" : "pointer",
                                        willChange: "transform, opacity",
                                        ...cardStyle(i - active),
                                    }}
                                    onClick={() => i !== active && setActive(i)}
                                >
                                    {/* Card face */}
                                    <div
                                        className="relative overflow-hidden"
                                        style={{
                                            height: "400px",
                                            borderRadius: "22px",
                                            background: "linear-gradient(145deg, #f0f7ff 0%, #e4f1fb 100%)",
                                            boxShadow: i === active
                                                ? "0 20px 60px rgba(11,44,61,0.18), 0 6px 20px rgba(11,44,61,0.10)"
                                                : "0 8px 30px rgba(11,44,61,0.10)",
                                            transition: "box-shadow 0.6s ease",
                                        }}
                                    >
                                        {/* Bottle image */}
                                        <div className="absolute inset-0 flex items-center justify-center p-6">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={slide.src}
                                                    alt={slide.alt}
                                                    fill
                                                    sizes="320px"
                                                    className="object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>

                                        {/* Active card overlay: label fades in at bottom */}
                                        <div
                                            className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5"
                                            style={{
                                                background: "linear-gradient(to top, rgba(11,44,61,0.45) 0%, transparent 100%)",
                                                borderRadius: "0 0 22px 22px",
                                                opacity: i === active ? 1 : 0,
                                                transition: "opacity 0.5s ease",
                                                pointerEvents: "none",
                                            }}
                                        >
                                            <span
                                                className="text-[0.62rem] font-bold tracking-widest uppercase"
                                                style={{
                                                    color: "rgba(255,255,255,0.75)",
                                                    transform: i === active ? "translateY(0)" : "translateY(8px)",
                                                    transition: "transform 0.5s ease 0.1s",
                                                    display: "block",
                                                }}
                                            >
                                                {slide.label}
                                            </span>
                                            <span
                                                className="font-bold text-white heading-font"
                                                style={{
                                                    fontSize: "1.1rem",
                                                    transform: i === active ? "translateY(0)" : "translateY(10px)",
                                                    transition: "transform 0.5s ease 0.15s",
                                                    display: "block",
                                                }}
                                            >
                                                {slide.caption}
                                            </span>
                                        </div>

                                        {/* Non-active size badge */}
                                        <div
                                            className="absolute top-4 left-4"
                                            style={{
                                                opacity: i !== active ? 1 : 0,
                                                transition: "opacity 0.4s ease",
                                                pointerEvents: "none",
                                            }}
                                        >
                                            <span
                                                className="text-[0.62rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                                                style={{
                                                    background: "rgba(255,255,255,0.88)",
                                                    color: "#0B2C3D",
                                                    backdropFilter: "blur(8px)",
                                                    border: "1px solid rgba(11,44,61,0.08)",
                                                }}
                                            >
                                                {slide.label}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Arrow buttons — left */}
                        <button
                            onClick={prev}
                            aria-label="Previous bottle"
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full flex items-center justify-center border border-slate-200 bg-white/90 text-slate-500 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200"
                            style={{ boxShadow: "0 2px 12px rgba(11,44,61,0.08)" }}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Arrow buttons — right */}
                        <button
                            onClick={next}
                            aria-label="Next bottle"
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full flex items-center justify-center border border-slate-200 bg-white/90 text-slate-500 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200"
                            style={{ boxShadow: "0 2px 12px rgba(11,44,61,0.08)" }}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* ── Mobile: flat horizontal snap scroll ─────────────── */}
                    <div
                        className="sm:hidden flex gap-4 overflow-x-auto pb-4"
                        style={{
                            scrollSnapType: "x mandatory",
                            scrollBehavior: "smooth",
                            WebkitOverflowScrolling: "touch",
                            // Hide scrollbar
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.src}
                                className="flex-none"
                                style={{
                                    scrollSnapAlign: "center",
                                    width: "75vw",
                                    maxWidth: "280px",
                                }}
                            >
                                <div
                                    className="relative overflow-hidden"
                                    style={{
                                        borderRadius: "20px",
                                        aspectRatio: "3/4",
                                        background: "linear-gradient(145deg, #f0f7ff 0%, #e4f1fb 100%)",
                                        boxShadow: "0 4px 20px rgba(11,44,61,0.09)",
                                    }}
                                >
                                    <div className="absolute inset-0 p-5">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={slide.src}
                                                alt={slide.alt}
                                                fill
                                                sizes="280px"
                                                className="object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>

                                    {/* Label at bottom */}
                                    <div
                                        className="absolute inset-x-0 bottom-0 p-4"
                                        style={{
                                            background: "linear-gradient(to top, rgba(11,44,61,0.38) 0%, transparent 100%)",
                                            borderRadius: "0 0 20px 20px",
                                        }}
                                    >
                                        <p className="text-[0.62rem] font-bold tracking-widest uppercase text-white/75">{slide.label}</p>
                                        <p className="font-bold text-white heading-font text-sm">{slide.caption}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dot indicators — shared between desktop + mobile */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className="transition-all duration-300"
                                style={{
                                    width: i === active ? "24px" : "8px",
                                    height: "8px",
                                    borderRadius: "4px",
                                    background: i === active ? "#0B2C3D" : "#cbd5e1",
                                }}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </ScrollReveal>
    )
}
