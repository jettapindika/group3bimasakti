"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Zap, Gauge, Cpu, Flame } from "lucide-react";

interface EngineeringFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
}

const features: EngineeringFeature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Aerodynamics",
    description: "Peak Performance",
    detail:
      "Advanced aerodynamic design optimized for maximum downforce and minimal drag at high speeds",
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Precision Engineering",
    description: "Extreme Accuracy",
    detail:
      "Every component manufactured to micron-level precision for optimal performance consistency",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Smart Systems",
    description: "AI Integration",
    detail:
      "Intelligent telemetry and real-time optimization powered by advanced algorithms",
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Power Delivery",
    description: "Raw Performance",
    detail:
      "Turbocharged engine with dynamic power management for ultimate track dominance",
  },
];

// Hover Reveal Component
function HoverReveal({ imageUrl }: { imageUrl: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const revealRadius = 180; // Size of the reveal circle

  return (
    <div
      ref={containerRef}
      className="relative aspect-square md:aspect-video w-full bg-black rounded-2xl border border-primary/30 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ cursor: "none" }}
    >
      {/* Background Layer - Full image darkened */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Bimasakti FSAE Car"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      {/* Reveal Layer - Perfect circular spotlight with smooth edges */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-200"
          style={{
            maskImage: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 70%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 70%, transparent 100%)`,
          }}
        >
          <img
            src={imageUrl}
            alt="Bimasakti FSAE Car Revealed"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {/* Orange Glow - smooth circular gradient following cursor */}
      {isHovering && (
        <div
          className="absolute pointer-events-none z-10 transition-all duration-100 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
            width: `${revealRadius * 2.5}px`,
            height: `${revealRadius * 2.5}px`,
            background:
              "radial-gradient(circle, rgba(255, 140, 66, 0.5) 0%, rgba(255, 140, 66, 0.25) 25%, rgba(255, 140, 66, 0.1) 50%, transparent 70%)",
            filter: "blur(50px)",
            borderRadius: "50%",
          }}
        />
      )}
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 z-20 pointer-events-none">
        <p className="text-primary font-black text-3xl md:text-5xl text-center font-display">
          BIMASAKTI RACING TEAM
        </p>
        <p className="text-gray-300 text-sm md:text-base">
          Hover to reveal engineering excellence
        </p>
      </div>
    </div>
  );
}

export default function EngineeringExcellence() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative min-h-screen py-20 md:py-32 px-4 md:px-8 bg-background overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/3 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
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
            Where precision meets performance. Hover to reveal the F1-inspired
            technology behind our revolutionary race car.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <HoverReveal imageUrl="/images/BimasaktiCar.jpg" />
        </motion.div>
        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {features.map((feature, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-xl blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    opacity: { duration: 0.4, ease: "easeInOut" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
                <motion.div
                  className="relative p-6 md:p-8 bg-gradient-to-br from-card to-background border rounded-xl backdrop-blur-sm h-full flex flex-col"
                  animate={{
                    y: isHovered ? -8 : 0,
                    borderColor: isHovered
                      ? "rgba(255, 140, 66, 0.5)"
                      : "rgba(255, 140, 66, 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    boxShadow: isHovered
                      ? "0 20px 40px rgba(255, 140, 66, 0.15)"
                      : "0 0 0 rgba(255, 140, 66, 0)",
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="text-primary mb-4"
                    animate={{
                      rotate: isHovered ? [0, 10, -10, 0] : [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: isHovered ? 2 : 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  {/* Title and description */}
                  <motion.h3
                    className="text-xl font-black mb-2 text-foreground"
                    animate={{
                      color: isHovered
                        ? "rgb(255, 140, 66)"
                        : "rgb(255, 255, 255)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-sm text-primary font-semibold mb-4">
                    {feature.description}
                  </p>
                  {/* Detail text */}
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{
                      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.3, delay: isHovered ? 0.1 : 0 },
                    }}
                  >
                    <p className="text-sm text-gray-300">{feature.detail}</p>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
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
  );
}
