"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function CarShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center">
      <motion.div style={{ y, opacity }} className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Engineering Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">Witness the masterpiece of precision and innovation</p>
        </motion.div>

        {/* Car Image Placeholder */}
        <Card className="relative overflow-hidden bg-secondary/10 border-primary/20 h-96 md:h-[500px] flex items-center justify-center group">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />

          <motion.div
            className="relative z-10 text-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="text-6xl mb-4">🏎️</div>
            <p className="text-2xl font-black text-primary italic">FSAE RACE CAR</p>
            <p className="text-muted-foreground mt-2">High-Performance Formula Student Vehicle</p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
            animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl"
            animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
        </Card>
      </motion.div>
    </div>
  )
}
