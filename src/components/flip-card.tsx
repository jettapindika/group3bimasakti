"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"

interface FlipCardProps {
  icon: string
  title: string
  description: string
  backContent: string
  index?: number
}

export default function FlipCard({ icon, title, description, backContent, index = 0 }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
      rotateX: 90,
      scale: 0.3,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8,
        delay: index * 0.1,
      },
    },
  }

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8, once: true }}
      variants={cardVariants}
      whileHover={{ y: -15, scale: 1.05 }}
      className="h-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isFlipped ? 0.98 : 1,
        }}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 90,
          damping: 12,
          mass: 0.8,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
        className="w-full h-full"
      >
        {/* Front */}
        <motion.div
          style={{
            backfaceVisibility: "hidden",
          }}
          className="w-full h-full"
        >
          <Card className="h-full bg-gradient-to-br from-secondary/30 to-secondary/10 border-primary/20 p-6 hover:border-primary/50 transition-all group flex flex-col items-center justify-center text-center shadow-lg">
            <motion.div
              className="text-5xl mb-4"
              whileHover={{
                scale: 1.3,
                rotate: 360,
              }}
              transition={{ duration: 0.6 }}
              animate={{
                y: [0, -8, 0],
              }}
              transitionEnd={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-black text-primary mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <motion.p
              className="text-xs text-primary/60 mt-4 font-semibold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Click to flip
            </motion.p>
          </Card>
        </motion.div>

        {/* Back */}
        <motion.div
          style={{
            backfaceVisibility: "hidden",
            rotateY: 180,
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Card className="h-full bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50 p-6 flex flex-col items-center justify-center text-center shadow-lg">
            <p className="text-sm text-foreground font-semibold leading-relaxed">{backContent}</p>
            <motion.p
              className="text-xs text-primary/60 mt-4 font-semibold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Click to flip back
            </motion.p>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
