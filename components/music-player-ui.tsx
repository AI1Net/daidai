"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Sound() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const rafRef = useRef<number | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [bars, setBars] = useState<number[]>(
    new Array(80).fill(0.01)
  )

  const [energy, setEnergy] = useState(0)
  const [beat, setBeat] = useState(false)
  const [initialized, setInitialized] = useState(false)

  // =========================
  // AUDIO INIT
  // =========================
  const initializeAudio = async () => {
    if (!audioRef.current || initialized) return

    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as any).webkitAudioContext

      const ctx = new AudioContextClass()

      if (ctx.state === "suspended") {
        await ctx.resume()
      }

      const analyser = ctx.createAnalyser()

      analyser.fftSize = 1024
      analyser.smoothingTimeConstant = 0.2

      const source =
        ctx.createMediaElementSource(audioRef.current)

      source.connect(analyser)
      analyser.connect(ctx.destination)

      audioCtxRef.current = ctx
      analyserRef.current = analyser
      sourceRef.current = source

      setInitialized(true)
    } catch (err) {
      console.error(err)
    }
  }

  // =========================
  // SMOOTH DATA
  // =========================
  const smoothData = (data: number[]) => {
    const smoothed = [...data]

    for (let i = 1; i < smoothed.length - 1; i++) {
      smoothed[i] =
        (data[i - 1] +
          data[i] * 2 +
          data[i + 1]) /
        4
    }

    return smoothed
  }

  // =========================
  // VISUALIZER ENGINE
  // =========================
  const updateVisualizer = () => {
    if (!analyserRef.current) return

    const bufferLength =
      analyserRef.current.frequencyBinCount

    const dataArray = new Uint8Array(bufferLength)

    analyserRef.current.getByteFrequencyData(dataArray)

    const barsCount = 80
    const usefulFreq = Math.floor(bufferLength * 0.35)

    // ================= ENERGY =================
    let totalEnergy = 0

    for (let i = 0; i < usefulFreq; i++) {
      totalEnergy += dataArray[i]
    }

    const averageEnergy =
      totalEnergy / usefulFreq

    const normalizedEnergy =
      averageEnergy / 255

    setEnergy(normalizedEnergy)

    // ================= BEAT =================
    const bass = dataArray.slice(0, 18)

    const bassAvg =
      bass.reduce((a, b) => a + b, 0) /
      bass.length

    const isBeat = bassAvg > 140

    if (isBeat) {
      setBeat(true)

      setTimeout(() => {
        setBeat(false)
      }, 120)
    }

    // ================= BARS =================
    const rawBars: number[] = []

    for (let i = 0; i < barsCount; i++) {
      let value = 0

      if (i < barsCount / 2) {
        // LEFT
        const freqIndex = Math.floor(
          (i / (barsCount / 2)) * usefulFreq
        )

        const base =
          dataArray[freqIndex] || 0

        const wave =
          Math.sin(
            Date.now() * 0.005 +
              i * 0.2
          ) *
            0.25 +
          Math.cos(
            Date.now() * 0.003 +
              i * 0.15
          ) *
            0.15

        value = base * (1 + wave)
      } else {
        // RIGHT
        const mirror = barsCount - i

        const freqIndex = Math.floor(
          (mirror / (barsCount / 2)) *
            usefulFreq
        )

        const base =
          dataArray[freqIndex] || 0

        const wave =
          Math.sin(
            Date.now() * 0.006 +
              i * 0.18
          ) *
            0.3 +
          Math.cos(
            Date.now() * 0.004 +
              i * 0.12
          ) *
            0.2

        value = base * (0.9 + wave)
      }

      let normalized = value / 255

      // CENTER BOOST
      const centerDist = Math.abs(
        i - barsCount / 2
      )

      const centerBoost =
        1.4 - centerDist / barsCount

      normalized *= centerBoost

      normalized = Math.pow(
        Math.max(normalized, 0),
        0.55
      )

      rawBars.push(
        Math.max(
          0.02,
          Math.min(1.2, normalized)
        )
      )
    }

    // EXTRA SMOOTH
    const smooth1 = smoothData(rawBars)
    const smooth2 = smoothData(smooth1)

    setBars(smooth2)

    rafRef.current =
      requestAnimationFrame(updateVisualizer)
  }

  // =========================
  // LOOP
  // =========================
  useEffect(() => {
    if (isPlaying) {
      updateVisualizer()
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isPlaying])

  // =========================
  // TOGGLE
  // =========================
const toggle = async () => {
  try {
    if (!audioRef.current) return

    // INIT AUDIO ONLY ONCE
    if (!initialized) {
      const AudioContextClass =
        window.AudioContext ||
        (window as any).webkitAudioContext

      const ctx = new AudioContextClass()

      const analyser = ctx.createAnalyser()

      analyser.fftSize = 1024
      analyser.smoothingTimeConstant = 0.2

      const source =
        ctx.createMediaElementSource(
          audioRef.current
        )

      source.connect(analyser)
      analyser.connect(ctx.destination)

      audioCtxRef.current = ctx
      analyserRef.current = analyser
      sourceRef.current = source

      setInitialized(true)
    }

    // MOBILE FIX
    if (
      audioCtxRef.current?.state ===
      "suspended"
    ) {
      await audioCtxRef.current.resume()
    }

    if (audioRef.current.paused) {
      await audioRef.current.play()

      setIsPlaying(true)

      rafRef.current =
        requestAnimationFrame(
          updateVisualizer
        )
    } else {
      audioRef.current.pause()

      setIsPlaying(false)

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      setBars(new Array(80).fill(0.01))
    }
  } catch (err) {
    console.error("PLAYBACK ERROR:", err)
  }
}

  const glow =
    Math.min(1, energy + (beat ? 0.5 : 0))

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND ================= */}
      <motion.div
        animate={{
          scale: 1 + energy * 0.03,
          filter: `brightness(${1 + glow})`,
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[url('/shakira.png')] bg-cover bg-center opacity-60" />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />

        <motion.div
          animate={{
            opacity: 0.15 + energy * 0.4,
          }}
          className="absolute inset-0 bg-green-400/10 mix-blend-screen"
        />

        <motion.div
          animate={{
            opacity: beat ? 0.3 : 0.08,
          }}
          className="absolute inset-0 bg-white/10"
        />
      </motion.div>

      {/* ================= MAIN PLAYER ================= */}
      <div className="absolute inset-0 flex items-center justify-center z-20">

        <motion.div
          animate={{
            scale: 1 + energy * 0.04,
            y: beat ? -4 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="relative backdrop-blur-2xl bg-white/10 border border-white/10 rounded-[32px] p-6 w-[340px] overflow-hidden"
        >

          {/* GLOW */}
          <motion.div
            animate={{
              opacity: 0.1 + glow * 0.3,
              scale: 1 + energy * 0.2,
            }}
            className="absolute inset-0 bg-green-400/20 blur-3xl"
          />

          {/* IMAGE */}
            <div className="relative z-10 w-full aspect-square overflow-hidden rounded-2xl">
            <motion.img
                src="/shakira2.png"
                className="w-full h-full object-cover object-top"
                animate={{
                scale: 1 + energy * 0.02,
                rotate: beat ? 1.5 : 0,
                }}
            />
            </div>

          {/* INFO */}
          <div className="relative z-10 mt-5 text-center">
            <h1 className="text-2xl font-bold tracking-wide">
              DAI DAI
            </h1>

            <p className="text-white/60 text-sm mt-1">
              SHAKIRA X BURNA BOY
            </p>
          </div>

          {/* CONTROLS */}
          <div className="relative z-10 flex items-center justify-between mt-6">

            <motion.button
              whileTap={{ scale: 0.9 }}
            >
              <SkipBack />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggle}
              className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center"
            >
              {isPlaying ? (
                <Pause size={28} />
              ) : (
                <Play
                  size={28}
                  className="ml-1"
                />
              )}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
            >
              <SkipForward />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ================= VISUALIZER ================= */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[95%]">

        <div className="flex items-end justify-center gap-[4px] h-44">

          {bars.map((height, index) => (
            <motion.div
              key={index}
              className="rounded-full"
              animate={{
                height: `${height * 160}px`,
                opacity:
                  height > 0.03 ? 1 : 0.2,
              }}
              transition={{
                height: {
                  type: "spring",
                  stiffness:
                    height > 0.2
                      ? 400
                      : 180,
                  damping:
                    height > 0.2
                      ? 24
                      : 30,
                  mass: 0.18,
                },

                opacity: {
                  duration: 0.15,
                },
              }}
            style={{
            width: "8px",

            background:
                height > 0.75
                ? "#ef4444" // 🔴 red (peak / beat)
                : height > 0.45
                ? "#22c55e" // 🟢 green (mid energy)
                : "#3b82f6", // 🔵 blue (low energy)

            boxShadow:
                height > 0.75
                ? "0 0 25px rgba(239,68,68,0.9)"
                : height > 0.45
                ? "0 0 20px rgba(34,197,94,0.7)"
                : "0 0 12px rgba(59,130,246,0.5)",
            }}
            />
          ))}
        </div>
      </div>

      {/* ================= AUDIO ================= */}
      <audio
        ref={audioRef}
        loop
        playsInline
        preload="auto"
        crossOrigin="anonymous"
      >
        <source
          src="/dia-chant.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  )
}