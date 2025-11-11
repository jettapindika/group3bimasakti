"use client"

import type React from "react"

import { motion } from "framer-motion"
import CursorReveal from "./cursor-reveal"
import { Zap, Gauge, Cpu, Flame } from "lucide-react"

interface EngineeringFeature {
  icon: React.ReactNode
  title: string
  description: string
  detail: string
}

const features: EngineeringFeature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Aerodynamics",
    description: "Peak Performance",
    detail: "Advanced aerodynamic design optimized for maximum downforce and minimal drag at high speeds",
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Precision Engineering",
    description: "Extreme Accuracy",
    detail: "Every component manufactured to micron-level precision for optimal performance consistency",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Smart Systems",
    description: "AI Integration",
    detail: "Intelligent telemetry and real-time optimization powered by advanced algorithms",
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Power Delivery",
    description: "Raw Performance",
    detail: "Turbocharged engine with dynamic power management for ultimate track dominance",
  },
]

export default function EngineeringExcellence() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative min-h-screen py-20 md:py-32 px-4 md:px-8 bg-background overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/3 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Engineering
            </span>
            <br />
            <span className="text-foreground">Excellence</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Where precision meets performance. Hover to reveal the F1-inspired technology behind our revolutionary race
            car.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <CursorReveal
            revealRadius={40}
            imageUrl="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=700&fit=crop"
          >
            <div className="relative aspect-square md:aspect-video w-full bg-gradient-to-br from-muted via-secondary/20 to-background rounded-2xl border border-primary/30 overflow-hidden backdrop-blur-sm">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-background"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Floating text overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center flex-col gap-4 z-20"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <p className="text-primary font-black text-3xl md:text-5xl text-center">F1 PRECISION</p>
                <p className="text-muted-foreground text-sm md:text-base">Hover to reveal engineering excellence</p>
              </motion.div>
            </div>
          </CursorReveal>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />

              <motion.div
                className="relative p-6 md:p-8 bg-gradient-to-br from-card to-background border border-primary/25 rounded-xl backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(212, 166, 42, 0.15)",
                }}
              >
                {/* Icon */}
                <motion.div
                  className="text-primary mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title and description */}
                <h3 className="text-xl font-black mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-primary font-semibold mb-4">{feature.description}</p>

                {/* Detail text */}
                <motion.p
                  className="text-sm text-muted-foreground flex-grow"
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.detail}
                </motion.p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-background font-black text-lg rounded-full hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(212, 166, 42, 0.3)",
                "0 0 40px rgba(212, 166, 42, 0.6)",
                "0 0 20px rgba(212, 166, 42, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Experience F1 Performance
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
