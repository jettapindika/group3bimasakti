"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function DataStream() {
  const [streams, setStreams] = useState<{ id: number; x: number; speed: number; chars: string[] }[]>([])

  useEffect(() => {
    const chars = "01FSAE_BIMASAKTI_RACING_".split("")
    const newStreams = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: (i / 15) * 100,
      speed: Math.random() * 2 + 1,
      chars: Array.from({ length: 20 }, () => chars[Math.floor(Math.random() * chars.length)]),
    }))
    setStreams(newStreams)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 text-primary font-mono text-xs"
          style={{ left: `${stream.x}%` }}
          animate={{
            y: ["0vh", "100vh"],
          }}
          transition={{
            duration: 20 / stream.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {stream.chars.map((char, i) => (
            <div key={i} className="opacity-50">
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}
