import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Nunito } from "next/font/google"
import ClientLayout from "./client-layout"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-brand" })

export const metadata: Metadata = {
  title: "Tatva Beverages - Essence in Every Drop",
  description:
    "Premium custom-branded packaged drinking water for restaurants, hotels, events, and corporate clients. BIS-certified quality with fast turnaround.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${nunito.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
