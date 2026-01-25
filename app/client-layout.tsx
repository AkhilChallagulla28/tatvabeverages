"use client"

import { Analytics } from "@vercel/analytics/next"
import { useRouter } from "next/navigation"
import React from "react"

function ScrollToTop() {
  const router = useRouter()

  React.useEffect(() => {
    // Scroll to top on initial mount
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    // Scroll on mount to ensure top position
    handleRouteChange()

    return () => {
      // Cleanup
    }
  }, [router])

  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ScrollToTop />
      {children}
      <Analytics />
    </>
  )
}
