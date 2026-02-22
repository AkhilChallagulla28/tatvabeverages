"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingBottle } from "@/components/floating-bottle"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Hotel, Utensils, Briefcase, CalendarDays, ChevronRight, Check, X } from "lucide-react"

export default function B2BPage() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Navigation />
            <FloatingBottle />

            <main className="pt-[80px]">

                {/* ── 1. HERO ───────────────────────────────────────────────── */}
                <section className="hero-py bg-gradient-to-b from-sky-50 via-background to-white overflow-hidden">
                    <div className="site-container">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">

                            {/* LEFT — text */}
                            <div>
                                <div
                                    style={{
                                        opacity: mounted ? 1 : 0,
                                        transform: mounted ? "translateY(0)" : "translateY(16px)",
                                        transition: "opacity 0.6s ease, transform 0.6s ease",
                                        transitionDelay: "0.1s",
                                    }}
                                    className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700"
                                >
                                    B2B — PRIVATE LABEL WATER
                                </div>

                                <h1
                                    style={{
                                        opacity: mounted ? 1 : 0,
                                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                                        transition: "opacity 0.7s ease, transform 0.7s ease",
                                        transitionDelay: "0.22s",
                                    }}
                                    className="mt-5 h1-scale font-bold text-primary heading-font"
                                >
                                    Custom Branded Water Bottles<br />
                                    for Businesses Across Hyderabad
                                </h1>

                                <p
                                    style={{
                                        opacity: mounted ? 1 : 0,
                                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                                        transition: "opacity 0.7s ease, transform 0.7s ease",
                                        transitionDelay: "0.38s",
                                    }}
                                    className="mt-5 text-lg text-muted-foreground leading-relaxed"
                                >
                                    Private label bottled water, manufactured in Hyderabad and delivered across
                                    Telangana — designed to put your brand in front of every guest, client, and customer.
                                </p>

                                <div
                                    style={{
                                        opacity: mounted ? 1 : 0,
                                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                                        transition: "opacity 0.7s ease, transform 0.7s ease",
                                        transitionDelay: "0.52s",
                                    }}
                                    className="mt-8 flex flex-wrap gap-4"
                                >
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors text-sm"
                                    >
                                        Request a Custom Quote
                                        <ChevronRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 text-primary rounded-xl font-medium hover:bg-slate-50 transition-colors text-sm"
                                    >
                                        Talk to Us
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT — bottle image */}
                            <div
                                style={{
                                    opacity: mounted ? 1 : 0,
                                    transform: mounted ? "translateY(0)" : "translateY(28px)",
                                    transition: "opacity 0.9s ease, transform 0.9s ease",
                                    transitionDelay: "0.3s",
                                }}
                                className="flex items-center justify-center lg:justify-end"
                            >
                                <div className="relative w-full max-w-[300px] md:max-w-[380px]">
                                    {/* Soft glow backdrop */}
                                    <div className="absolute inset-0 -z-10 rounded-full bg-sky-300/20 blur-3xl scale-125" />
                                    <Image
                                        src="/images/tatva-b2c-hero.png"
                                        alt="Tatva Beverages custom branded private label water bottle — your label here"
                                        width={560}
                                        height={748}
                                        priority
                                        className="w-full h-auto object-contain drop-shadow-2xl"
                                        style={{ animation: "floatBottleB2B 4s ease-in-out infinite" }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <style jsx>{`
                        @keyframes floatBottleB2B {
                            0%, 100% { transform: translateY(0px); }
                            50%       { transform: translateY(-14px); }
                        }
                    `}</style>
                </section>


                {/* ── 2. PARTNER COPY BLOCK ─────────────────────────────────── */}
                <ScrollReveal>
                    <section className="section-py-sm bg-white">
                        <div className="site-container">
                            <div className="max-w-3xl mx-auto text-center">
                                <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                                    PARTNER WITH TATVA BEVERAGES
                                </div>

                                <h2 className="mt-6 h2-scale font-bold text-primary heading-font">
                                    Your brand deserves more than<br className="hidden md:block" /> generic water on the table.
                                </h2>

                                <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed text-left md:text-center">
                                    <p>
                                        Tatva Beverages offers end-to-end customised water bottle solutions — fully branded,
                                        premium quality, and crafted to match the standard your business represents.
                                    </p>
                                    <p>
                                        Whether you run a restaurant, manage a hotel, organise events, or lead a corporate setup,
                                        we make it easy to put your brand in front of every guest, client, and customer —
                                        one bottle at a time.
                                    </p>
                                    <p className="font-medium text-foreground">
                                        Let&apos;s build something that speaks for your brand, even when you&apos;re not in the room.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── 3. BRANDING IMPACT — "YOUR BRAND ON EVERY TABLE" ─────── */}
                <ScrollReveal>
                    <section className="section-py bg-gradient-to-b from-sky-50/50 to-white">
                        <div className="site-container">
                            <div className="text-center mb-14">
                                <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                                    BRANDING IMPACT
                                </div>
                                <h2 className="mt-5 h2-scale font-bold text-primary heading-font">
                                    Your Brand on Every Table
                                </h2>
                                <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                                    Private label water is not just hydration — it&apos;s a brand touchpoint your competition is likely missing.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        num: "01",
                                        title: "Reinforces Brand Identity",
                                        body: "Every bottle carrying your logo makes an impression. It signals attention to detail — the kind guests and clients remember long after they leave."
                                    },
                                    {
                                        num: "02",
                                        title: "Elevates Perceived Premium Experience",
                                        body: "Branded water shifts the perception of your space from ordinary to curated. It communicates that your business invests in the full experience, not just the basics."
                                    },
                                    {
                                        num: "03",
                                        title: "Subtle Yet Consistent Marketing",
                                        body: "Unlike ads, a bottle sits on the table throughout a meal, meeting, or stay. That is sustained brand exposure with zero additional media spend."
                                    },
                                    {
                                        num: "04",
                                        title: "Creates Genuine Brand Recall",
                                        body: "Guests who hydrate with your branded bottle associate the quality of the water with the quality of your brand — building recall that lasts."
                                    },
                                    {
                                        num: "05",
                                        title: "Differentiates from Competitors",
                                        body: "Most businesses pour generic water. A custom-labeled bottle sets you apart instantly and positions your brand as more thoughtful and premium."
                                    },
                                    {
                                        num: "06",
                                        title: "Water as a Branding Tool",
                                        body: "Your custom-branded water bottle from Tatva is a physical extension of your brand identity — working silently in every room, on every table, at every event."
                                    },
                                ].map(({ num, title, body }) => (
                                    <div
                                        key={num}
                                        className="rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <span className="text-3xl font-bold text-sky-100 heading-font select-none">{num}</span>
                                        <h3 className="mt-3 text-lg font-bold text-primary">{title}</h3>
                                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── 4. BUSINESS ADVANTAGE — "BUILT FOR COMMERCIAL SCALE" ─── */}
                <ScrollReveal>
                    <section className="section-py-sm bg-white">
                        <div className="site-container">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">

                                {/* Left — heading + intro */}
                                <div>
                                    <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                                        BUSINESS ADVANTAGE
                                    </div>
                                    <h2 className="mt-5 h2-scale font-bold text-primary heading-font">
                                        Built for Commercial Scale
                                    </h2>
                                    <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                                        Tatva Beverages is built around one commitment — reliable, high-volume private label
                                        water supply that fits seamlessly into your procurement cycle.
                                    </p>
                                    <p className="mt-4 text-muted-foreground leading-relaxed">
                                        As a bulk water bottle supplier based in Hyderabad, we handle the complexity of
                                        production and logistics so your team doesn&apos;t have to.
                                    </p>
                                    <Link
                                        href="https://wa.me/919505454855?text=Hi%20Tatva%20team,%20I%20want%20to%20discuss%20a%20long-term%20bulk%20water%20supply%20partnership."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors text-sm"
                                    >
                                        Discuss Partnership
                                        <ChevronRight className="h-4 w-4" />
                                    </Link>
                                </div>

                                {/* Right — advantage points */}
                                <div className="space-y-4">
                                    {[
                                        { title: "Consistent Bulk Supply", body: "Predictable production batches and scheduled deliveries — no last-minute shortages or inconsistent stock." },
                                        { title: "Operational Efficiency", body: "One supplier. One contact. Streamlined ordering and invoicing so your procurement team focuses on what matters." },
                                        { title: "Fast Event Turnaround", body: "Need branded bottles in under a week? We accommodate time-sensitive corporate events and large-scale functions." },
                                        { title: "Flexible Branding Options", body: "Label artwork support, size combinations, and order quantities that flex with your business requirements." },
                                        { title: "Long-Term Supply Partnerships", body: "We work best as a committed partner — with volume discounts and priority fulfilment for recurring business clients." },
                                    ].map(({ title, body }) => (
                                        <div key={title} className="flex gap-4 rounded-2xl border border-sky-100 bg-sky-50/40 p-5">
                                            <div className="mt-0.5 h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                                                <Check className="h-3 w-3 text-sky-700" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-primary text-sm">{title}</p>
                                                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── 5. IDEAL FOR — "DESIGNED FOR BUSINESSES" ─────────────── */}
                <ScrollReveal>
                    <section className="section-py bg-gradient-to-b from-white to-sky-50/50">
                        <div className="site-container">
                            <div className="text-center mb-14">
                                <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                                    IDEAL FOR
                                </div>
                                <h2 className="mt-5 h2-scale font-bold text-primary heading-font">
                                    Designed for Businesses<br className="hidden md:block" /> That Care About Experience
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Hotel,
                                        label: "Hotels",
                                        tagline: "Elevate the guest room experience",
                                        body: "From in-room service to poolside lounges, branded water bottles replace generic alternatives and signal that your property invests in every detail of a guest&apos;s stay."
                                    },
                                    {
                                        icon: Utensils,
                                        label: "Restaurants",
                                        tagline: "Premium dining table presence",
                                        body: "Table water sets the tone before a single dish arrives. A custom-labeled bottle from Tatva adds quiet sophistication and reinforces your restaurant&apos;s identity throughout the dining experience."
                                    },
                                    {
                                        icon: CalendarDays,
                                        label: "Events",
                                        tagline: "Brand visibility at scale",
                                        body: "Conferences, product launches, exhibitions — every attendee who picks up a branded water bottle engages with your brand. Private label water turns hydration into high-reach brand exposure."
                                    },
                                    {
                                        icon: Briefcase,
                                        label: "Corporate Offices",
                                        tagline: "Professional client meeting presence",
                                        body: "Arrive in a meeting with branded water on the table and the message is clear — you are a business that takes presentation seriously. It&apos;s a small detail that clients notice and remember."
                                    },
                                ].map(({ icon: Icon, label, tagline, body }) => (
                                    <div
                                        key={label}
                                        className="rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-200 flex gap-6"
                                    >
                                        <div className="h-12 w-12 rounded-2xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                                            <Icon className="h-6 w-6 text-sky-700" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-sky-700 tracking-widest uppercase">{label}</p>
                                            <h3 className="mt-1.5 text-lg font-bold text-primary">{tagline}</h3>
                                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── 6. DIFFERENTIATION — "WHY PRIVATE LABEL OVER GENERIC" ── */}
                <ScrollReveal>
                    <section className="section-py-sm bg-white">
                        <div className="site-container">
                            <div className="text-center mb-14">
                                <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                                    THE DIFFERENCE
                                </div>
                                <h2 className="mt-5 h2-scale font-bold text-primary heading-font">
                                    Why Private Label Over Generic Bottles?
                                </h2>
                                <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                                    The bottle your guest picks up says something about your business — whether you intend it to or not.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {/* Generic */}
                                <div className="rounded-3xl border border-slate-200/80 bg-slate-50/60 p-8">
                                    <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-5">Generic Water</p>
                                    <div className="space-y-4">
                                        {[
                                            "Zero brand memory — guests forget the experience",
                                            "Communicates a commodity mindset",
                                            "No visual brand consistency",
                                            "Missed marketing touchpoint at every table",
                                            "Same water your competitors serve",
                                        ].map((pt) => (
                                            <div key={pt} className="flex items-start gap-3">
                                                <div className="mt-0.5 h-5 w-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                                                    <X className="h-3 w-3 text-slate-400" />
                                                </div>
                                                <p className="text-sm text-slate-500 leading-relaxed">{pt}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Private Label */}
                                <div className="rounded-3xl border border-sky-200/70 bg-gradient-to-b from-sky-50/60 to-white p-8 shadow-sm">
                                    <p className="text-xs font-semibold text-sky-700 tracking-widest uppercase mb-5">Private Label Water</p>
                                    <div className="space-y-4">
                                        {[
                                            "Brand reinforcement at every sip",
                                            "Signals premium attention to detail",
                                            "Full visual consistency with your brand identity",
                                            "Turns every bottle into a silent brand ambassador",
                                            "Positions you distinctly above competitors",
                                        ].map((pt) => (
                                            <div key={pt} className="flex items-start gap-3">
                                                <div className="mt-0.5 h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                                                    <Check className="h-3 w-3 text-sky-700" />
                                                </div>
                                                <p className="text-sm text-primary leading-relaxed font-medium">{pt}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── 7. CLOSING CTA ────────────────────────────────────────── */}
                <ScrollReveal>
                    <section className="section-py bg-white border-t border-slate-100">
                        <div className="site-container text-center">
                            <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700 mb-6">
                                GET STARTED
                            </div>
                            <h2 className="h2-scale font-bold text-primary heading-font">
                                Turn Every Bottle Into a<br className="hidden md:block" /> Branding Opportunity
                            </h2>
                            <p className="mt-5 text-muted-foreground max-w-lg mx-auto leading-relaxed">
                                Share your business type, bottle size, and estimated monthly quantity —
                                we&apos;ll respond with a custom rate card within 2–4 hours.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    Request a Custom Quote
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-colors"
                                    style={{ background: "#e2e8f0", color: "#0B2C3D" }}
                                    onMouseEnter={e => (e.currentTarget.style.background = "#cbd5e1")}
                                    onMouseLeave={e => (e.currentTarget.style.background = "#e2e8f0")}
                                >
                                    Contact Us
                                </Link>
                            </div>
                            <p className="mt-6 text-xs text-slate-400">
                                Custom label support included · Ships across Hyderabad &amp; Telangana
                            </p>
                        </div>
                    </section>

                </ScrollReveal>

                <Footer />
            </main>
        </>
    )
}
