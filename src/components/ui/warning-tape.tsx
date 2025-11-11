"use client"

import { motion } from "framer-motion"

interface WarningTapeProps {
  delay?: number
  rotation?: number
  direction?: "left" | "right"
  top?: string
}

export function WarningTape({ 
  delay = 0, 
  rotation = 0, 
  direction = "left",
  top = "50%"
}: WarningTapeProps) {
  return (
    <motion.div
      initial={{ x: direction === "left" ? "-100%" : "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay, type: "spring", stiffness: 50 }}
      className="absolute left-0 w-full h-20 bg-yellow-400 z-30"
      style={{
        top,
        transform: `rotate(${rotation}deg)`,
        backgroundImage: "repeating-linear-gradient(45deg, #FFD700, #FFD700 40px, #000 40px, #000 80px)",
      }}
    >
      <div className="flex items-center justify-around h-full overflow-hidden">
        <span 
          className="text-2xl md:text-4xl font-black text-black tracking-widest whitespace-nowrap"
          style={{ transform: `rotate(${-rotation}deg)` }}
        >
          WARNING WARNING WARNING WARNING WARNING WARNING WARNING
        </span>
      </div>
    </motion.div>
  )
}
