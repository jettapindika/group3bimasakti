"use client"

import { motion } from "framer-motion"

export default function F1Circuit() {
  // Simplified F1 circuit path
  const circuitPath = `
    M 100 100
    Q 200 50 300 100
    Q 350 120 400 200
    L 420 300
    Q 430 350 400 400
    Q 300 450 200 430
    Q 100 420 80 350
    L 60 200
    Q 70 120 100 100
  `

  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full"
      style={{ filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))" }}
    >
      <defs>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(212, 175, 55, 0.8)" />
          <stop offset="50%" stopColor="rgba(212, 175, 55, 1)" />
          <stop offset="100%" stopColor="rgba(212, 175, 55, 0.8)" />
        </linearGradient>
        <filter id="circuitGlow">
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix type="saturate" values="1.5" />
        </filter>
      </defs>

      {/* Circuit track */}
      <motion.path
        d={circuitPath}
        stroke="url(#circuitGradient)"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        filter="url(#circuitGlow)"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        whileInView={{ strokeDashoffset: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      {/* Inner track border */}
      <motion.path
        d={circuitPath}
        stroke="rgba(212, 175, 55, 0.3)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}
      />

      {/* Animated racing line */}
      <motion.circle
        cx="100"
        cy="100"
        r="6"
        fill="rgba(212, 175, 55, 0.9)"
        filter="url(#circuitGlow)"
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <animateMotion dur="6s" repeatCount="indefinite" path={circuitPath} />
      </motion.circle>
    </svg>
  )
}
