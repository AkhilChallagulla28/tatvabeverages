import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FloatingBottle } from "@/components/floating-bottle"
import { Footer } from "@/components/footer"
import { BadgeCheck, ShieldCheck, FlaskConical, Package, Sparkles, Truck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <FloatingBottle />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-sky-50 via-background to-muted/30">
          {/* background glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-160px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="absolute right-[-180px] top-[140px] h-[460px] w-[460px] rounded-full bg-blue-500/15 blur-3xl" />
            <div className="absolute left-[-200px] bottom-[-200px] h-[560px] w-[560px] rounded-full bg-cyan-400/15 blur-3xl" />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div className="rounded-3xl border border-sky-200/50 bg-background/70 backdrop-blur-md shadow-sm p-8 md:p-10">
                <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                  ABOUT TATVA
                </div>

                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary heading-font tracking-tight">
                  About Tatva Beverages
                </h1>

                <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We manufacture premium packaged drinking water and supply{" "}
                  <span className="font-semibold text-foreground">custom-labeled bottles</span> for brands, events, and
                  businesses.
                </p>

                {/* Trust chips */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-100/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    <ShieldCheck className="h-4 w-4 text-sky-700" />
                    FSSAI Licensed
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-100/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    <BadgeCheck className="h-4 w-4 text-sky-700" />
                    BIS Certified
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-100/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    <FlaskConical className="h-4 w-4 text-sky-700" />
                    RO + UV + Ozone
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-100/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    <Package className="h-4 w-4 text-sky-700" />
                    Hygienic Packaging
                  </span>
                </div>

                {/* CTA - UPDATED: Only Request Quote button that redirects to WhatsApp */}
                <div className="mt-8">
                  <Link
                    href="https://wa.me/919505454855?text=Hi%20Tatva%20team,%20I%20want%20custom%20label%20packaged%20water%20bottles.%20Please%20share%20pricing%20and%20MOQ."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-7 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors text-center"
                  >
                    Request Quote
                  </Link>
                </div>

                {/* Mini stats - FIXED ALIGNMENT & MADE SMALLER */}
                <div className="mt-10 grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-sky-200/50 bg-sky-50 p-3 text-center shadow-sm flex flex-col items-center justify-center">
                    <p className="text-xl font-bold text-primary">250ml</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Events</p>
                  </div>

                  <div className="rounded-xl border border-sky-200/50 bg-sky-50 p-3 text-center shadow-sm flex flex-col items-center justify-center">
                    <p className="text-xl font-bold text-primary">500ml</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Popular</p>
                  </div>

                  <div className="rounded-xl border border-sky-200/50 bg-sky-50 p-3 text-center shadow-sm flex flex-col items-center justify-center">
                    <p className="text-xl font-bold text-primary">1L</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Premium</p>
                  </div>
                </div>
              </div>

              {/* RIGHT (SHORTER + WHITE) */}
              <div className="rounded-3xl border border-sky-200/50 bg-white shadow-sm p-6 md:p-8">
                <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                  PRIVATE LABEL
                </div>

                <h2 className="mt-4 text-3xl font-bold text-primary heading-font">Private Label, Made Simple</h2>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Premium custom-label bottles for events and businesses — simple, fast, and professional.
                </p>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-sky-200/60 bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-sky-100 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-sky-700" />
                      </div>
                      <div>
                        <p className="font-bold text-primary">Choose size + quantity</p>
                        <p className="text-sm text-muted-foreground mt-1">250ml / 500ml / 1L — based on your requirement.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-sky-200/60 bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-sky-100 flex items-center justify-center">
                        <Package className="h-5 w-5 text-sky-700" />
                      </div>
                      <div>
                        <p className="font-bold text-primary">Add your branding</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Share your logo/label — we help with print-ready format.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-sky-200/60 bg-gradient-to-r from-sky-50 via-white to-sky-50 p-5 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-sky-100 flex items-center justify-center">
                        <Truck className="h-5 w-5 text-sky-700" />
                      </div>
                      <div>
                        <p className="font-bold text-primary">Get delivery</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We confirm quote, timeline and supply sealed premium bottles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* UPDATED: Only Get Quote button */}
                <div className="mt-6">
                  <Link
                    href="https://wa.me/919505454855?text=Hi%20Tatva%20team,%20I%20want%20pricing%20for%20custom%20label%20bottles.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-5 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="mt-10 flex justify-center">
              <Link href="#more" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Scroll to know more ↓
              </Link>
            </div>
          </div>
        </section>

        {/* MORE INFO */}
        <section id="more" className="py-10 bg-gradient-to-b from-background to-sky-50/40">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-sky-200/60 bg-white shadow-sm p-8">
                  <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                    WHO WE ARE
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-primary heading-font">A brand built on purity</h3>

                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Tatva stands for consistent taste, reliable supply, and hygienic packaged drinking water. We focus
                    on quality-first manufacturing and customer-first service.
                  </p>
                </div>

                <div className="rounded-3xl border border-sky-200/60 bg-white shadow-sm p-8">
                  <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                    WHAT WE DO
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-primary heading-font">Water + branding together</h3>

                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    We supply branded and non-branded bottles for retail and bulk consumption. Our private label service
                    helps businesses keep their identity premium at every touchpoint.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CAPABILITIES + CTA */}
        <section className="py-12 bg-sky-50/60">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                  OUR CAPABILITY
                </div>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary heading-font">
                  Built for bulk supply & premium branding
                </h2>

                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  From event orders to repeat corporate supply, we support businesses with consistent quality and
                  professional delivery.
                </p>
              </div>

              <ScrollReveal>
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                  <div className="rounded-3xl border border-sky-200/60 bg-white p-7 shadow-sm">
                    <h3 className="font-bold text-primary text-lg">Bulk Orders</h3>
                    <p className="text-muted-foreground mt-2">
                      Flexible ordering for restaurants, offices, hotels and event planners.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-sky-200/60 bg-white p-7 shadow-sm">
                    <h3 className="font-bold text-primary text-lg">Custom Label Support</h3>
                    <p className="text-muted-foreground mt-2">
                      Your logo on premium bottles — clean, professional and brand-ready.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-sky-200/60 bg-white p-7 shadow-sm">
                    <h3 className="font-bold text-primary text-lg">Reliable Supply</h3>
                    <p className="text-muted-foreground mt-2">
                      Timely dispatch and consistent batches for repeat business needs.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-10 rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold text-sky-700 tracking-widest uppercase text-center">
                    Industries We Serve
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {["Hotels", "Restaurants", "Offices", "Events", "Cafés", "Gyms", "Colleges"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-sky-200/60 bg-sky-100/60 px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-10 rounded-3xl border border-sky-200/60 bg-gradient-to-r from-sky-50 via-white to-sky-50 p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary heading-font">Want pricing for your requirement?</h3>
                      <p className="text-muted-foreground mt-2">
                        Send bottle size + quantity and we'll share the rate card on WhatsApp.
                      </p>
                    </div>

                    {/* UPDATED: Only Request Quote button */}
                    <Link
                      href="https://wa.me/919505454855?text=Hi%20Tatva%20team,%20I%20want%20pricing%20details%20for%20250ml%2C%20500ml%20and%201L%20bottles.%20Please%20share%20rate%20card."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors text-center whitespace-nowrap"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
             <section className="py-20 bg-gradient-to-b from-white to-sky-50/40">
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
          MANUFACTURING AUTHORITY
        </div>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary heading-font">
          Packaged Drinking Water Manufacturer
        </h2>

        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Premium private label water bottle supplier built for bulk supply, hospitality, events and corporate distribution.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 grid md:grid-cols-2 gap-8">

        <div className="group rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700 uppercase">
  Bulk Supply Capability
</div>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Tatva Beverages specializes in bulk packaged drinking water supply for hotels, 
            corporate offices, event planners, banquet halls and retail distributors. 
            We support both recurring business orders and large event requirements with 
            consistent quality and professional dispatch systems.
          </p>
        </div>

        <div className="group rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700 uppercase">
  Private Label Water Bottles
</div>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our private label service enables brands to customize 250ml, 500ml and 1L 
            packaged drinking water bottles with their logo and branding. 
            Ideal for weddings, conferences, corporate events and premium hospitality.
          </p>
        </div>

        <div className="group rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700 uppercase">
 Advanced Purification Process
</div>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our manufacturing process includes multi-stage filtration using RO, UV and ozone treatment 
            to ensure safe, hygienic and refreshing drinking water. 
            Every batch undergoes strict quality control before sealed packaging.
          </p>
        </div>

        <div className="group rounded-3xl border border-sky-200/60 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300">
         <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700 uppercase">
 Advanced Purification Process
</div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We ensure timely delivery and scalable supply across business segments. 
            Whether you require branded bottles for a single event or ongoing office supply, 
            Tatva Beverages maintains dependable turnaround and professional coordination.
          </p>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          Looking for a trusted packaged drinking water manufacturer for your business?
        </p>

        <Link
          href="https://wa.me/919505454855?text=Hi%20Tatva%20team,%20I%20want%20details%20about%20bulk%20packaged%20drinking%20water%20supply."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300"
        >
          Discuss Your Requirement
        </Link>
      </div>

    </div>
  </div>
</section>


        <Footer />
      </main>
    </>
  )
}