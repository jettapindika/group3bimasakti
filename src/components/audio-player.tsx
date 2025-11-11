"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true)
      // Don't auto-play, just show the player so user can manually play
    }

    // Listen for first user interaction
    const events = ['click', 'touchstart', 'keydown']
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction)
      })
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(err => {
            console.error("Play error:", err)
            alert("Cannot play audio. Please check if the music file exists at /public/music/lose-my-mind.mp3")
          })
      }
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => {
          console.error("Audio loading error:", e)
          alert("Audio file not found! Please add 'lose-my-mind.mp3' to the /public/music/ folder")
        }}
      >
        {/* Add your audio source here - you need to add the song file to public folder */}
        <source src="/music/lose-my-mind.mp3" type="audio/mpeg" />
        <source src="/music/lose-my-mind.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating music controller */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
          className="fixed bottom-8 right-8 z-50"
        >
            <motion.div
              className="glass-card p-4 rounded-2xl border border-primary/30 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
            >
              <div className="flex items-center gap-3">
                {/* Visualizer */}
                <div className="flex items-center gap-1 h-8">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-primary rounded-full"
                      animate={isPlaying ? {
                        height: ["8px", "24px", "12px", "24px", "8px"],
                      } : {
                        height: "8px"
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Play/Pause button */}
                <motion.button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-primary" />
                  ) : (
                    <Play className="w-5 h-5 text-primary ml-0.5" />
                  )}
                </motion.button>

                {/* Mute button */}
                <motion.button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-primary" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-primary" />
                  )}
                </motion.button>

                {/* Volume slider */}
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume * 100}
                    onChange={(e) => {
                      const newVolume = Number(e.target.value) / 100
                      setVolume(newVolume)
                      if (newVolume > 0) setIsMuted(false)
                    }}
                    className="w-20 h-1 bg-primary/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                  />
                </div>

                {/* Song info */}
                <div className="ml-2 border-l border-primary/20 pl-3">
                  <motion.p 
                    className="text-xs text-primary font-bold"
                    animate={isPlaying ? { opacity: [0.7, 1, 0.7] } : { opacity: 0.7 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Lose My Mind
                  </motion.p>
                  <p className="text-xs text-gray-400">Background Music</p>
                </div>
              </div>
            </motion.div>

            {/* Debug indicator */}
            {!hasInteracted && (
              <motion.div
                className="absolute -top-12 right-0 bg-primary/90 text-black px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click anywhere to enable music
              </motion.div>
            )}
          </motion.div>
      </AnimatePresence>
    </>
  )
}
