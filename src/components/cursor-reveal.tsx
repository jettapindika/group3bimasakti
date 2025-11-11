"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface CursorRevealProps {
  children: React.ReactNode
  revealRadius?: number
  imageUrl?: string
}

export default function CursorReveal({ children, revealRadius = 10, imageUrl }: CursorRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!isInView) return

      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePos({ x, y })
    }

    const handleMouseEnter = () => setIsInView(true)
    const handleMouseLeave = () => setIsInView(false)

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isInView])

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-2xl">
      {imageUrl && (
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: isInView ? 1 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        >
          <img src={imageUrl} alt="Reveal" className="w-full h-full object-cover" />
        </motion.div>
      )}

      <svg className="absolute inset-0 w-full h-full z-10" style={{ mixBlendMode: "overlay", pointerEvents: "none" }}>
        <defs>
          <radialGradient id="revealGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 140, 66, 0.9)" />
            <stop offset="100%" stopColor="rgba(255, 140, 66, 0)" />
          </radialGradient>
          <filter id="liquidGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feColorMatrix type="saturate" values="1.3" />
          </filter>
        </defs>
        <motion.circle
          cx={mousePos.x}
          cy={mousePos.y}
          r={revealRadius}
          fill="url(#revealGradient)"
          filter="url(#liquidGlow)"
          animate={{ r: [revealRadius, revealRadius + 2, revealRadius] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
      </svg>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}
