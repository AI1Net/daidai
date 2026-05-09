"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function Sound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null);

  const rafRef = useRef<number | null>(null);
  const initializedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [bars, setBars] = useState<number[]>(new Array(64).fill(0));
  const [energy, setEnergy] = useState(0);
  const [beat, setBeat] = useState(false);

  // ----------------------------
  // 🧠 AUDIO ENGINE INIT
  // ----------------------------
  useEffect(() => {
    const init = () => {
      if (!audioRef.current || initializedRef.current) return;

      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;

      const ctx = new AudioContextClass();
      const analyser = ctx.createAnalyser();

      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.75;

      const source =
        sourceRef.current ||
        ctx.createMediaElementSource(audioRef.current);

      sourceRef.current = source;

      source.connect(analyser);
      analyser.connect(ctx.destination);

      audioCtxRef.current = ctx;
      analyserRef.current = analyser;
      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

      initializedRef.current = true;
    };

    init();
  }, []);

  // ----------------------------
  // 🎧 VISUAL ENGINE LOOP
  // ----------------------------
  useEffect(() => {
    const tick = () => {
      if (!analyserRef.current || !dataArrayRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      analyserRef.current.getByteFrequencyData(dataArrayRef.current);

      const data = Array.from(dataArrayRef.current);

      // 🔊 GLOBAL ENERGY
      const avg = data.reduce((a, b) => a + b, 0) / data.length;
      const norm = avg / 255;

      setEnergy(norm);

      // 🎧 BEAT DETECTION (drop engine)
      const bass = data.slice(0, 18);
      const bassAvg = bass.reduce((a, b) => a + b, 0) / bass.length;

      const isBeat = bassAvg > 140;

      if (isBeat) {
        setBeat(true);
        setTimeout(() => setBeat(false), 140);
      }

      // 📊 LED WALL SMOOTH EQ
      const step = Math.floor(data.length / 64);

      const smooth = Array.from({ length: 64 }, (_, i) => {
        const slice = data.slice(i * step, i * step + step);
        const v = slice.reduce((a, b) => a + b, 0) / slice.length;

        // smooth decay (stadium feel)
        return v * 0.85 + (bars[i] || 0) * 0.15;
      });

      setBars(smooth);

      rafRef.current = requestAnimationFrame(tick);
    };

    if (isPlaying) tick();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying]);

  // ----------------------------
  // 🎛️ PLAY / PAUSE
  // ----------------------------
  const toggleAudio = async () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    try {
      if (audio.paused) {
        await audioCtxRef.current?.resume();
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
        setBars(new Array(64).fill(0));
        setEnergy(0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // ----------------------------
  // 🌈 STADIUM COLOR ENGINE
  // ----------------------------
  const glow = Math.min(1, energy + (beat ? 0.4 : 0));

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">

      {/* 🌈 STADIUM BACKGROUND FIELD */}
      <motion.div
        animate={{
          scale: 1 + energy * 0.03,
          filter: `brightness(${1 + glow})`
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[url('/shakira.png')] bg-cover bg-center blur-sm opacity-60 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay" />
      </motion.div>

      {/* 🏟️ CROWD SHOCK LAYER */}
      <motion.div
        animate={{
          scale: 1 + energy * 0.02,
          opacity: 0.2 + energy * 0.3
        }}
        className="absolute inset-0 bg-gradient-radial from-green-400/20 to-transparent"
      />

      {/* TITLE */}
      <div className="absolute top-10 left-10 z-20">
        <motion.h1
          animate={{
            x: energy * 20,
            textShadow: beat
              ? "0 0 20px #00ff88"
              : "0 0 0px transparent"
          }}
          className="text-5xl font-extrabold"
        >
          DAI DAI
        </motion.h1>
        <p className="text-gray-300">SHAKIRA X BURNA BOY</p>
      </div>

      {/* 🎧 CENTER STAGE */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="flex flex-col items-center gap-6">

          {/* ART */}
          <motion.div
            animate={{
              scale: 1 + energy * 0.08,
              rotate: beat ? 3 : 0
            }}
            className="w-[280px] h-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img src="/shakira.png" className="w-full h-full object-cover" />
          </motion.div>

          {/* PLAY */}
          <button
            onClick={toggleAudio}
            className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <p className="text-sm text-gray-300">
            {isPlaying ? "DAI DAI" : "WE ARE READY"}
          </p>
        </div>
      </div>

      {/* 📊 LED WALL (64 BARS) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] z-20">
        <div className="flex items-end justify-center gap-[2px] h-24">
          {bars.map((v, i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full bg-green-400"
              animate={{
                height: Math.max(4, v * 1.8),
                opacity: 0.6 + v / 255
              }}
              style={{
                background:
                  v > 180
                    ? "#ff3b3b"
                    : v > 100
                    ? "#3b82f6"
                    : "#22c55e"
              }}
            />
          ))}
        </div>
      </div>

      <audio ref={audioRef} loop>
        <source src="/dia-chant.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}