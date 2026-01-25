import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { FloatingBottle } from "@/components/floating-bottle"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { PhoneCall, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <FloatingBottle />

      {/* ✅ add padding top so heading never hides behind navbar */}
      <main className="pt-24">
        {/* ✅ Premium hero like Home/About */}
        <section className="relative overflow-hidden min-h-[calc(65vh-80px)] flex items-center bg-gradient-to-b from-sky-50 via-background to-muted/30">
          {/* background glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="absolute right-[-180px] top-[120px] h-[460px] w-[460px] rounded-full bg-blue-500/15 blur-3xl" />
            <div className="absolute left-[-200px] bottom-[-200px] h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-3xl" />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
                CONTACT
              </div>

              <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-primary heading-font tracking-tight">
                Contact Tatva Beverages
              </h1>

              <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Get pricing, MOQ details and delivery support for custom-labeled packaged drinking water.
              </p>

              {/* ✅ CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/919505454855?text=Hi%20Tatva%20team,%20I%20want%20pricing%20for%20custom%20label%20packaged%20water%20bottles.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Link>

                <Link
                  href="tel:+919505454855"
                  className="px-7 py-4 border border-sky-200 bg-white text-primary rounded-xl font-semibold hover:bg-sky-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall className="h-5 w-5" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Contact component section */}
        <section className="py-10 bg-background">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  )
}
