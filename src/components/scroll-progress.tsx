"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Circular scroll indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <svg className="w-12 h-12 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(212, 166, 42, 0.2)"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
            strokeDasharray="0 1"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.68 0.20 45)" />
              <stop offset="50%" stopColor="oklch(0.62 0.18 55)" />
              <stop offset="100%" stopColor="oklch(0.42 0.08 35)" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div
          className="absolute text-xs font-bold text-primary"
          style={{
            opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }),
          }}
        >
          {/* Show percentage */}
        </motion.div>
      </motion.div>
    </>
  )
}
