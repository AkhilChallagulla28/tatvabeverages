"use client"

import { ReactNode } from "react"

interface GlassButtonProps {
    children: ReactNode
    onClick?: () => void
    className?: string
}

export default function GlassButton({
    children,
    onClick,
    className = "",
}: GlassButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
        relative
        px-6 py-3
        rounded-full
        font-medium
        text-white
        backdrop-blur-md
        bg-white/15
        border border-white/30
        shadow-lg
        transition-all duration-300 ease-out
        hover:bg-white/25
        hover:shadow-xl
        hover:-translate-y-1
        active:translate-y-0
        active:shadow-md
        ${className}
      `}
        >
            {children}
        </button>
    )
}