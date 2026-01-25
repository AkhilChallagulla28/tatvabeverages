"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useScrollAnimate } from "@/hooks/use-scroll-animate"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
const { ref, isVisible } = useScrollAnimate<HTMLDivElement>()
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "f7d22dbb-8245-46ee-924d-7d878d77a21a",

          subject: "New Lead - Tatva Beverages Contact Form",
          from_name: "Tatva Beverages Website",

          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        alert("Message sent successfully ✅ We will contact you shortly.")
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        alert("Something went wrong ❌ Please try again or WhatsApp us.")
        console.log("Web3Forms error:", data)
      }
    } catch (error) {
      alert("Network error ❌ Please try again or WhatsApp us.")
      console.log("Submit error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
<section id="contact" className="py-12 bg-gradient-to-b from-background to-sky-50/40">

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold tracking-widest text-sky-700">
            GET IN TOUCH
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-primary heading-font">
            Let’s talk requirements
          </h2>

          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tell us your bottle size, quantity and delivery location — we’ll respond quickly with pricing & timelines.
          </p>
        </div>

        <div
        ref={ref}
        className={`grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto scroll-animate ${isVisible ? "visible" : ""}`}>
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border border-sky-200/60 shadow-sm rounded-3xl">
              <CardHeader>
                <div className="h-14 w-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-4">
                  <Mail className="h-7 w-7 text-sky-700" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  tatvabeverages2025@gmail.com
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-sky-200/60 shadow-sm rounded-3xl">
              <CardHeader>
                <div className="h-14 w-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-4">
                  <Phone className="h-7 w-7 text-sky-700" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  +91 9505454855
                </CardDescription>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border border-sky-200/60 shadow-sm rounded-3xl overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-sky-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-sky-700" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-primary">Visit Us</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Find us on Google Maps
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7370434710438!2d78.4544282!3d17.424402600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97609d728075%3A0xaf4ea327843d02d!2sTatva%20Beverages!5e0!3m2!1sen!2sin!4v1769251097676!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border border-sky-200/60 shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary heading-font">
                Send us a message
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Fill this form and we’ll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Example: 500ml bottles, quantity 2000, delivery in Hyderabad, need custom label."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-xl" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
