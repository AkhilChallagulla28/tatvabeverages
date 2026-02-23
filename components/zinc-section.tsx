import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

// Zinc benefit bullets
const zincBenefits = [
    { icon: "🛡️", text: "Supporting immune function" },
    { icon: "🔬", text: "Promoting cellular repair" },
    { icon: "⚡", text: "Maintaining balanced metabolism" },
    { icon: "🌿", text: "Contributing to overall daily wellness" },
]

// Comparison rows
const comparisonRows = [
    { feature: "Purified", standard: true, tatva: true },
    { feature: "Safe to drink", standard: true, tatva: true },
    { feature: "Hydrating", standard: true, tatva: true },
    { feature: "Enhanced with essential zinc", standard: false, tatva: true },
]

// Molecule nodes — angle in degrees, all at radius 110px from centre
const nodes = [
    { label: "Immune", angle: 0 },
    { label: "Repair", angle: 72 },
    { label: "Metabol.", angle: 144 },
    { label: "Wellness", angle: 216 },
    { label: "Purity", angle: 288 },
]
const R = 110  // orbit radius
const NODE = 48 // node bubble diameter

export function ZincSection() {
    return (
        <ScrollReveal>
            <section
                className="section-py overflow-hidden"
                style={{
                    background: "linear-gradient(160deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)",
                }}
            >
                <div className="site-container">

                    {/* ── Two-column layout ──────────────────────────────── */}
                    <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                        {/* ── LEFT: Text content ─────────────────────────── */}
                        <div>

                            {/* Eyebrow */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold tracking-widest text-slate-500 mb-6">
                                <span className="font-bold text-slate-600">Zn</span>
                                <span>ZINC-ENRICHED WATER</span>
                            </div>

                            {/* Heading */}
                            <h2 className="h2-scale font-bold text-primary heading-font leading-tight">
                                More Than Just Water —<br className="hidden sm:block" />
                                <span style={{ color: "#475569" }}> Enriched With Zinc</span>
                            </h2>

                            {/* Main paragraph */}
                            <p className="mt-5 text-muted-foreground leading-relaxed text-base">
                                At Tatva Beverages, we believe hydration should do more than just quench thirst.
                                Our water is carefully purified and enriched with zinc — an essential mineral
                                known to support immunity, metabolism, and overall well-being.
                            </p>

                            {/* Zinc benefits list */}
                            <p className="mt-6 text-sm font-semibold text-primary/80 uppercase tracking-widest">
                                Zinc plays a vital role in:
                            </p>
                            <ul className="mt-3 space-y-3">
                                {zincBenefits.map((b) => (
                                    <li key={b.text} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex-shrink-0 h-7 w-7 rounded-full bg-slate-100 border border-slate-200/70 flex items-center justify-center text-sm">
                                            {b.icon}
                                        </span>
                                        <span className="text-muted-foreground leading-relaxed text-sm pt-0.5">
                                            {b.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Differentiator paragraph */}
                            <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
                                Unlike standard{" "}
                                <strong className="text-primary/80">packaged drinking water</strong> that
                                focuses only on purification, Tatva combines purity with purposeful mineral
                                enrichment — delivering{" "}
                                <strong className="text-primary/80">zinc-enriched water</strong>{" "}
                                with added value. Whether you need{" "}
                                <strong className="text-primary/80">mineral enriched packaged drinking water</strong> for
                                your brand or{" "}
                                <strong className="text-primary/80">zinc infused bottled water</strong> for
                                your guests, every bottle is designed with intention.
                            </p>

                            {/* Tagline */}
                            <p className="mt-5 font-semibold text-primary text-base">
                                Pure water. Enhanced thoughtfully.
                            </p>

                            {/* Scientific trust line */}
                            <p
                                className="mt-5 text-xs leading-relaxed italic"
                                style={{ color: "#6b7280", borderLeft: "2px solid #cbd5e1", paddingLeft: "12px" }}
                            >
                                Zinc is recognised as an essential trace mineral required for normal immune
                                system function and overall health.
                            </p>

                            {/* CTA */}
                            <div className="mt-8 flex flex-wrap gap-3 items-center">
                                <p className="text-sm font-medium text-primary/70 w-full sm:w-auto">
                                    Experience Smarter Hydration
                                </p>
                                <Link
                                    href="/product"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                                >
                                    Explore Our Products
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                        </div>

                        {/* ── RIGHT: Visual element ──────────────────────── */}
                        <div className="flex flex-col gap-8">

                            {/* ── Molecule diagram ──────────────────────── */}
                            <div
                                className="relative flex items-center justify-center mx-auto"
                                style={{ width: `${R * 2 + NODE + 20}px`, height: `${R * 2 + NODE + 20}px` }}
                            >
                                {/*
                                  SVG layer for lines.
                                  viewBox is centered at (0,0), so lines go from (0,0) → each node position.
                                  This means lines point FROM centre (Zn) TO each orbiting node — visually
                                  the arrows/lines radiate outward, but since they START at Zn they show
                                  the connection pointing *to* Zn as the source.
                                  We draw arrowheads at the ZN end so they visually point INWARD.
                                */}
                                <svg
                                    style={{
                                        position: "absolute",
                                        top: 0, left: 0,
                                        width: "100%", height: "100%",
                                        overflow: "visible",
                                        pointerEvents: "none",
                                    }}
                                    viewBox={`${-(R + NODE / 2 + 10)} ${-(R + NODE / 2 + 10)} ${(R + NODE / 2 + 10) * 2} ${(R + NODE / 2 + 10) * 2}`}
                                >
                                    {/* Arrowhead marker pointing toward center (Zn) */}
                                    <defs>
                                        <marker
                                            id="arrow-to-zn"
                                            markerWidth="6"
                                            markerHeight="6"
                                            refX="5"
                                            refY="3"
                                            orient="auto"
                                        >
                                            <path d="M6,0 L6,6 L0,3 Z" fill="rgba(100,116,139,0.45)" />
                                        </marker>
                                    </defs>

                                    {/* Lines from each node toward Zn centre */}
                                    {nodes.map(({ angle }) => {
                                        const rad = (angle * Math.PI) / 180
                                        // Start near the node surface, end near the Zn surface
                                        const startX = Math.cos(rad) * (R - NODE / 2 - 2)
                                        const startY = Math.sin(rad) * (R - NODE / 2 - 2)
                                        const endX = Math.cos(rad) * 34 // just outside Zn bubble
                                        const endY = Math.sin(rad) * 34
                                        return (
                                            <line
                                                key={angle}
                                                x1={startX} y1={startY}
                                                x2={endX} y2={endY}
                                                stroke="rgba(100,116,139,0.22)"
                                                strokeWidth="1"
                                                markerEnd="url(#arrow-to-zn)"
                                            />
                                        )
                                    })}
                                </svg>

                                {/* Orbiting nodes */}
                                {nodes.map(({ label, angle }) => {
                                    const rad = (angle * Math.PI) / 180
                                    const x = Math.cos(rad) * R
                                    const y = Math.sin(rad) * R
                                    return (
                                        <div
                                            key={label}
                                            className="absolute flex items-center justify-center rounded-full text-[0.55rem] font-bold tracking-wide text-center"
                                            style={{
                                                width: `${NODE}px`,
                                                height: `${NODE}px`,
                                                // Centre at diagram midpoint, then offset
                                                left: `calc(50% + ${x}px - ${NODE / 2}px)`,
                                                top: `calc(50% + ${y}px - ${NODE / 2}px)`,
                                                background: "rgba(255,255,255,0.95)",
                                                border: "1px solid rgba(100,116,139,0.20)",
                                                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                                                color: "#475569",
                                                lineHeight: 1.2,
                                                padding: "4px",
                                            }}
                                        >
                                            {label}
                                        </div>
                                    )
                                })}

                                {/* Central Zn atom */}
                                <div
                                    className="absolute flex items-center justify-center rounded-full"
                                    style={{
                                        width: "68px",
                                        height: "68px",
                                        top: "50%", left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        background: "linear-gradient(135deg, #64748b 0%, #334155 100%)",
                                        boxShadow: "0 6px 24px rgba(71,85,105,0.30), 0 2px 8px rgba(71,85,105,0.15)",
                                    }}
                                >
                                    <span className="font-bold text-white text-xl" style={{ letterSpacing: "-0.02em" }}>
                                        Zn
                                    </span>
                                </div>

                                {/* Soft ambient glow behind Zn */}
                                <div
                                    className="absolute"
                                    style={{
                                        top: "50%", left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "180px", height: "180px",
                                        background: "radial-gradient(circle, rgba(100,116,139,0.09) 0%, transparent 70%)",
                                        borderRadius: "50%",
                                        pointerEvents: "none",
                                        zIndex: -1,
                                    }}
                                />
                            </div>

                            {/* ── Comparison table ──────────────────────── */}
                            <div
                                className="rounded-3xl overflow-hidden"
                                style={{
                                    border: "1px solid rgba(100,116,139,0.14)",
                                    boxShadow: "0 4px 24px rgba(11,44,61,0.06)",
                                }}
                            >
                                {/* Header */}
                                <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest">
                                    <div className="px-5 py-4 bg-slate-50 text-slate-500">Feature</div>
                                    <div className="px-4 py-4 bg-slate-50 text-slate-500 text-center">Standard Water</div>
                                    <div
                                        className="px-4 py-4 text-center"
                                        style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", color: "#475569" }}
                                    >
                                        Tatva Water
                                    </div>
                                </div>

                                {/* Rows */}
                                {comparisonRows.map((row, i) => (
                                    <div
                                        key={row.feature}
                                        className="grid grid-cols-3"
                                        style={{
                                            borderTop: "1px solid rgba(100,116,139,0.08)",
                                            background: row.tatva && !row.standard
                                                ? "linear-gradient(90deg, transparent 0%, rgba(71,85,105,0.03) 67%, rgba(71,85,105,0.06) 100%)"
                                                : i % 2 === 0 ? "white" : "#fafafa",
                                        }}
                                    >
                                        <div className="px-5 py-3.5 text-sm text-primary/80 font-medium">{row.feature}</div>
                                        <div className="px-4 py-3.5 text-center">
                                            {row.standard
                                                ? <span className="text-slate-400 text-base">✓</span>
                                                : <span className="text-slate-200 text-base">–</span>
                                            }
                                        </div>
                                        <div className="px-4 py-3.5 text-center">
                                            {row.tatva
                                                ? <span className="font-bold text-base" style={{ color: "#475569" }}>✓</span>
                                                : <span className="text-slate-200 text-base">–</span>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </ScrollReveal>
    )
}
