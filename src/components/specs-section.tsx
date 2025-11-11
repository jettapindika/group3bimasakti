"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const specs = [
  {
    icon: "⚡",
    title: "Performance",
    description: "Advanced aerodynamics and power delivery",
    details: "Engineered for maximum speed and efficiency with cutting-edge aerodynamic design.",
  },
  {
    icon: "🔧",
    title: "Engineering",
    description: "Precision-engineered components",
    details: "Every component meticulously designed and tested for optimal performance and reliability.",
  },
  {
    icon: "🎯",
    title: "Innovation",
    description: "Cutting-edge technology integration",
    details: "Latest technologies integrated seamlessly for competitive advantage on track.",
  },
  {
    icon: "🏆",
    title: "Excellence",
    description: "Competition-ready machine",
    details: "Built to compete at the highest levels with uncompromising quality standards.",
  },
]

export default function SpecsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hover to explore our engineering excellence
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specs.map((spec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative group"
          >
            <div className="relative bg-card border border-primary/20 rounded-xl p-6 h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {spec.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {spec.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {spec.description}
                </p>
                
                {/* Expandable details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredIndex === index ? "auto" : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      {spec.details}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
