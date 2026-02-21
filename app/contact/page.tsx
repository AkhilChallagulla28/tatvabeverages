import { ContactHeader } from "@/components/contact-header"
import { FloatingBottle } from "@/components/floating-bottle"
import { ContactHero } from "@/components/contact-hero"
import { ContactSection } from "@/components/contact-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Tatva Beverages",
  description:
    "Partner with Tatva Beverages — Hyderabad's premier private label packaged drinking water manufacturer. Get a bulk quote for hotels, restaurants, events and corporates.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <FloatingBottle />

      <main className="pt-[70px]" style={{ background: "#F8FAFC" }}>
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Info + Form Section */}
        <section className="section-py" style={{ background: "#F8FAFC" }}>
          <ContactSection />
          <ScrollToTop />
        </section>

        {/* Map Section */}
        <section className="section-py-sm" style={{ background: "#F8FAFC", paddingTop: 0 }}>
          <div className="site-container">
            {/* Section label */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#1e6fb5", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", marginBottom: "8px" }}>
                Our Location
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#0B2C3D", fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em" }}>
                Find Us in Hyderabad
              </h2>
            </div>

            {/* Map container */}
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 40px rgba(11,44,61,0.08)",
                border: "1px solid #e0e8f0",
                filter: "grayscale(35%)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7370434710438!2d78.4544282!3d17.424402600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97609d728075%3A0xaf4ea327843d02d!2sTatva%20Beverages!5e0!3m2!1sen!2sin!4v1769251097676!5m2!1sen!2sin"
                width="100%"
                height="440"
                style={{ border: 0, display: "block" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tatva Beverages Location – Hyderabad"
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
