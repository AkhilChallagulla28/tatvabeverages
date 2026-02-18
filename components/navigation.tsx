"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
  <div className="container mx-auto px-6">
    <div className="flex items-center justify-between h-[90px]">
      
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/tatva-logo.png"
          alt="Tatva Beverages Logo"
          width={300}
          height={100}
          priority
          className="h-[60px] w-auto object-contain"
        />

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
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
  )
}
