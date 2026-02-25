"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Tag, Package, ShieldCheck, ArrowRight } from "lucide-react"

export function HowToOrderSection() {
    const steps = [
        {
            icon: Tag,
            step: "01",
            title: "Share Your Brand",
            description: "Share your logo, brand colors, and design preferences.",
        },
        {
            icon: Package,
            step: "02",
            title: "Choose Your Format",
            description: "Select your bottle size(s), label style, and required quantity.",
        },
        {
            icon: ShieldCheck,
            step: "03",
            title: "Approve & Relax",
            description: "Approve the final design — we produce, quality-check, and deliver to your location.",
        },
    ]

    return (
        <ScrollReveal>
            <section className="section-py-sm bg-white" id="how-to-order">
                <div className="site-container">
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="h2-scale font-bold text-primary heading-font">
                            Let’s Get Started
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Three Steps to Your Branded Bottle
                        </p>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {steps.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-2"
                                    style={{
                                        boxShadow: "0 10px 40px -10px rgba(102, 178, 216, 0.08)",
                                    }}
                                >
                                    {/* Step Number Background */}
                                    <div className="absolute top-6 right-8 text-5xl font-black text-slate-900 opacity-10 select-none transition-opacity duration-300 group-hover:opacity-20">
                                        {item.step}
                                    </div>

                                    {/* Icon */}
                                    <div className="relative z-10 w-16 h-16 rounded-[20px] bg-slate-50 flex items-center justify-center mb-6 text-sky-600 transition-all duration-300 group-hover:-translate-y-[3px] group-hover:shadow-[0_8px_20px_rgba(14,165,233,0.12)] border border-slate-100/50">
                                        <Icon className="w-[26px] h-[26px]" strokeWidth={2} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-primary mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center">
                        <p className="text-lg font-medium text-slate-700 mb-6 italic">
                            “It’s that simple.”
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg shadow-primary/20"
                        >
                            Start Your Order
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    )
}
