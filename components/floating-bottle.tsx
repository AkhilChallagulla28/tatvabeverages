"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function FloatingBottle() {
  const [transform, setTransform] = useState("translateY(0vh) rotate(0deg) scale(1)")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const maxScroll = Math.max(docHeight - winHeight, 1)

      const progress = Math.min(scrollY / maxScroll, 1)

      const translateY = progress * 80 // Move down 80vh
      const rotate = progress * 720 // Rotate 2 full turns
      const scale = 0.8 + progress * 0.4 // Scale from 0.8 to 1.2

      setTransform(`translateY(${translateY}vh) rotate(${rotate}deg) scale(${scale})`)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="hidden lg:block fixed right-10 top-[15vh] z-40 pointer-events-none">
      <div
        style={{
          transform,
          transition: "transform 0.1s linear",
        }}
        className="w-28 h-40 relative"
      >
        <Image
          src="/images/tatva-original-mockup.png"
          alt="Tatva Premium Drinking Water Bottle"
          width={112}
          height={160}
          className="w-full h-full object-contain drop-shadow-lg"
          priority
        />
      </div>
    </div>
  )
}
