"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/product", label: "Products" },
  { href: "/b2b", label: "B2B" },
  { href: "/b2c", label: "B2C" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/60 shadow-sm">
      <div className="site-container">
        {/* Main row: 3 zones */}
        <div className="flex items-center h-[80px]">

          {/* LEFT — Logo (fixed width to anchor centering) */}
          <div className="flex-shrink-0 w-[160px]">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/tatva-logo.png"
                alt="Tatva Beverages Logo"
                width={240}
                height={80}
                priority
                className="h-[52px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* CENTER — Nav links (absolutely centered via flex-1 + mx-auto) */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${isActive(href)
                      ? "bg-sky-100/80 text-sky-800"
                      : "text-slate-600 hover:text-primary hover:bg-slate-100/70"
                    }
                  `}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT — Contact Us block button (fixed width, right-aligned) */}
          <div className="hidden md:flex flex-shrink-0 w-[160px] justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE — hamburger (right side) */}
          <div className="flex md:hidden flex-1 justify-end">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* MOBILE MENU — drops below */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive(href)
                    ? "bg-sky-100/80 text-sky-800"
                    : "text-slate-700 hover:bg-slate-100/70 hover:text-primary"
                  }
                `}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-primary hover:text-sky-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
