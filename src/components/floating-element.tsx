"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface FloatingElementProps {
  children: React.ReactNode
  intensity?: number
  className?: string
}

export default function FloatingElement({ children, intensity = 15, className = "" }: FloatingElementProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 200 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const elementCenterX = rect.left + rect.width / 2
      const elementCenterY = rect.top + rect.height / 2

      const deltaX = e.clientX - elementCenterX
      const deltaY = e.clientY - elementCenterY

      // Calculate distance from center
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const maxDistance = 500

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance

        x.set((deltaX / maxDistance) * intensity * force)
        y.set((deltaY / maxDistance) * intensity * force)
        rotateY.set((deltaX / maxDistance) * 10 * force)
        rotateX.set((-deltaY / maxDistance) * 10 * force)
      } else {
        x.set(0)
        y.set(0)
        rotateX.set(0)
        rotateY.set(0)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y, rotateX, rotateY, intensity])

  return (
    <motion.div
      ref={elementRef}
      style={{
        x: xSpring,
        y: ySpring,
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
