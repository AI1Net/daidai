"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [particles, setParticles] = useState<
    { top: string; left: string }[]
  >([]);

  useEffect(() => {
    const p = Array.from({ length: 12 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setParticles(p);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full py-32 overflow-hidden flex items-center justify-center bg-white"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">

        {/* MAIN IMAGE */}
        <Image
          src="/bg/festival.png"
          alt="festival background"
          fill
          priority
          className="object-cover scale-110"
        />

        {/* CINEMATIC FADE (TOP CLEAR → BOTTOM DARK) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 via-white/40 to-black/95" />


        {/* DRAWING STYLE PARTICLES */}
        <div className="absolute inset-0">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-[3px] h-[3px] bg-black/10 rounded-full blur-[1px]"
              animate={{
                y: [0, -35, 0],
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 6 + i * 0.2,
                repeat: Infinity,
              }}
              style={{
                top: p.top,
                left: p.left,
              }}
            />
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[6px] text-black/60 font-bold mb-6">
            FOOTBALL • MEME • CULTURE
          </p>

          <h2 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-6">
            MORE THAN A MEME.
            <br />
            IT’S A MOVEMENT.
          </h2>

          <p className="text-lg text-black/70 max-w-xl mb-10 leading-relaxed">
            DAI DAI is built on football culture, meme energy, and global community power.
            No borders. No limits. Just pure digital stadium energy.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-2 gap-5">
            {[
              "⚽ COMMUNITY OWNED",
              "🎮 MEME POWERED",
              "🚀 GLOBAL VIRAL",
              "🏆 FOOTBALL CULTURE",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl bg-white/70 backdrop-blur border border-black/5 shadow-sm hover:shadow-md transition"
              >
                <span className="font-semibold text-black/80">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >


          {/* IMAGE */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px]"
          >
            <Image
              src="/champion.png"
              alt="champion"
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(255,215,0,0.4)]"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}