"use client"

import { motion } from "framer-motion"
import FlipCard from "./flip-card"

const specs = [
  {
    icon: "⚡",
    title: "Performance",
    description: "Advanced aerodynamics and power delivery",
    backContent: "Engineered for maximum speed and efficiency with cutting-edge aerodynamic design.",
  },
  {
    icon: "🔧",
    title: "Engineering",
    description: "Precision-engineered components",
    backContent: "Every component meticulously designed and tested for optimal performance and reliability.",
  },
  {
    icon: "🎯",
    title: "Innovation",
    description: "Cutting-edge technology integration",
    backContent: "Latest technologies integrated seamlessly for competitive advantage on track.",
  },
  {
    icon: "🏆",
    title: "Excellence",
    description: "Competition-ready machine",
    backContent: "Built to compete at the highest levels with uncompromising quality standards.",
  },
]

export default function SpecsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
                <h2 className="text-5xl md:text-6xl font-black mb-4 font-display">
          TECHNICAL
          <br />
          SPECIFICATIONS
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Click on any card to reveal more details</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective">
        {specs.map((spec, index) => (
          <FlipCard
            key={index}
            icon={spec.icon}
            title={spec.title}
            description={spec.description}
            backContent={spec.backContent}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}
