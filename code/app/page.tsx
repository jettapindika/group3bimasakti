"use client"
import dynamic from "next/dynamic"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { useRef } from "react"
import TextReveal from "@/components/text-reveal"

// Dynamic imports for performance
const CarShowcase = dynamic(() => import("@/components/car-showcase"), { ssr: false })
const SpecsSection = dynamic(() => import("@/components/specs-section"), { ssr: false })
const EngineeringExcellence = dynamic(() => import("@/components/engineering-excellence"), { ssr: false })

export default function Home() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()

  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Premium gradient background with depth layers */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 600], [0, 200]) }}
          className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background/80"
        />

        {/* Cinematic background layers with staggered parallax */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary accent blob - golden movement */}
          <motion.div
            style={{ y: useTransform(scrollY, [0, 500], [0, 150]) }}
            className="absolute top-20 left-[5%] w-96 h-96 rounded-full bg-gradient-to-br from-primary/8 to-primary/2 blur-3xl"
            animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Secondary accent blob - teal depth */}
          <motion.div
            style={{ y: useTransform(scrollY, [0, 500], [0, -120]) }}
            className="absolute bottom-40 right-[8%] w-80 h-80 rounded-full bg-gradient-to-tl from-secondary/6 to-secondary/1 blur-3xl"
            animate={{ scale: [1.1, 0.9, 1.1], x: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />

          {/* Tertiary accent - accent movement */}
          <motion.div
            style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
            className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-bl from-accent/5 to-accent/1 blur-2xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        {/* Hero Content with premium typography */}
        <div className="relative z-10 text-center px-4 md:px-8 flex flex-col items-center max-w-5xl mx-auto">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 inline-block"
          >
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-primary">Engineering Excellence</p>
            </div>
          </motion.div>

          {/* Main headline - premium morphing text */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 100 }}
            className="mb-4"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-2">
              <TextReveal
                type="morphing"
                delay={0.3}
                duration={0.7}
                stagger={0.08}
                className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent inline-block"
              >
                GRAND
              </TextReveal>
            </h1>
            <motion.p className="text-4xl md:text-6xl font-bold text-primary italic tracking-wide">
              <TextReveal type="wave" delay={0.7} duration={0.5} stagger={0.06}>
                Launching
              </TextReveal>
            </motion.p>
          </motion.div>

          {/* Refined subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              <TextReveal type="words" delay={1.3} duration={0.6} stagger={0.12}>
                Experience the pinnacle of engineering innovation and precision
              </TextReveal>
            </p>
          </motion.div>

          {/* Premium CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-xl glow-pulse transition-all duration-300 hover:scale-105"
            >
              Get Updates
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6 rounded-xl bg-transparent transition-all duration-300 hover:border-primary"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Coming soon with character animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8"
          >
            <p className="text-3xl md:text-4xl font-black text-primary italic">
              <TextReveal type="characters" delay={2.2} duration={0.4} stagger={0.08}>
                COMING SOON
              </TextReveal>
            </p>
          </motion.div>
        </div>

        {/* Premium scroll indicator with glow */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            className="w-7 h-12 border-2 border-primary rounded-full flex items-start justify-center p-2"
            animate={{
              boxShadow: [
                "0 0 0 rgba(212, 166, 42, 0.3)",
                "0 0 20px rgba(212, 166, 42, 0.8)",
                "0 0 0 rgba(212, 166, 42, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-1.5 h-2 bg-primary rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Car Showcase Section */}
      <section className="relative py-24 md:py-40 px-4 md:px-8">
        <CarShowcase />
      </section>

      {/* Engineering Excellence Section */}
      <section className="relative py-24 md:py-40 px-4 md:px-8">
        <EngineeringExcellence />
      </section>

      {/* Specs Section */}
      <section className="relative py-24 md:py-40 px-4 md:px-8 bg-gradient-to-b from-secondary/3 to-background">
        <SpecsSection />
      </section>

      {/* Premium Footer CTA */}
      <section className="relative py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        {/* Background gradient blob */}
        <motion.div
          style={{ y: useTransform(scrollY, [2400, 3000], [0, -150]) }}
          className="absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Join Us for the Grand Launch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Be part of engineering history. Register now to witness the future of racing technology and innovation.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-6 rounded-xl glow-pulse"
            >
              Register Now
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
