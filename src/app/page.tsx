"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import MagneticButton from "@/components/magnetic-button"
import Navbar from "@/components/navbar"
import AudioPlayer from "@/components/audio-player"
import { useRef, useState } from "react"

// Dynamic imports for performance
const EngineeringExcellence = dynamic(() => import("@/components/engineering-excellence"), { ssr: false })
const CarShowcase = dynamic(() => import("@/components/car-showcase"), { ssr: false })
const SpecsSection = dynamic(() => import("@/components/specs-section"), { ssr: false })
const ParticleField = dynamic(() => import("@/components/particle-field"), { ssr: false })
const DataStream = dynamic(() => import("@/components/data-stream"), { ssr: false })
const ScrollProgress = dynamic(() => import("@/components/scroll-progress"), { ssr: false })

export default function Home() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const [selectedStat, setSelectedStat] = useState<number | null>(null)
  
  // Smooth spring physics for scroll
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const heroY = useTransform(smoothScrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(smoothScrollY, [0, 300], [1, 0])
  const heroScale = useTransform(smoothScrollY, [0, 300], [1, 0.95])

  return (
    <main className="min-h-screen bg-black text-foreground overflow-hidden relative scroll-smooth">
      {/* Advanced Background Effects */}
      <ParticleField />
      <DataStream />
      <ScrollProgress />
      <AudioPlayer />
      
      <Navbar />

      {/* F1-Style Hero Section */}
      <motion.section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20"
        style={{ opacity: heroOpacity }}
      >
        {/* Background gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: heroY }}
            className="absolute top-20 left-[5%] w-96 h-96 rounded-full bg-gradient-to-br from-primary/12 to-primary/3 blur-3xl"
            animate={{ 
              scale: [1, 1.15, 1], 
              x: [0, 30, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          />
          <motion.div
            style={{ y: useTransform(smoothScrollY, [0, 500], [0, -120]) }}
            className="absolute bottom-40 right-[8%] w-80 h-80 rounded-full bg-gradient-to-tl from-accent/10 to-accent/2 blur-3xl"
            animate={{ 
              scale: [1.1, 0.9, 1.1], 
              x: [0, -40, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 1,
              repeatType: "reverse"
            }}
          />
        </div>

        {/* F1-Inspired Hero Content */}
        <motion.div 
          className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 md:px-16 max-w-[1800px] mx-auto items-center"
          style={{ scale: heroScale }}
        >
          {/* Left: Bold Typography */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.2,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight font-display">
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Rooted in
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Heritage,
                </motion.span>
                <motion.span 
                  className="block text-white mt-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Driven by
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Innovation.
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.9,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
              className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              Bimasakti Racing Team pushes boundaries with cutting-edge aerodynamics, 
              precision engineering, and relentless innovation. From design to dominance, 
              we engineer victory.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.1,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
              className="flex gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
              >
                <MagneticButton 
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-black font-bold text-lg rounded-lg"
                  onClick={() => {
                    document.getElementById('engineering')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Explore Now
                </MagneticButton>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
              >
                <MagneticButton 
                  className="px-8 py-4 border-2 border-primary/50 hover:border-primary text-white font-bold text-lg rounded-lg glass"
                  onClick={() => {
                    document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  View Specs
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Massive Car Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 100, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1.4, 
              delay: 0.4, 
              type: "spring", 
              stiffness: 100,
              damping: 15
            }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div 
              className="relative aspect-video rounded-2xl overflow-hidden border border-primary/20 bg-black"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: -2,
                transition: { duration: 0.4 }
              }}
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              dragElastic={0.2}
            >
              {/* Car Image */}
              <div className="relative w-full h-full">
                <img 
                  src="/images/CloseupLook.jpg" 
                  alt="FSAE Race Car - Close Up Look"
                  className="w-full h-full object-cover object-center"
                  style={{ display: 'block' }}
                />
              </div>
              
              {/* Animated glow effect overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  backgroundPosition: ['-200% 0', '200% 0']
                }}
                transition={{
                  opacity: { duration: 2, repeat: Infinity },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
                }}
                style={{ backgroundSize: '200% 100%' }}
              />
            </motion.div>

            {/* Floating stats with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.3,
                  type: "spring",
                  stiffness: 120,
                  damping: 12
                }}
                className="mt-8 flex gap-4 justify-center flex-wrap"
              >
                {[
                  { label: "TOP SPEED", value: "140 km/h", color: "primary", icon: "⚡" },
                  { label: "0-100", value: "3.2s", color: "accent", icon: "🚀" },
                  { label: "POWER", value: "85 HP", color: "primary", icon: "💪" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.8, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                    transition={{
                      duration: 0.5,
                      delay: 1.4 + (i * 0.1),
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -8,
                      rotateZ: i === 1 ? 2 : i === 0 ? -2 : 2,
                      transition: { 
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.3}
                    onClick={() => setSelectedStat(selectedStat === i ? null : i)}
                    className="glass-card px-6 py-4 rounded-xl border border-primary/30 cursor-pointer relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      animate={selectedStat === i ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl mb-1"
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.p 
                      className="text-xs text-gray-400 uppercase tracking-wider"
                      animate={selectedStat === i ? { scale: 1.1 } : { scale: 1 }}
                    >
                      {stat.label}
                    </motion.p>
                    <motion.p 
                      className="text-2xl font-bold text-primary"
                      animate={selectedStat === i ? { 
                        scale: [1, 1.2, 1],
                        color: ["#FF8C42", "#E86A33", "#FF8C42"]
                      } : { scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Scroll indicator with gesture */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          drag="y"
          dragConstraints={{ top: -20, bottom: 20 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
            whileHover={{ borderColor: "rgba(255, 140, 66, 1)" }}
          >
            <motion.div
              className="w-1.5 h-2 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Timeline Section - F1 Style */}
      <section className="relative py-32 px-8 md:px-16 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="max-w-[1800px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-20 font-display"
          >
            Racing <span className="text-primary">Timeline</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2023", title: "First podium finish", desc: "Secured third place in national FSAE competition, marking our breakthrough performance with innovative chassis design." },
              { year: "2024", title: "Championship runners-up", desc: "Dominated the season with 8 top-3 finishes, revolutionizing our aerodynamic package and powertrain efficiency." },
              { year: "2025", title: "Engineering excellence", desc: "Targeting championship glory with next-gen electric powertrain, advanced telemetry, and carbon fiber monocoque." }
            ].map((item, i) => (
              <motion.div
                key={item.year}
                layout
                layoutId={item.year}
                initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  rotateY: 3,
                  transition: { 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
                whileTap={{ scale: 0.98 }}
                drag
                dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                dragElastic={0.2}
                className="glass-card p-8 rounded-2xl border border-primary/20 group cursor-pointer relative overflow-hidden"
                style={{
                  boxShadow: "0 8px 32px rgba(255, 140, 66, 0.05)",
                  perspective: 1000
                }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.4 }
                  }}
                />
                
                {/* Particle effect on hover */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />

                <motion.h3 
                  className="text-6xl font-black text-primary mb-4 font-display relative z-10"
                  whileHover={{
                    scale: 1.08,
                    rotateZ: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    textShadow: [
                      "0 0 8px rgba(255, 140, 66, 0.3)",
                      "0 0 12px rgba(255, 140, 66, 0.5)",
                      "0 0 8px rgba(255, 140, 66, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.year}
                </motion.h3>
                <motion.h4 
                  className="text-2xl font-bold text-white mb-3 transition-colors relative z-10"
                  whileHover={{
                    color: "rgb(255, 140, 66)",
                    x: 8,
                    transition: { 
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                  animate={{
                    opacity: [1, 0.9, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {item.title}
                </motion.h4>
                <motion.p 
                  className="text-gray-300 leading-relaxed relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {item.desc}
                </motion.p>
                
                {/* Corner accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Showcase Section */}
      <section id="features" className="relative py-24 md:py-40 px-4 md:px-8">
        <CarShowcase />
      </section>

      {/* Engineering Excellence Section */}
      <section id="engineering" className="relative py-24 md:py-40 px-4 md:px-8">
        <EngineeringExcellence />
      </section>

      {/* Specs Section */}
      <section id="specs" className="relative py-24 md:py-40 px-4 md:px-8 bg-gradient-to-b from-secondary/3 to-background">
        <SpecsSection />
      </section>

      {/* Premium Footer CTA */}
      <section id="contact" className="relative py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollY, [2400, 3000], [0, -150]) }}
          className="absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 80 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
            Join us in pushing the boundaries of racing innovation
          </p>
          <MagneticButton
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xl px-12 py-7 rounded-xl shadow-2xl shadow-primary/20"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get in Touch
          </MagneticButton>
        </motion.div>
      </section>
    </main>
  )
}
