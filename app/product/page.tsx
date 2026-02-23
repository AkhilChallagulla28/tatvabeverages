"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BottleGallery } from "@/components/bottle-gallery"
import {
    ChevronRight,
    Printer,
    Layers,
    Tag,
    Star,
    ShieldCheck,
    Droplets,
    Package,
    Award,
} from "lucide-react"

// ─── Format cards ─────────────────────────────────────────────────────────────
const formats = [
    {
        size: "250ml",
        keyword: "250ml event water bottles",
        icon: "🫧",
        desc: "Perfect for weddings, receptions, and all-day social events.",
        useCases: ["Weddings", "Engagements", "Social celebrations"],
    },
    {
        size: "500ml",
        keyword: "500ml branded water bottles",
        icon: "🌊",
        desc: "The most popular size — great for hotels, restaurants, and retail.",
        useCases: ["Hotels", "Restaurants", "Retail distribution"],
    },
    {
        size: "1 Litre",
        keyword: "1L table water bottles",
        icon: "🏔️",
        desc: "Premium table water for dining, boardrooms, and luxury hospitality.",
        useCases: ["Fine dining", "Boardrooms", "Luxury hospitality"],
    },
]

// ─── Customization options ────────────────────────────────────────────────────
const customOptions = [
    {
        icon: Printer,
        title: "Custom Label Printing",
        desc: "Your logo, imagery, and brand story — printed sharp and vibrant on every bottle.",
        color: "sky",
    },
    {
        icon: Layers,
        title: "Matte / Glossy Finishes",
        desc: "Choose a premium matte look for understated elegance, or glossy for bold visual impact.",
        color: "indigo",
    },
    {
        icon: Tag,
        title: "Minimal Logo Designs",
        desc: "Clean, minimal label placements for a high-end, editorial brand presence.",
        color: "teal",
    },
    {
        icon: Star,
        title: "Event-Specific Editions",
        desc: "Special run editions tailored for weddings, product launches, or annual events.",
        color: "rose",
    },
]

// ─── Quality pillars ──────────────────────────────────────────────────────────
const qualityPillars = [
    {
        icon: Droplets,
        title: "Zinc-Enriched Water",
        desc: "Purified and enriched with zinc for added nutritional value.",
    },
    {
        icon: ShieldCheck,
        title: "BIS & FSSAI Compliant",
        desc: "Manufactured to the highest Indian safety and regulatory standards.",
    },
    {
        icon: Package,
        title: "Hygienic Packaging",
        desc: "Sealed in food-grade, tamper-proof packaging for safe delivery.",
    },
    {
        icon: Award,
        title: "High-Quality Printing",
        desc: "Premium label printing that preserves your brand's visual integrity.",
    },
]

