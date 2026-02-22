"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

// ─── Inline SVG Icons ───────────────────────────────────────────────
function IconLocation() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.27 6.27l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}
function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

// ─── useScrollFade hook ──────────────────────────────────────────────
function useScrollFade<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

// ─── Input component ─────────────────────────────────────────────────
function Field({
  label, id, type = "text", placeholder, value, onChange, required = false,
}: {
  label: string; id: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label htmlFor={id} style={{ fontSize: "12px", fontWeight: 600, color: "#0B2C3D", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
        {label}
        {required && <span style={{ color: "#1e6fb5", marginLeft: "3px" }}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "13px 0",
          background: "transparent",
          border: "none",
          borderBottom: `2px solid ${focused ? "#1e6fb5" : "#d1dae3"}`,
          borderRadius: 0,
          outline: "none",
          fontSize: "15px",
          color: "#1a2b38",
          fontFamily: "'Inter', sans-serif",
          transition: "border-color 0.25s ease",
          boxSizing: "border-box",
        }}
      />
    </div>
  )
}

function SelectField({
  label, id, value, onChange, required = false,
}: {
  label: string; id: string; value: string; onChange: (v: string) => void; required?: boolean;
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label htmlFor={id} style={{ fontSize: "12px", fontWeight: 600, color: "#0B2C3D", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
        {label}
        {required && <span style={{ color: "#1e6fb5", marginLeft: "3px" }}>*</span>}
      </label>
      <select
        id={id}
        value={value}
        required={required}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "13px 0",
          background: "transparent",
          border: "none",
          borderBottom: `2px solid ${focused ? "#1e6fb5" : "#d1dae3"}`,
          borderRadius: 0,
          outline: "none",
          fontSize: "15px",
          color: value ? "#1a2b38" : "#9aacbd",
          fontFamily: "'Inter', sans-serif",
          transition: "border-color 0.25s ease",
          cursor: "pointer",
          appearance: "none",
          WebkitAppearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239aacbd' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 4px center",
          paddingRight: "28px",
        }}
      >
        <option value="" disabled style={{ color: "#9aacbd" }}>Select requirement type</option>
        <option value="Bulk Supply">Bulk Supply</option>
        <option value="Private Label">Private Label</option>
        <option value="Events">Events</option>
        <option value="Corporate">Corporate</option>
      </select>
    </div>
  )
}

function TextAreaField({
  label, id, placeholder, value, onChange, required = false,
}: {
  label: string; id: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label htmlFor={id} style={{ fontSize: "12px", fontWeight: 600, color: "#0B2C3D", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
        {label}
        {required && <span style={{ color: "#1e6fb5", marginLeft: "3px" }}>*</span>}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        required={required}
        rows={4}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "13px 0",
          background: "transparent",
          border: "none",
          borderBottom: `2px solid ${focused ? "#1e6fb5" : "#d1dae3"}`,
          borderRadius: 0,
          outline: "none",
          fontSize: "15px",
          color: "#1a2b38",
          fontFamily: "'Inter', sans-serif",
          transition: "border-color 0.25s ease",
          resize: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  )
}

// ─── Info Block ──────────────────────────────────────────────────────
function InfoBlock({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
      <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#EBF4FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e6fb5", flexShrink: 0, marginTop: "1px" }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: "11px", fontWeight: 700, color: "#9aacbd", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px", fontFamily: "'Inter', sans-serif" }}>{label}</p>
        <div style={{ color: "#334155", fontSize: "15px", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
          {children}
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────
export function ContactSection() {
  const { ref: leftRef, visible: leftVisible } = useScrollFade<HTMLDivElement>()
  const { ref: rightRef, visible: rightVisible } = useScrollFade<HTMLDivElement>()

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "f7d22dbb-8245-46ee-924d-7d878d77a21a",
          subject: `New B2B Lead – ${formData.requirement || "Bulk Quote"} | ${formData.business || formData.name}`,
          from_name: "Tatva Beverages Website",
          name: formData.name,
          email: formData.email,
          message: `Business: ${formData.business}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}\n\n${formData.message}`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitStatus("success")
        setFormData({ name: "", business: "", phone: "", email: "", requirement: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 6000)
    }
  }

  return (
    <div className="site-container">
      <div className="contact-grid">
        {/* ── LEFT COLUMN ──────────────────────────────────────────── */}
        <div
          ref={leftRef}
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
            transitionDelay: "0.05s",
          }}
        >
          <h2 style={{ fontSize: "clamp(1.9rem, 3vw, 2.7rem)", fontWeight: 700, color: "#0B2C3D", lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: "20px", fontFamily: "'Inter', ui-sans-serif, sans-serif" }}>
            We&apos;re Ready to<br />Supply Your Business
          </h2>
          <p style={{ fontSize: "16px", color: "#5a7083", lineHeight: 1.8, marginBottom: "48px", maxWidth: "440px", fontFamily: "'Inter', sans-serif" }}>
            We work with hotels, restaurants, corporates and event planners across Hyderabad.
            Tell us your requirement and our team will respond quickly.
          </p>

          {/* Info blocks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
            <InfoBlock icon={<IconLocation />} label="Location">
              Hyderabad, Telangana<br />
              <span style={{ fontSize: "13px", color: "#9aacbd" }}>6-3-667/2/A, Matha Nagar, Somajiguda</span>
            </InfoBlock>

            <InfoBlock icon={<IconPhone />} label="Call / WhatsApp">
              <a href="tel:+919505454855" style={{ color: "#334155", textDecoration: "none", fontWeight: 500 }}>
                +91 9505454855
              </a>
              <br />
              <span style={{ fontSize: "13px", color: "#9aacbd" }}>Mon – Sat | 9 AM – 7 PM</span>
            </InfoBlock>

            <InfoBlock icon={<IconMail />} label="Email">
              <a href="mailto:tatvabeverages2025@gmail.com" style={{ color: "#334155", textDecoration: "none", fontWeight: 500 }}>
                tatvabeverages2025@gmail.com
              </a>
            </InfoBlock>
          </div>

          {/* WhatsApp CTA */}
          <Link
            href="https://wa.me/919505454855?text=Hi%20Tatva%20team,%20I%20want%20pricing%20for%20custom%20label%20packaged%20water%20bottles.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              background: "#25D366",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <IconWhatsApp />
            Contact us
          </Link>
        </div>

        {/* ── RIGHT COLUMN – Form Card ──────────────────────────────── */}
        <div
          ref={rightRef}
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
            transitionDelay: "0.18s",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "40px 40px 36px",
              boxShadow: "0 8px 60px rgba(11,44,61,0.09), 0 2px 12px rgba(11,44,61,0.05)",
              border: "1px solid #e8edf2",
            }}
          >
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0B2C3D", marginBottom: "6px", fontFamily: "'Inter', sans-serif" }}>
              Request a Bulk Quote
            </h3>
            <p style={{ fontSize: "14px", color: "#9aacbd", marginBottom: "32px", fontFamily: "'Inter', sans-serif" }}>
              Fill in your details and we&apos;ll get back to you within 2–4 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <Field
                id="contact-name"
                label="Full Name"
                placeholder="Your full name"
                value={formData.name}
                onChange={v => setFormData(f => ({ ...f, name: v }))}
                required
              />
              <Field
                id="contact-business"
                label="Business Name"
                placeholder="Company / Hotel / Brand name"
                value={formData.business}
                onChange={v => setFormData(f => ({ ...f, business: v }))}
              />
              <div className="form-row-grid">
                <Field
                  id="contact-phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={v => setFormData(f => ({ ...f, phone: v }))}
                  required
                />
                <Field
                  id="contact-email"
                  label="Email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={v => setFormData(f => ({ ...f, email: v }))}
                />
              </div>

              <SelectField
                id="contact-requirement"
                label="Requirement Type"
                value={formData.requirement}
                onChange={v => setFormData(f => ({ ...f, requirement: v }))}
                required
              />

              <TextAreaField
                id="contact-message"
                label="Message"
                placeholder="Tell us your bottle size, quantity, delivery location…"
                value={formData.message}
                onChange={v => setFormData(f => ({ ...f, message: v }))}
                required
              />

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "17px 24px",
                  background: isSubmitting ? "#7a9eb5" : "#0B2C3D",
                  color: "#fff",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.02em",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  boxShadow: "0 4px 24px rgba(11,44,61,0.22)",
                  transition: "transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
                  marginTop: "4px",
                }}
              >
                {isSubmitting ? "Sending…" : (
                  <>
                    Request Bulk Quote
                    <IconArrow />
                  </>
                )}
              </button>

              {/* Trust line */}
              <p style={{ textAlign: "center", fontSize: "12px", color: "#9aacbd", fontFamily: "'Inter', sans-serif", marginTop: "-4px" }}>
                Response within 2–4 hours
              </p>

              {/* Status messages */}
              {submitStatus === "success" && (
                <p style={{ textAlign: "center", color: "#059669", fontSize: "14px", fontWeight: 500, background: "#ecfdf5", padding: "12px 16px", borderRadius: "10px", fontFamily: "'Inter', sans-serif" }}>
                  ✅ Message sent! We&apos;ll contact you shortly.
                </p>
              )}
              {submitStatus === "error" && (
                <p style={{ textAlign: "center", color: "#dc2626", fontSize: "14px", fontWeight: 500, background: "#fef2f2", padding: "12px 16px", borderRadius: "10px", fontFamily: "'Inter', sans-serif" }}>
                  ❌ Something went wrong. Please WhatsApp us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .form-row-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .whatsapp-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37,211,102,0.32) !important;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(11,44,61,0.30) !important;
        }
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 520px) {
          .form-row-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </div>
  )
}
