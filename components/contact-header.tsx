"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function ContactHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav - solid white */}
      <nav className="bg-white border-b border-slate-200 shadow-sm">
        <div className="site-container">
          <div className="flex items-center justify-between h-[70px]">
            <Link href="/" className="flex items-center text-slate-900">
              <Image
                src="/images/tatva-logo.png"
                alt="Tatva Beverages Logo"
                width={280}
                height={80}
                priority
                className="h-[50px] w-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-medium text-slate-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="font-medium text-slate-600 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link
                href="/contact"
                className="font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg"
              >
                Contact
              </Link>
              <Button asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-900"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-700">
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-700">
                About Us
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-700">
                Contact
              </Link>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
