import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/tatva-20beverages-20final-20files-white-20background-20version.png"
                alt="Tatva Beverages Logo"
                width={32}
                height={32}
                className="brightness-0 invert"
              />
              <span className="text-2xl font-bold font-serif">TATVA BEVERAGES</span>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Premium custom-branded packaged drinking water for businesses and consumers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link href="/about" className="hover:opacity-80 transition-opacity">
                About Us
              </Link>
              <Link href="/contact" className="hover:opacity-80 transition-opacity">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-sm opacity-90">
              <p>tatvabeverages2025@gmail.com</p>
              <p>+91 9505454855</p>
              <p>6-3-667/2/A, Matha Nagar, Somajiguda, Hyderabad - 500082</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-90">© 2025 Tatva Beverages. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
