"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface Trail {
  x: number
  y: number
  id: number
}

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const trailIdCounter = useRef(0)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Trail positions for the glow effect
  const [trails, setTrails] = useState<Trail[]>([])

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      // Add trail with unique incrementing ID
      setTrails((prev) => {
        trailIdCounter.current += 1
        const newTrail = { x: e.clientX, y: e.clientY, id: trailIdCounter.current }
        const updated = [...prev, newTrail].slice(-8) // Keep last 8 trails
        return updated
      })

      // Check if hovering over interactive element
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        !!target.closest("button") ||
        !!target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer"
      
      setIsPointer(isInteractive)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateCursor)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateCursor)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY])

  // Auto-remove old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) => prev.slice(1))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden lg:block">
      {/* Trail effects */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="absolute rounded-full mix-blend-screen"
          style={{
            left: trail.x,
            top: trail.y,
            width: 40 - index * 3,
            height: 40 - index * 3,
            x: "-50%",
            y: "-50%",
          }}
          initial={{ 
            opacity: 0.6,
            scale: 1,
          }}
          animate={{ 
            opacity: 0,
            scale: 0.3,
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255, 140, 66, ${0.7 - index * 0.08}) 0%, rgba(139, 90, 60, ${0.5 - index * 0.06}) 50%, transparent 70%)`,
              filter: "blur(8px)",
            }}
          />
        </motion.div>
      ))}

      {/* Main cursor */}
      <motion.div
        className="absolute"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute rounded-full border-2 border-primary/40"
          animate={{
            width: isPointer ? 60 : 40,
            height: isPointer ? 60 : 40,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            boxShadow: "0 0 35px rgba(255, 140, 66, 0.6), 0 0 25px rgba(139, 90, 60, 0.4)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="absolute rounded-full bg-primary"
          animate={{
            width: isPointer ? 12 : 8,
            height: isPointer ? 12 : 8,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          style={{
            boxShadow: "0 0 10px rgba(212, 166, 42, 0.8)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Pulsing glow effect on hover */}
        {isPointer && (
          <motion.div
            className="absolute rounded-full bg-primary/20"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ 
              width: [60, 80, 60],
              height: [60, 80, 60],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </motion.div>
    </div>
  )
}
