"use client"

import { motion } from "framer-motion"

interface TextRevealProps {
  children: string
  delay?: number
  duration?: number
  stagger?: number
  type?: "words" | "characters" | "line-by-line" | "morphing" | "wave"
  className?: string
}

export default function TextReveal({
  children,
  delay = 0,
  duration = 0.5,
  stagger = 0.05,
  type = "characters",
  className = "",
}: TextRevealProps) {
  const characters = children.split("")
  const words = children.split(" ")

  if (type === "characters") {
    return (
      <motion.span className={className}>
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              delay: delay + i * stagger,
              duration,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            style={{ display: "inline-block", marginRight: char === " " ? "0.25em" : 0 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  if (type === "words") {
    return (
      <motion.span className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              delay: delay + i * stagger,
              duration,
              type: "spring",
              stiffness: 80,
            }}
            style={{ display: "inline-block", marginRight: "0.35em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  if (type === "line-by-line") {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay,
          duration,
          type: "spring",
          stiffness: 60,
          damping: 15,
        }}
      >
        {children}
      </motion.span>
    )
  }

  if (type === "morphing") {
    return (
      <motion.span className={className}>
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: delay + i * stagger,
              duration: duration * 1.2,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            style={{ display: "inline-block", marginRight: char === " " ? "0.25em" : 0 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  if (type === "wave") {
    return (
      <motion.span className={className}>
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, -15, 0] }}
            transition={{
              delay: delay + i * (stagger * 0.8),
              duration: duration * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
            }}
            style={{ display: "inline-block", marginRight: char === " " ? "0.25em" : 0 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  return <span className={className}>{children}</span>
}
