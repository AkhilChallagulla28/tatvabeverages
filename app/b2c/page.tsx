"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingBottle } from "@/components/floating-bottle"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
    Gem, HeartHandshake, Sparkles, PartyPopper, Baby, Cake,
    Glasses, Home, Store, Trophy, Music, MapPinned, ChevronRight
} from "lucide-react"

const occasions = [
    { icon: Gem, label: "Weddings" },
    { icon: HeartHandshake, label: "Engagements" },
    { icon: Sparkles, label: "Sangeeth & Mehendi" },
    { icon: PartyPopper, label: "Receptions" },
    { icon: Baby, label: "Cradle Ceremony" },
    { icon: Cake, label: "Birthdays" },
    { icon: Glasses, label: "Bachelor Party" },
    { icon: Home, label: "House Warming" },
    { icon: Store, label: "Business Openings" },
    { icon: Trophy, label: "Corporate Events" },
    { icon: Music, label: "DJ / Music Nights" },
    { icon: MapPinned, label: "And more…" },
]

export default function B2CPage() {
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

                {/* ── HERO ─────────────────────────────────────────── */}
                <section className="hero-py bg-gradient-to-b from-rose-50/40 via-background to-white overflow-hidden">
                    <div className="site-container">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* LEFT — text */}
                            <div>
                                {/* Label */}
                                <div
                                    style={{
                                        opacity: mounted ? 1 : 0,
                                        transform: mounted ? "translateY(0)" : "translateY(16px)",
                                        transition: "opacity 0.6s ease, transform 0.6s ease",
                                        transitionDelay: "0.1s",
                                    }}
                                    className="inline-flex items-center gap-2 rounded-full bg-rose-100/80 px-4 py-2 text-xs font-semibold tracking-widest text-rose-700"
                                >
                                    PERSONALISED WATER BOTTLES
                                </div>

                                {/* H1 */}
                                <h1
                                    style={{
                                        opacity: mounted ? 1 : 0,
                                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                                        transition: "opacity 0.7s ease, transform 0.7s ease",
                                        transitionDelay: "0.22s",
                                    }}
                                    className="mt-5 h1-scale font-bold text-primary heading-font"
                                >
                                    Make Every Moment<br />
                                    Memorable
                                </h1>

                                {/* Body copy — 3 paragraphs */}
                                <div
                                    style={{
                                        opacity: mounted ? 1 : 0,
                                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                                        transition: "opacity 0.7s ease, transform 0.7s ease",
                                        transitionDelay: "0.38s",
                                    }}
                                    className="mt-5 space-y-4 text-muted-foreground leading-relaxed"
                                >
                                    <p>
                                        Your special day deserves every detail to be just right — including the water on the table.
                                        Tatva Beverages lets you personalise your own branded water bottles for weddings,
                                        engagements, birthdays, and every celebration in between.
                                    </p>
                                    <p>
                                        Imagine your name, your date, your design — on every bottle your guests hold.
                                        It&apos;s a small touch that leaves a lasting impression, long after the party ends.
                                    </p>
                                    <p className="font-medium text-foreground">
                                        Because even the little things should feel like you.
                                    </p>
                                </div>

                                {/* CTA */}
                                <div
                                    style={{
                                        opacity: mounted ? 1 : 0,
                                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                                        transition: "opacity 0.7s ease, transform 0.7s ease",
                                        transitionDelay: "0.54s",
                                    }}
                                    className="mt-8 flex flex-wrap gap-4"
                                >
                                    <Link
                                        href="https://wa.me/919505454855?text=Hi%20Tatva%20team,%20I%20need%20custom%20label%20bottles%20for%20an%20event.%20Please%20share%20pricing."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors text-sm"
                                    >
                                        Order Custom Bottles
                                        <ChevronRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 text-primary rounded-xl font-medium hover:bg-slate-50 transition-colors text-sm"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT — hero image */}
                            <div
                                style={{
                                    opacity: mounted ? 1 : 0,
                                    transform: mounted ? "translateY(0)" : "translateY(28px)",
                                    transition: "opacity 0.9s ease, transform 0.9s ease",
                                    transitionDelay: "0.28s",
                                }}
                                className="flex items-center justify-center lg:justify-end"
                            >
                                <div
                                    className="relative w-full max-w-[340px] overflow-hidden group"
                                    style={{
                                        borderRadius: "22px",
                                        animation: "floatBottleB2C 4s ease-in-out infinite",
                                    }}
                                >
                                    {/* Soft blush glow behind card */}
                                    <div className="absolute -inset-4 -z-10 rounded-[32px] bg-rose-200/20 blur-3xl" />

                                    <Image
                                        src="/images/tatva-b2c-hero.png"
                                        alt="Custom branded water bottles for weddings and celebrations — Tatva Beverages"
                                        width={880}
                                        height={1100}
                                        priority
                                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                        style={{
                                            borderRadius: "22px",
                                            boxShadow: "0 20px 60px rgba(11,44,61,0.10), 0 4px 16px rgba(11,44,61,0.06)",
                                        }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <style jsx>{`
                        @keyframes floatBottleB2C {
                            0%, 100% { transform: translateY(0px); }
                            50%       { transform: translateY(-14px); }
                        }
                    `}</style>
                </section>


                {/* ── OCCASIONS ─────────────────────────────────────── */}
                <ScrollReveal>
                    <section className="section-py-sm bg-white">
                        <div className="site-container">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                                    OCCASIONS
                                </div>
                                <h2 className="mt-4 h2-scale font-bold text-primary heading-font">
                                    We Cater to Every Occasion
                                </h2>
                                <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                                    Personal celebrations, corporate gatherings, community events — your branded bottle fits every moment.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {occasions.map(({ icon: Icon, label }) => (
                                    <div
                                        key={label}
                                        className="rounded-2xl border border-sky-200/60 bg-sky-50/50 p-5 flex items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <div className="h-10 w-10 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                                            <Icon className="h-5 w-5 text-sky-700" />
                                        </div>
                                        <p className="font-semibold text-primary text-sm leading-snug">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── HOW IT WORKS ──────────────────────────────────── */}
                <ScrollReveal>
                    <section className="section-py-sm bg-gradient-to-b from-white to-sky-50/40">
                        <div className="site-container">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                                    HOW IT WORKS
                                </div>
                                <h2 className="mt-4 h2-scale font-bold text-primary heading-font">
                                    Simple 3-Step Process
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { step: "01", title: "Choose Size & Quantity", body: "Select 250ml, 500ml, or 1L bottles based on your event size and requirements." },
                                    { step: "02", title: "Share Your Design", body: "Send your logo or label artwork — we help get it print-ready if needed." },
                                    { step: "03", title: "Receive Your Order", body: "We confirm, produce, and deliver your custom bottles within 7 days." },
                                ].map(({ step, title, body }) => (
                                    <div key={step} className="rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm">
                                        <p className="text-3xl font-bold text-sky-200 font-serif">{step}</p>
                                        <h3 className="mt-3 h3-scale font-bold text-primary heading-font">{title}</h3>
                                        <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── CTA BAND ──────────────────────────────────────── */}
                <ScrollReveal>
                    <section className="section-py-sm bg-white border-t border-slate-100">
                        <div className="site-container text-center">
                            <div className="inline-flex items-center justify-center rounded-full bg-rose-100/80 px-4 py-2 text-xs font-semibold tracking-widest text-rose-700 mb-5">
                                GET STARTED
                            </div>
                            <h2 className="h2-scale font-bold text-primary heading-font">
                                Ready to personalise your event?
                            </h2>
                            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                                Tell us your occasion, quantity, and date — we deliver fresh and on time.
                            </p>
                            <Link
                                href="https://wa.me/919505454855?text=Hi%20Tatva%20team,%20I%20need%20custom%20labeled%20bottles%20for%20my%20event.%20Please%20share%20pricing%20and%20timeline."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                            >
                                WhatsApp Us Now
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </section>
                </ScrollReveal>

                <Footer />
            </main>
        </>
    )
}
