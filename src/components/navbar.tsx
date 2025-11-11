"use client"

import { motion, useScroll } from "framer-motion"
import { useState, useEffect } from "react"
import MagneticButton from "@/components/magnetic-button"

export default function Navbar() {
  const [isDetached, setIsDetached] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsDetached(latest > 100)
    })
  }, [scrollY])

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: 0,
        boxShadow: isDetached ? "0 10px 40px rgba(212, 166, 42, 0.15)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${
        isDetached
          ? "rounded-2xl mx-4 mt-4 md:mx-8 md:mt-4 glass border border-primary/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-primary rounded-lg flex items-center justify-center pulse-ring hover-lift">
            <span className="text-background font-black text-lg">BS</span>
          </div>
          <span className="hidden sm:inline font-black text-lg neon-glow bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            BIMASAKTI
          </span>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Engineering", "Specs", "Contact"].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-sm font-semibold text-gray-300 hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <MagneticButton 
            className="bg-primary text-black hover:bg-primary/90 font-bold px-6 py-2 rounded-lg"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Join Us
          </MagneticButton>
        </motion.div>
      </div>
    </motion.nav>
  )
}