export default function ProductPage() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80)
        return () => clearTimeout(t)
    }, [])

    return (
        <>
            <Navigation />

            <main className="pt-[80px]">

                {/* ═══════════════════════════════════════════════════════
                    1. HERO
                ═══════════════════════════════════════════════════════ */}
                <section className="hero-py bg-gradient-to-b from-sky-50/60 via-background to-white overflow-hidden">
                    <div className="site-container-narrow text-center">

                        <div
                            style={{
                                opacity: mounted ? 1 : 0,
                                transform: mounted ? "translateY(0)" : "translateY(16px)",
                                transition: "opacity 0.55s ease, transform 0.55s ease",
                                transitionDelay: "0.05s",
                            }}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700"
                        >
                            CUSTOM BRANDED BOTTLED WATER
                        </div>

                        <h1
                            style={{
                                opacity: mounted ? 1 : 0,
                                transform: mounted ? "translateY(0)" : "translateY(20px)",
                                transition: "opacity 0.7s ease, transform 0.7s ease",
                                transitionDelay: "0.18s",
                            }}
                            className="mt-5 h1-scale font-bold text-primary heading-font"
                        >
                            Water That Wears<br className="hidden sm:block" /> Your Identity
                        </h1>

                        <div
                            style={{
                                opacity: mounted ? 1 : 0,
                                transform: mounted ? "translateY(0)" : "translateY(20px)",
                                transition: "opacity 0.7s ease, transform 0.7s ease",
                                transitionDelay: "0.32s",
                            }}
                            className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg mx-auto max-w-2xl"
                        >
                            <p>
                                Not all water bottles are created equal — and yours shouldn&apos;t be either.
                                At Tatva Beverages, we turn a simple bottle of water into a powerful brand statement.
                            </p>
                            <p>
                                Choose your label design, pick your bottle size, select your finish — and we&apos;ll
                                bring it to life with precision. From 250ml event bottles to 1L table water, every
                                format is available in your colors, your typography, and your style.
                            </p>
                            <p>
                                Pure, zinc-enriched water inside. Your brand on the outside. A complete product, built around you.
                            </p>
                            <p className="font-semibold text-primary text-lg">
                                Your bottle. Your rules.
                            </p>
                        </div>

                        <div
                            style={{
                                opacity: mounted ? 1 : 0,
                                transform: mounted ? "translateY(0)" : "translateY(20px)",
                                transition: "opacity 0.7s ease, transform 0.7s ease",
                                transitionDelay: "0.46s",
                            }}
                            className="mt-9 flex flex-wrap items-center justify-center gap-4"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm"
                            >
                                Request Custom Quote
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#formats"
                                className="inline-flex items-center gap-2 px-7 py-4 border border-slate-200 text-primary rounded-xl font-medium hover:bg-slate-50 transition-colors text-sm"
                            >
                                Explore Formats
                            </Link>
                        </div>

                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    2. BOTTLE GALLERY — FocusDeck‑style Embla Carousel
                ═══════════════════════════════════════════════════════ */}
                <BottleGallery />


                {/* ═══════════════════════════════════════════════════════
                    3. AVAILABLE FORMATS (SEO SECTION)
                ═══════════════════════════════════════════════════════ */}
                <ScrollReveal>
                    <section id="formats" className="section-py bg-gradient-to-b from-white to-sky-50/40">
                        <div className="site-container">

                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold tracking-widest text-slate-600">
                                    BOTTLE SIZES
                                </div>
                                <h2 className="mt-4 h2-scale font-bold text-primary heading-font">
                                    Available Bottle Sizes &amp; Formats
                                </h2>
                                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                                    Tatva Beverages offers private label bottled water across three core sizes — each suited
                                    to a different occasion, industry, or distribution channel.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {formats.map((f) => (
                                    <div
                                        key={f.size}
                                        className="relative rounded-3xl border border-sky-200/60 bg-white p-7 shadow-sm flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl" role="img" aria-label={f.size}>
                                                {f.icon}
                                            </span>
                                            <div>
                                                <p className="font-bold text-primary text-xl heading-font">{f.size}</p>
                                                <p className="text-[0.65rem] font-semibold tracking-widest text-sky-600 uppercase">
                                                    {f.keyword}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {f.useCases.map((uc) => (
                                                <span
                                                    key={uc}
                                                    className="text-[0.68rem] font-medium rounded-full bg-sky-50 border border-sky-200/70 text-sky-700 px-3 py-1"
                                                >
                                                    {uc}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 max-w-3xl mx-auto text-center">
                                <p className="text-muted-foreground leading-relaxed">
                                    Whether you need <strong className="text-primary/80">250ml event water bottles</strong> for
                                    weddings and celebrations, <strong className="text-primary/80">500ml branded water bottles</strong> for
                                    restaurants and retail, or <strong className="text-primary/80">1L table water bottles</strong> for
                                    premium dining — Tatva Beverages delivers every format with consistent quality,
                                    on-time, and within budget.
                                </p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>


                {/* ═══════════════════════════════════════════════════════
                    4. CUSTOMIZATION OPTIONS
                ═══════════════════════════════════════════════════════ */}
                <ScrollReveal>
                    <section className="section-py bg-white">
                        <div className="site-container">

                            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">

                                <div className="lg:sticky lg:top-28">
                                    <div className="inline-flex items-center rounded-full bg-violet-100 px-4 py-2 text-xs font-semibold tracking-widest text-violet-700">
                                        CUSTOMIZATION
                                    </div>
                                    <h2 className="mt-4 h2-scale font-bold text-primary heading-font">
                                        Designed Around Your Brand
                                    </h2>
                                    <p className="mt-4 text-muted-foreground leading-relaxed">
                                        From the label finish to the minimum order quantity, every detail of your
                                        custom branded water bottle is tailored to your brand&apos;s personality and
                                        business needs.
                                    </p>
                                    <p className="mt-3 text-muted-foreground leading-relaxed">
                                        Our personalised water bottles and private label water bottles are used by
                                        businesses across sectors — from boutique hotels in Hyderabad to pan-India
                                        corporate chains ordering bulk branded bottled water.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm"
                                    >
                                        Discuss Your Requirements
                                        <ChevronRight className="h-4 w-4" />
                                    </Link>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    {customOptions.map(({ icon: Icon, title, desc, color }) => {
                                        const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
                                            sky: { bg: "bg-sky-50", icon: "text-sky-600", border: "border-sky-200/60" },
                                            indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-200/60" },
                                            violet: { bg: "bg-violet-50", icon: "text-violet-600", border: "border-violet-200/60" },
                                            teal: { bg: "bg-teal-50", icon: "text-teal-600", border: "border-teal-200/60" },
                                            rose: { bg: "bg-rose-50", icon: "text-rose-600", border: "border-rose-200/60" },
                                        }
                                        const c = colorMap[color]
                                        return (
                                            <div
                                                key={title}
                                                className={`rounded-2xl border ${c.border} ${c.bg} p-6 flex flex-col gap-3 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200`}
                                            >
                                                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                                    <Icon className={`h-5 w-5 ${c.icon}`} />
                                                </div>
                                                <h3 className="font-semibold text-primary text-base heading-font">{title}</h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </section>
                </ScrollReveal>


                {/* ═══════════════════════════════════════════════════════
                    5. QUALITY SECTION
                ═══════════════════════════════════════════════════════ */}
                <ScrollReveal>
                    <section className="section-py-sm bg-gradient-to-b from-sky-50/40 to-white">
                        <div className="site-container">

                            <div className="text-center mb-10">
                                <div className="inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2 text-xs font-semibold tracking-widest text-teal-700">
                                    QUALITY ASSURANCE
                                </div>
                                <h2 className="mt-4 h2-scale font-bold text-primary heading-font">
                                    What&apos;s Inside Matters
                                </h2>
                                <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                                    A beautiful label deserves equally high-quality water inside. Every bottle
                                    we produce meets the strictest Indian safety standards.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {qualityPillars.map(({ icon: Icon, title, desc }) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl border border-teal-200/50 bg-white p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center">
                                            <Icon className="h-6 w-6 text-teal-600" />
                                        </div>
                                        <h3 className="font-semibold text-primary heading-font">{title}</h3>
                                        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>
                </ScrollReveal>


                {/* ═══════════════════════════════════════════════════════
                    6. FINAL CTA BAND
                ═══════════════════════════════════════════════════════ */}
                <ScrollReveal>
                    <section className="section-py bg-white border-t border-slate-100">
                        <div className="site-container text-center">

                            <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700 mb-5">
                                GET STARTED
                            </div>

                            <h2 className="h2-scale font-bold text-primary heading-font">
                                Ready to Create Your Custom Bottles?
                            </h2>

                            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
                                Let&apos;s design bottled water that represents your brand perfectly.
                                Share your brief and we&apos;ll get back within 24 hours.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm"
                                >
                                    Request Custom Quote
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="https://wa.me/919505454855?text=Hi%20Tatva%20team,%20I%27d%20like%20to%20enquire%20about%20custom%20branded%20water%20bottles.%20Please%20share%20your%20pricing%20and%20process."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-200 text-primary rounded-xl font-semibold text-sm hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    WhatsApp Us
                                </Link>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                <Footer />
            </main>
        </>
    )
}
