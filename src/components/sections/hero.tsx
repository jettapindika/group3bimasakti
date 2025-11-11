"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Golden Sun Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[-10%] left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-radial from-yellow-300/40 via-yellow-400/20 to-transparent blur-3xl"
        />
        
        {/* University Building Background (blurred) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1200')",
            filter: "brightness(1.1) sepia(0.2)"
          }}
        />
      </div>

      {/* Main Title */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-[15%] left-1/2 transform -translate-x-1/2 z-10 text-center"
      >
        <h1 className="text-7xl md:text-9xl font-bold tracking-wider">
          <span className="text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]">
            GRAND
          </span>
        </h1>
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl md:text-7xl font-bold italic text-yellow-600 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] mt-[-20px]"
        >
          Launching
        </motion.h2>
      </motion.div>

      {/* Warning Tape - Top */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-[45%] left-0 w-full h-20 bg-yellow-400 transform -rotate-3 z-30"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #FFD700, #FFD700 40px, #000 40px, #000 80px)",
        }}
      >
        <div className="flex items-center justify-around h-full">
          <span className="text-2xl md:text-4xl font-black text-black tracking-widest rotate-3">
            WARNING WARNING WARNING WARNING WARNING
          </span>
        </div>
      </motion.div>

      {/* Warning Tape - Middle */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-[55%] left-0 w-full h-20 bg-yellow-400 transform rotate-2 z-30"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #FFD700, #FFD700 40px, #000 40px, #000 80px)",
        }}
      >
        <div className="flex items-center justify-around h-full">
          <span className="text-2xl md:text-4xl font-black text-black tracking-widest -rotate-2">
            WARNING WARNING WARNING WARNING WARNING
          </span>
        </div>
      </motion.div>

      {/* Warning Tape - Bottom */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-[65%] left-0 w-full h-20 bg-yellow-400 transform -rotate-1 z-30"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #FFD700, #FFD700 40px, #000 40px, #000 80px)",
        }}
      >
        <div className="flex items-center justify-around h-full">
          <span className="text-2xl md:text-4xl font-black text-black tracking-widest rotate-1">
            WARNING WARNING WARNING WARNING WARNING
          </span>
        </div>
      </motion.div>

      {/* Race Car Image */}
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5, type: "spring" }}
        className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 z-20 w-[70%] max-w-4xl"
      >
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200"
            alt="Racing Car"
            width={1200}
            height={600}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
          {/* Sponsor Logos Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 right-10 bg-white/80 backdrop-blur-sm rounded-lg p-3"
          >
            <p className="text-sm font-semibold text-gray-700">Sido Muncul</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Coming Soon Text */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 2, type: "spring" }}
        className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 z-40"
      >
        <h3 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)] tracking-wider italic">
          COMING SOON
        </h3>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => {
        // Use index-based deterministic values instead of Math.random()
        const leftPos = ((i * 37) % 100);
        const topPos = ((i * 53) % 100);
        const duration = 3 + (i % 3);
        const delay = (i * 0.3) % 2;
        
        return (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
            }}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${leftPos}%`,
              top: `${topPos}%`,
            }}
          />
        );
      })}
    </section>
  )
}
