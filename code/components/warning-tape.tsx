"use client"

import { motion } from "framer-motion"

export default function WarningTape() {
  const topTapes = Array.from({ length: 6 })
  const bottomTapes = Array.from({ length: 6 })

  const TapeSegment = ({ index, isTop }: { index: number; isTop: boolean }) => (
    <motion.div
      key={index}
      className="absolute"
      style={{
        left: `${index * 16.67}%`,
        top: isTop ? "0%" : "auto",
        bottom: isTop ? "auto" : "0%",
        width: "100%",
        height: "50px",
      }}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Yellow base */}
        <div className="absolute inset-0 bg-primary skew-y-2" />

        {/* Black stripes */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Warning text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-black text-black/60 whitespace-nowrap tracking-widest">⚠ WARNING</span>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden pointer-events-none">
      {/* Top warning tape border */}
      <div className="absolute top-0 left-0 right-0 h-16">
        {topTapes.map((_, i) => (
          <TapeSegment key={`top-${i}`} index={i} isTop={true} />
        ))}
      </div>

      {/* Bottom warning tape border */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        {bottomTapes.map((_, i) => (
          <TapeSegment key={`bottom-${i}`} index={i} isTop={false} />
        ))}
      </div>

      {/* Left side accent tape */}
      <motion.div
        className="absolute left-0 top-1/4 w-20 h-64 origin-left"
        initial={{ rotateZ: -15, opacity: 0 }}
        animate={{ rotateZ: -15, opacity: 0.7 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-primary skew-y-2" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-black text-black/60 whitespace-nowrap tracking-widest rotate-90">
              ⚠ WARNING
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right side accent tape */}
      <motion.div
        className="absolute right-0 top-1/4 w-20 h-64 origin-right"
        initial={{ rotateZ: 15, opacity: 0 }}
        animate={{ rotateZ: 15, opacity: 0.7 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-primary skew-y-2" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-black text-black/60 whitespace-nowrap tracking-widest -rotate-90">
              ⚠ WARNING
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
