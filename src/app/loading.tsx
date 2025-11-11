"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-200 to-white">
      <div className="text-center">
        {/* Hapus children dan gunakan motion.div langsung */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-20 h-20 border-8 border-yellow-600 border-t-transparent rounded-full mx-auto mb-8"
        />
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-yellow-600"
        >
          Loading...
        </motion.h2>
      </div>
    </div>
  )
}
