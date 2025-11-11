"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isDetached, setIsDetached] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsDetached(latest > 100)
  })

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: 0,
        boxShadow: isDetached ? "0 10px 30px rgba(212, 175, 55, 0.2)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${
        isDetached
          ? "rounded-2xl mx-4 mt-4 md:mx-8 md:mt-4 bg-background/95 backdrop-blur-xl border border-primary/20 shadow-2xl"
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
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-lg">FS</span>
          </div>
          <span className="hidden sm:inline font-black text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FSAE
          </span>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Launch", "Contact"].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
            Join Us
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  )
}
